/**
 * Science Horizon - Mobile-First YouTube Science Companion Web App
 * Bilingual (EN/AR), Cinematic Science Aesthetic, Interactive Quizzes,
 * Video Library, Peer-Referenced Articles, and Phone-Friendly CMS.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { MobileAdminGuideModal } from './components/MobileAdminGuideModal';
import { HomePage } from './pages/HomePage';
import { VideoLibraryPage } from './pages/VideoLibraryPage';
import { VideoDetailPage } from './pages/VideoDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { QuizPage } from './pages/QuizPage';
import { AboutPage } from './pages/AboutPage';
import { Language, CategoryKey } from './types';
import { SITE_CONFIG } from './config/content';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('sh_lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedVideoId, setSelectedVideoId] = useState<string>('v-diamond-rain');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('art-diamond-rain');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'All'>('All');
  const [mobileGuideModalOpen, setMobileGuideModalOpen] = useState<boolean>(false);

  // Sync HTML dir and lang attributes when language toggles
  useEffect(() => {
    const isRtl = currentLang === 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    localStorage.setItem('sh_lang', currentLang);

    // Update document title dynamically
    document.title =
      currentLang === 'en'
        ? `${SITE_CONFIG.channelName} – Discover the Science Behind Everything`
        : `${SITE_CONFIG.channelName} – اكتشف العلم وراء كل شيء`;
  }, [currentLang]);

  // Scroll to top upon page navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSelectVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
    navigateTo('video-detail');
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    navigateTo('article-detail');
  };

  const handleFilterCategory = (category: CategoryKey) => {
    setSelectedCategory(category);
    navigateTo('videos');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onSelectVideo={handleSelectVideo}
            onSelectArticle={handleSelectArticle}
            onFilterCategory={handleFilterCategory}
          />
        )}

        {currentPage === 'videos' && (
          <VideoLibraryPage
            currentLang={currentLang}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectVideo={handleSelectVideo}
          />
        )}

        {currentPage === 'video-detail' && (
          <VideoDetailPage
            videoId={selectedVideoId}
            currentLang={currentLang}
            onBack={() => navigateTo('videos')}
            onSelectVideo={handleSelectVideo}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentPage === 'articles' && (
          <ArticlesPage
            currentLang={currentLang}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentPage === 'article-detail' && (
          <ArticleDetailPage
            articleId={selectedArticleId}
            currentLang={currentLang}
            onBack={() => navigateTo('articles')}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentPage === 'quiz' && (
          <QuizPage currentLang={currentLang} />
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            onOpenMobileGuide={() => setMobileGuideModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenMobileGuide={() => setMobileGuideModalOpen(true)}
        onNavigate={navigateTo}
      />

      {/* Mobile Fixed Bottom Navigation Bar (for ergonomic thumb zone) */}
      <BottomNav
        currentLang={currentLang}
        currentPage={currentPage.startsWith('video-') ? 'videos' : currentPage.startsWith('article-') ? 'articles' : currentPage}
        onNavigate={navigateTo}
      />

      {/* Mobile Content Maintenance Modal */}
      <MobileAdminGuideModal
        isOpen={mobileGuideModalOpen}
        onClose={() => setMobileGuideModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
