import React from 'react';
import { 
  ArrowLeft, Clock, Calendar, AlertCircle, CheckCircle2, 
  HelpCircle, BookOpen, ExternalLink, Share2, Check 
} from 'lucide-react';
import { ARTICLES, UI_STRINGS } from '../config/content';
import { Language, ArticleItem } from '../types';
import { ScienceGraphic } from '../components/ScienceIllustrations';
import { ArticleCard } from '../components/ArticleCard';

interface ArticleDetailPageProps {
  articleId: string;
  currentLang: Language;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  articleId,
  currentLang,
  onBack,
  onSelectArticle,
}) => {
  const [copied, setCopied] = React.useState(false);
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  const article = ARTICLES.find((a) => a.id === articleId) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title[currentLang],
          text: article.excerpt[currentLang],
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 pb-24">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors min-h-[44px]"
        >
          <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          <span>{t.backToArticles}</span>
        </button>
      </div>

      {/* Article Header & Metadata */}
      <header className="space-y-4">
        {/* Zero-Pill unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="font-bold text-cyan-400 uppercase tracking-wider font-mono">
            {article.category}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {article.readTimeMinutes} {t.readTime}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            {article.publishDate}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{article.author[currentLang]}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {article.title[currentLang]}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {article.excerpt[currentLang]}
        </p>

        {/* Share Button */}
        <div className="pt-2 flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="text-xs font-mono text-slate-400">
            {currentLang === 'en' ? 'DOCUMENT ID: ' : 'معرف الوثيقة: '}
            <span className="text-slate-300">{article.slug}</span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share Article'}</span>
          </button>
        </div>
      </header>

      {/* Draft Status Disclosure Notice (Mandatory Requirement) */}
      {article.isDraftNotice && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 sm:p-5 flex items-start gap-3.5 text-amber-200 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-300">{t.draftNoticeTitle}</h4>
            <p className="text-amber-200/90 leading-relaxed">{t.draftNoticeBody}</p>
          </div>
        </div>
      )}

      {/* Scientific Illustration Banner */}
      <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
        <ScienceGraphic type={article.illustrationType} title={article.title[currentLang]} />
      </div>

      {/* Table of Contents */}
      {article.sections.length > 1 && (
        <nav className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>{t.tableOfContents}</span>
          </h3>
          <ul className="space-y-2 text-sm">
            {article.sections.map((sec, idx) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}.</span>
                  <span>{sec.heading[currentLang]}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Article Body Sections */}
      <div className="space-y-12 text-slate-200">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-b border-slate-800/80 pb-2">
              {section.heading[currentLang]}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {section.content[currentLang]}
            </p>

            {/* Distinction between Empirical Fact vs Hypothesis vs Consensus */}
            {section.evidenceType && (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs space-y-1">
                <div className="flex items-center gap-2 font-mono font-bold uppercase">
                  {section.evidenceType === 'empirical_fact' && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{t.evidenceBadge.empirical_fact}</span>
                    </>
                  )}
                  {section.evidenceType === 'scientific_hypothesis' && (
                    <>
                      <HelpCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{t.evidenceBadge.scientific_hypothesis}</span>
                    </>
                  )}
                  {section.evidenceType === 'established_theory' && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">{t.evidenceBadge.established_theory}</span>
                    </>
                  )}
                </div>
                {section.evidenceNote && (
                  <p className="text-slate-400 leading-normal pl-6">
                    {section.evidenceNote[currentLang]}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Primary Academic References */}
      {article.references.length > 0 && (
        <section className="pt-8 border-t border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
            {t.references}
          </h3>
          <ul className="space-y-3">
            {article.references.map((ref, idx) => (
              <li
                key={idx}
                className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 text-xs text-slate-400 flex items-start justify-between gap-3"
              >
                <div>
                  <p className="font-semibold text-slate-200">"{ref.title}"</p>
                  <p className="font-mono text-slate-400 mt-0.5">
                    {ref.institutionOrJournal} {ref.year ? `(${ref.year})` : ''}
                  </p>
                </div>
                {ref.doiOrUrl && (
                  <span className="font-mono text-cyan-400 shrink-0 text-[11px]">
                    DOI: {ref.doiOrUrl}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 border-t border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-white">
            {t.relatedArticles}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard
                key={rel.id}
                article={rel}
                currentLang={currentLang}
                onSelectArticle={onSelectArticle}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
