import React, { useState } from 'react';
import { 
  Youtube, Play, BookOpen, BrainCircuit, ChevronRight, 
  Send, Sparkles, Check, Globe, Atom, Dna, Cpu, Telescope 
} from 'lucide-react';
import { 
  SITE_CONFIG, CATEGORIES, VIDEOS, ARTICLES, 
  QUIZ_QUESTIONS, UI_STRINGS 
} from '../config/content';
import { Language, CategoryKey } from '../types';
import { VideoCard } from '../components/VideoCard';
import { ArticleCard } from '../components/ArticleCard';
import { FactCard } from '../components/FactCard';
import { ScienceGraphic } from '../components/ScienceIllustrations';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onSelectVideo: (videoId: string) => void;
  onSelectArticle: (articleId: string) => void;
  onFilterCategory: (category: CategoryKey) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
  onSelectVideo,
  onSelectArticle,
  onFilterCategory,
}) => {
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  const featuredVideo = VIDEOS.find((v) => v.featured) || VIDEOS[0];
  const latestVideos = VIDEOS.slice(0, 3);
  const featuredArticles = ARTICLES.slice(0, 2);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      // Store locally for privacy
      try {
        const existing = JSON.parse(localStorage.getItem('sh_newsletter_subscribers') || '[]');
        existing.push({ email: email.trim(), date: new Date().toISOString() });
        localStorage.setItem('sh_newsletter_subscribers', JSON.stringify(existing));
      } catch {
        // ignore
      }
      setNewsletterSubscribed(true);
      setEmail('');
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Telescope': return <Telescope className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-blue-400" />;
      case 'Dna': return <Dna className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Cinematic Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 overflow-hidden border-b border-slate-900 cosmic-grid">
        {/* Atmospheric radial gradient backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtle editorial kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.heroKicker}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            {t.heroTitle}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          {/* Primary Call-to-Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={SITE_CONFIG.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/25 transition-all hover:scale-102 min-h-[48px]"
            >
              <Youtube className="w-5 h-5 fill-current" />
              <span>{t.watchOnYouTube}</span>
            </a>

            <button
              onClick={() => onNavigate('videos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-colors min-h-[48px]"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span>{t.exploreLibrary}</span>
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold text-sm transition-colors min-h-[48px]"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>{t.takeQuiz}</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {/* 2. Featured Video Highlight Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                {t.featuredVideo}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {featuredVideo.title[currentLang]}
              </h2>
            </div>
            <button
              onClick={() => onSelectVideo(featuredVideo.id)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{t.exploreLibrary}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            {/* Embedded Player or Interactive Preview */}
            <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black relative shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?rel=0`}
                title={featuredVideo.title[currentLang]}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Video Context & Takeaways */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 uppercase font-bold">{featuredVideo.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredVideo.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredVideo.publishDate}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredVideo.fullDescription[currentLang]}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  {currentLang === 'en' ? 'Core Scientific Observations' : 'أبرز الملاحظات العلمية'}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {featuredVideo.keyTakeaways[currentLang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectVideo(featuredVideo.id)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors min-h-[44px]"
                >
                  {currentLang === 'en' ? 'Open Video Details & Notes' : 'تفاصيل الحلقة والمراجع'}
                </button>
                <a
                  href={`https://youtube.com/watch?v=${featuredVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center gap-2 transition-colors min-h-[44px]"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>{t.viewOnYouTube}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Daily Science Fact Card */}
        <section className="space-y-4">
          <FactCard currentLang={currentLang} />
        </section>

        {/* 4. Latest Videos Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                {t.latestVideos}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentLang === 'en' ? 'Recent Science Breakdowns' : 'أحدث التحليلات العلمية'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('videos')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{t.allVideos}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                currentLang={currentLang}
                onSelectVideo={onSelectVideo}
              />
            ))}
          </div>
        </section>

        {/* 5. Explore Research Categories */}
        <section className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              {t.categories}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {currentLang === 'en' ? 'Explore by Scientific Discipline' : 'تصفح حسب المجال العلمي'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => {
              const videoCount = VIDEOS.filter((v) => v.category === cat.key).length;
              const articleCount = ARTICLES.filter((a) => a.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  onClick={() => onFilterCategory(cat.key)}
                  className="group text-left p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/90 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.label[currentLang]}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {cat.description[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{videoCount} {t.nav.videos} · {articleCount} {t.nav.articles}</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 6. Featured Peer-Referenced Articles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                {t.featuredArticles}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentLang === 'en' ? 'In-Depth Science Articles' : 'مقالات علمية مفصلة'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('articles')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{t.allArticles}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                currentLang={currentLang}
                onSelectArticle={onSelectArticle}
              />
            ))}
          </div>
        </section>

        {/* 7. Interactive Quiz Teaser Section */}
        <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/20 p-6 sm:p-10 backdrop-blur-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <BrainCircuit className="w-4 h-4" />
              <span>{t.interactiveQuiz}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {currentLang === 'en'
                ? 'How Well Do You Know Modern Physics & Astronomy?'
                : 'ما مدى معرفتك بأسرار الفيزياء الحديثة والفلك؟'}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'Test your understanding with 10 challenging questions covering astrophysics, orbital mechanics, quantum wave duality, and genetics. Receive instant verified feedback.'
                : 'اختبر معلوماتك مع 10 أسئلة علمية دقيقة تغطي الفيزياء الفلكية، والميكانيكا المدارية، وازدواجية الكم، وعلم الوراثة، مع شروحات علمية موثقة لكل إجابة.'}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('quiz')}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-102 min-h-[48px]"
              >
                {t.takeQuiz}
              </button>
            </div>
          </div>
        </section>

        {/* 8. Newsletter Signup (Simulated local storage with explicit non-fake disclosure) */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {t.newsletterTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {t.newsletterSub}
          </p>

          {newsletterSubscribed ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>{t.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterInputPlaceholder}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Send className="w-4 h-4" />
                <span>{t.newsletterButton}</span>
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 font-mono">
            {t.newsletterNotice}
          </p>
        </section>
      </div>
    </div>
  );
};
