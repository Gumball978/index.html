import React, { useState } from 'react';
import { Sparkles, RefreshCw, Check, Copy } from 'lucide-react';
import { DAILY_FACTS, UI_STRINGS } from '../config/content';
import { Language } from '../types';

interface FactCardProps {
  currentLang: Language;
}

export const FactCard: React.FC<FactCardProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const t = UI_STRINGS[currentLang];

  const currentFact = DAILY_FACTS[currentIndex];

  const handleNextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_FACTS.length);
  };

  const handleCopyFact = async () => {
    try {
      await navigator.clipboard.writeText(
        `"${currentFact.fact[currentLang]}" — Source: ${currentFact.verifiedSource} via Science Horizon`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-cyan-500/30">
      <div className="flex items-center justify-between gap-4 mb-4">
        {/* Unboxed metadata according to Zero-Pill Discipline */}
        <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="uppercase tracking-wider font-mono">{t.quickFacts}</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400 font-mono">#{currentIndex + 1} / {DAILY_FACTS.length}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopyFact}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Copy Fact"
            aria-label="Copy scientific fact"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={handleNextFact}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={t.newFact}
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.newFact}</span>
          </button>
        </div>
      </div>

      <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed mb-4">
        "{currentFact.fact[currentLang]}"
      </blockquote>

      <p className="text-sm text-slate-400 leading-normal mb-5">
        {currentFact.explanation[currentLang]}
      </p>

      {/* Clean unboxed footer metadata */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">{t.source}:</span>
          <span className="font-mono text-slate-300">{currentFact.verifiedSource}</span>
        </div>
        <span className="text-cyan-400/80 font-mono text-[11px]">
          SCIENCE HORIZON ARCHIVE
        </span>
      </div>
    </div>
  );
};
