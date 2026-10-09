import React from 'react';
import { Play, Clock, Calendar, ArrowRight } from 'lucide-react';
import { VideoItem, Language } from '../types';
import { UI_STRINGS } from '../config/content';
import { ScienceGraphic } from './ScienceIllustrations';

interface VideoCardProps {
  video: VideoItem;
  currentLang: Language;
  onSelectVideo: (videoId: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  currentLang,
  onSelectVideo,
}) => {
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <article
      onClick={() => onSelectVideo(video.id)}
      className="group cursor-pointer flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/40 transition-all duration-200 overflow-hidden shadow-sm"
    >
      {/* Visual illustration slot with overlay play trigger */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <ScienceGraphic type={video.illustrationType} title={video.title[currentLang]} />
        
        {/* Play HUD Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 transform scale-90 group-hover:scale-100 transition-transform">
            <Play className={`w-6 h-6 fill-current ${isRtl ? 'rotate-180' : 'ml-0.5'}`} />
          </div>
        </div>

        {/* Duration badge - clean mono timestamp */}
        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[11px] font-mono text-slate-200 flex items-center gap-1">
          <Clock className="w-3 h-3 text-cyan-400" />
          <span>{video.duration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        {/* Zero-Pill metadata: Clean unboxed text with typographic separators */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
          <span className="font-semibold text-cyan-400 tracking-wide uppercase font-mono text-[11px]">
            {video.category}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="flex items-center gap-1 font-mono text-slate-400">
            <Calendar className="w-3 h-3" />
            {video.publishDate}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
          {video.title[currentLang]}
        </h3>

        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {video.shortDescription[currentLang]}
        </p>

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
          <span>{t.watchNow || 'Watch Episode'}</span>
          <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
        </div>
      </div>
    </article>
  );
};
