import React, { useState } from 'react';
import { Youtube, Globe, Menu, X, Atom } from 'lucide-react';
import { SITE_CONFIG, UI_STRINGS } from '../config/content';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'videos', label: t.nav.videos },
    { id: 'articles', label: t.nav.articles },
    { id: 'quiz', label: t.nav.quiz },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with logo icon */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          aria-label={SITE_CONFIG.channelName}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Atom className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {SITE_CONFIG.channelName}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-cyan-400 font-mono hidden sm:inline">
              {SITE_CONFIG.logoText}
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors text-sm font-medium ${
                  isActive
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Language Switcher + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[44px]"
            title={currentLang === 'en' ? 'Switch to Arabic (العربية)' : 'Switch to English'}
            aria-label={currentLang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs uppercase">{currentLang === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          {/* Primary Action Button: YouTube Subscribe / Channel */}
          <a
            href={SITE_CONFIG.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-sm shadow-red-600/30 transition-all hover:scale-102 whitespace-nowrap shrink-0 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <Youtube className="w-4 h-4 fill-current text-white" />
            <span>{t.watchOnYouTube}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (When Hamburger is active) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-${isRtl ? 'right' : 'left'} px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-semibold text-sm shadow-sm"
            >
              <Youtube className="w-4 h-4" />
              <span>{t.subscribeChannel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
