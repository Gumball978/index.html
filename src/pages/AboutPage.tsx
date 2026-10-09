import React from 'react';
import { 
  Youtube, Twitter, Instagram, Github, Atom, 
  Smartphone, ShieldCheck, Compass, Globe, CheckCircle2 
} from 'lucide-react';
import { SITE_CONFIG, UI_STRINGS } from '../config/content';
import { Language } from '../types';

interface AboutPageProps {
  currentLang: Language;
  onOpenMobileGuide: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLang,
  onOpenMobileGuide,
}) => {
  const t = UI_STRINGS[currentLang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Atom className="w-4 h-4" />
          <span>{SITE_CONFIG.channelName}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {currentLang === 'en'
            ? 'Dedicated to Scientific Clarity and Empirical Discovery'
            : 'ملتزمون بالوضوح العلمي والاكتشاف التجريبي الرصين'}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {SITE_CONFIG.tagline[currentLang]}
        </p>
      </div>

      {/* Mission & Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">
            {currentLang === 'en' ? 'Our Channel Mission' : 'رسالة القناة'}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? 'We produce cinematic, evidence-backed science documentaries for YouTube that explore fundamental questions: from cosmic origins and stellar evolution to subatomic wave mechanics and genetic engineering.'
              : 'ننتج وثائقيات علمية رصينة ومدعومة بالأدلة التجريبية على يوتيوب، تستكشف الأسئلة الوجودية والكونية الكبرى: من أصل المادة وتطور النجوم إلى ميكانيكا الكم والهندسة الوراثية.'}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">
            {currentLang === 'en' ? 'Scientific Integrity Standard' : 'معايير النزاهة العلمية'}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? 'We categorically distinguish between established empirical facts, scientific consensus, and open theoretical hypotheses. Every claim links back to verifiable peer-reviewed literature.'
              : 'نفصل بحزم بين الحقائق التجريبية المثبتة والإجماع العلمي من جهة، وبين النماذج والفرضيات النظرية المفتوحة من جهة أخرى، مع توثيق كافة المراجع الأولية.'}
          </p>
        </div>
      </div>

      {/* Social Links & Community */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white">
            {currentLang === 'en' ? 'Connect Across All Platforms' : 'تواصل معنا عبر المنصات'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {currentLang === 'en'
              ? 'Join our growing community of science enthusiasts, researchers, and students.'
              : 'انضم لمجتمعنا العلمي المتنامي من الباحثين والطلاب والمهتمين بالعلوم.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href={SITE_CONFIG.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-red-500/30 bg-red-950/20 hover:bg-red-950/40 text-white transition-all group"
          >
            <div className="flex items-center gap-3">
              <Youtube className="w-6 h-6 text-red-500 fill-current" />
              <div>
                <p className="font-bold text-sm">YouTube</p>
                <p className="text-xs text-slate-400">{SITE_CONFIG.youtubeHandle}</p>
              </div>
            </div>
            <span className="text-xs text-red-400 font-semibold group-hover:underline">
              {t.subscribeChannel}
            </span>
          </a>

          <a
            href={SITE_CONFIG.socials.xTwitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="font-bold text-sm">X / Twitter</p>
                <p className="text-xs text-slate-400">@ScienceHorizon</p>
              </div>
            </div>
            <span className="text-xs text-slate-400">Follow</span>
          </a>

          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-pink-400" />
              <div>
                <p className="font-bold text-sm">Instagram</p>
                <p className="text-xs text-slate-400">Visual Science Shorts</p>
              </div>
            </div>
            <span className="text-xs text-slate-400">Follow</span>
          </a>

          <a
            href={SITE_CONFIG.socials.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-slate-200" />
              <div>
                <p className="font-bold text-sm">Open Source Code</p>
                <p className="text-xs text-slate-400">GitHub Repository</p>
              </div>
            </div>
            <span className="text-xs text-slate-400">View Repo</span>
          </a>
        </div>
      </div>

      {/* Mobile Maintenance Section */}
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-cyan-950/20 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              {currentLang === 'en'
                ? 'Manage Entire Site From Your Phone'
                : 'إدارة الموقع بالكامل من هاتفك المحمول'}
            </h2>
            <p className="text-xs text-slate-400">
              {currentLang === 'en'
                ? 'Engineered so you never need a computer to update videos, articles, or quizzes.'
                : 'صُمم الموقع بحيث لا تحتاج لجهاز كمبيوتر لإضافة الفيديوهات أو المقالات أو الأسئلة.'}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {currentLang === 'en'
            ? 'All your website configuration, YouTube episode links, research articles, quiz questions, and bilingual texts are concentrated in a single, well-documented file: src/config/content.ts. Edit it directly on GitHub from your Android phone and your website will redeploy in under 60 seconds.'
            : 'جميع إعدادات الموقع، وروابط حلقات اليوتيوب، والمقالات، والأسئلة، والنصوص باللغتين مجمعة في ملف واحد واضح وموثق: src/config/content.ts. يمكنك تعديله مباشرة عبر هاتف أندرويد ليتحدث الموقع حياً خلال دقيقة واحدة.'}
        </p>

        <div>
          <button
            onClick={onOpenMobileGuide}
            className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors min-h-[44px]"
          >
            <Smartphone className="w-4 h-4" />
            <span>{t.mobileAdminButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
