import React from 'react';
import { Youtube, Twitter, Instagram, Github, Atom, Smartphone, FileText } from 'lucide-react';
import { SITE_CONFIG, UI_STRINGS } from '../config/content';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onOpenMobileGuide: () => void;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenMobileGuide,
  onNavigate,
}) => {
  const t = UI_STRINGS[currentLang];

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 pt-12 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                <Atom className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {SITE_CONFIG.channelName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footerMission}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-500 hover:border-red-500/50 flex items-center justify-center transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.xTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono mb-3">
              {t.nav.home}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.videos}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.articles}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.quiz}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Maintenance & Admin */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono mb-3">
              {t.mobileAdminTitle}
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              {t.mobileAdminDesc}
            </p>
            <button
              onClick={onOpenMobileGuide}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold transition-colors min-h-[40px]"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.mobileAdminButton}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footerCopyright}</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-400">VERSION 1.0 (PRODUCTION READY)</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">HOSTED ON VITE + REACT SPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
