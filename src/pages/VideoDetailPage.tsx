import React from 'react';
import { ArrowLeft, Youtube, Clock, Calendar, Share2, BookOpen, ExternalLink, Check } from 'lucide-react';
import { VIDEOS, ARTICLES, UI_STRINGS, SITE_CONFIG } from '../config/content';
import { Language } from '../types';
import { VideoCard } from '../components/VideoCard';
import { ArticleCard } from '../components/ArticleCard';

interface VideoDetailPageProps {
  videoId: string;
  currentLang: Language;
  onBack: () => void;
  onSelectVideo: (id: string) => void;
  onSelectArticle: (id: string) => void;
}

export const VideoDetailPage: React.FC<VideoDetailPageProps> = ({
  videoId,
  currentLang,
  onBack,
  onSelectVideo,
  onSelectArticle,
}) => {
  const [copied, setCopied] = React.useState(false);
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  const video = VIDEOS.find((v) => v.id === videoId) || VIDEOS[0];

  const relatedVideos = VIDEOS.filter((v) => v.id !== video.id).slice(0, 2);
  const relatedArticles = ARTICLES.filter((a) => a.category === video.category || a.featured).slice(0, 2);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: video.title[currentLang],
          text: video.shortDescription[currentLang],
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 pb-20">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors min-h-[44px]"
        >
          <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          <span>{t.backToVideos}</span>
        </button>
      </div>

      {/* Main Video Player Container */}
      <div className="space-y-6">
        <div className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-800 bg-black shadow-2xl relative">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
            title={video.title[currentLang]}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Header & Meta */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="font-bold text-cyan-400 uppercase">{video.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {video.duration}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {video.publishDate}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3.5 py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors min-h-[40px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>

              <a
                href={SITE_CONFIG.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors min-h-[40px]"
              >
                <Youtube className="w-4 h-4 fill-current" />
                <span>{t.subscribeChannel}</span>
              </a>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {video.title[currentLang]}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {video.fullDescription[currentLang]}
          </p>
        </div>

        {/* Key Takeaways Card */}
        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
            {currentLang === 'en' ? 'Core Scientific Deductions' : 'الاستنتاجات العلمية الرئيسية'}
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {video.keyTakeaways[currentLang].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>{t.relatedArticles}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                currentLang={currentLang}
                onSelectArticle={onSelectArticle}
              />
            ))}
          </div>
        </section>
      )}

      {/* Related Videos */}
      {relatedVideos.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white">
            {t.relatedVideos}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedVideos.map((v) => (
              <VideoCard
                key={v.id}
                video={v}
                currentLang={currentLang}
                onSelectVideo={onSelectVideo}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
