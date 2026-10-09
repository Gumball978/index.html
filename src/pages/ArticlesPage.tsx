import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Filter } from 'lucide-react';
import { ARTICLES, CATEGORIES, UI_STRINGS } from '../config/content';
import { Language, CategoryKey } from '../types';
import { ArticleCard } from '../components/ArticleCard';

interface ArticlesPageProps {
  currentLang: Language;
  selectedCategory: CategoryKey | 'All';
  onSelectCategory: (cat: CategoryKey | 'All') => void;
  onSelectArticle: (articleId: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  currentLang,
  selectedCategory,
  onSelectCategory,
  onSelectArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = UI_STRINGS[currentLang];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle =
        article.title[currentLang].toLowerCase().includes(query) ||
        article.title.en.toLowerCase().includes(query) ||
        article.title.ar.toLowerCase().includes(query);

      const matchesExcerpt =
        article.excerpt[currentLang].toLowerCase().includes(query) ||
        article.excerpt.en.toLowerCase().includes(query) ||
        article.excerpt.ar.toLowerCase().includes(query);

      return matchesCategory && (matchesTitle || matchesExcerpt);
    });
  }, [selectedCategory, searchQuery, currentLang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 pb-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{t.nav.articles}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {currentLang === 'en' ? 'Peer-Referenced Science Articles' : 'المقالات والأبحاث العلمية'}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          {currentLang === 'en'
            ? 'Carefully referenced explanatory essays addressing cosmological mysteries, quantum paradoxes, and planetary physics.'
            : 'مقالات وأبحاث موثقة بالدراسات المحكمة تستكشف أسرار الكون، وفيزياء الكم، وجيولوجيا الكواكب.'}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-800 bg-slate-900/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectCategory('All')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors min-h-[40px] ${
              selectedCategory === 'All'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {t.allCategories} ({ARTICLES.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = ARTICLES.filter((a) => a.category === cat.key).length;
            const isSelected = selectedCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors min-h-[40px] ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label[currentLang]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              currentLang={currentLang}
              onSelectArticle={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl border border-slate-800/80 bg-slate-900/30 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Filter className="w-5 h-5" />
          </div>
          <p className="text-base font-medium text-slate-300">{t.noResultsFound}</p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-400 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            {t.clearSearch}
          </button>
        </div>
      )}
    </div>
  );
};
