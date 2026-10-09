import React from 'react';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { ArticleItem, Language } from '../types';
import { UI_STRINGS } from '../config/content';
import { ScienceGraphic } from './ScienceIllustrations';

interface ArticleCardProps {
  article: ArticleItem;
  currentLang: Language;
  onSelectArticle: (articleId: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  currentLang,
  onSelectArticle,
}) => {
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <article
      onClick={() => onSelectArticle(article.id)}
      className="group cursor-pointer flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/40 transition-all duration-200 overflow-hidden shadow-sm"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <ScienceGraphic type={article.illustrationType} title={article.title[currentLang]} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Zero-Pill metadata: Clean unboxed text with typographic separators */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
          <span className="font-semibold text-cyan-400 tracking-wide uppercase font-mono text-[11px]">
            {article.category}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="flex items-center gap-1 font-mono text-slate-400">
            <Clock className="w-3 h-3" />
            {article.readTimeMinutes} {t.readTime}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="font-mono text-slate-400">{article.publishDate}</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
          {article.title[currentLang]}
        </h3>

        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {article.excerpt[currentLang]}
        </p>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
          <span>{t.readFullArticle}</span>
          <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
        </div>
      </div>
    </article>
  );
};
