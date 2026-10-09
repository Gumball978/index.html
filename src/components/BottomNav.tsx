import React from 'react';
import { Home, PlaySquare, BookOpen, BrainCircuit, Info } from 'lucide-react';
import { UI_STRINGS } from '../config/content';
import { Language } from '../types';

interface BottomNavProps {
  currentLang: Language;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentLang,
  currentPage,
  onNavigate,
}) => {
  const t = UI_STRINGS[currentLang];

  const tabs = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'videos', label: t.nav.videos, icon: PlaySquare },
    { id: 'articles', label: t.nav.articles, icon: BookOpen },
    { id: 'quiz', label: t.nav.quiz, icon: BrainCircuit },
    { id: 'about', label: t.nav.about, icon: Info },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1">
      <nav className="grid grid-cols-5 items-center h-14 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPage === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[44px] min-w-[44px] rounded-lg ${
                isActive
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-cyan-400' : ''}`} />
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
