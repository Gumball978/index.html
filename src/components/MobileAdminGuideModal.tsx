import React, { useState } from 'react';
import { X, Smartphone, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface MobileAdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const MobileAdminGuideModal: React.FC<MobileAdminGuideModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const isRtl = currentLang === 'ar';

  const sampleVideoCode = `// In src/config/content.ts -> add to VIDEOS array:
{
  id: 'v-my-new-video',
  youtubeId: 'YOUR_YOUTUBE_ID_HERE', // e.g. from youtube.com/watch?v=XXXX
  title: {
    en: 'Your English Title Here',
    ar: 'عنوان الفيديو باللغة العربية هنا',
  },
  shortDescription: {
    en: 'Summary for search and thumbnail card.',
    ar: 'ملخص الفيديو للبطاقة والبحث.',
  },
  fullDescription: {
    en: 'Detailed video explanation and scientific context.',
    ar: 'شرح مفصل لمحتوى الفيديو والسياق العلمي.',
  },
  keyTakeaways: {
    en: ['Key point 1', 'Key point 2', 'Key point 3'],
    ar: ['النقطة الأساسية 1', 'النقطة الأساسية 2', 'النقطة الأساسية 3'],
  },
  category: 'Space', // 'Space' | 'Earth' | 'Physics' | 'Biology' | 'Technology' | 'StrangeFacts'
  duration: '15:20',
  publishDate: '2026-04-01',
  featured: true,
  illustrationType: 'space',
},`;

  const sampleArticleCode = `// In src/config/content.ts -> add to ARTICLES array:
{
  id: 'art-my-topic',
  slug: 'my-new-science-topic',
  title: {
    en: 'Scientific Title Here',
    ar: 'عنوان المقال العلمي هنا',
  },
  excerpt: {
    en: 'One-paragraph summary of the article.',
    ar: 'ملخص في فقرة واحدة لموضوع المقال.',
  },
  category: 'Physics',
  readTimeMinutes: 6,
  publishDate: '2026-04-01',
  author: { en: 'Science Horizon Research Desk', ar: 'فريق أبحاث سايِنس هورايزون' },
  isDraftNotice: true,
  illustrationType: 'quantum',
  featured: false,
  sections: [
    {
      id: 'sec-1',
      heading: { en: '1. Theoretical Framework', ar: '1. الإطار النظري' },
      content: { en: 'Detailed scientific explanation...', ar: 'الشرح العلمي الدقيق...' },
      evidenceType: 'empirical_fact', // 'empirical_fact' | 'scientific_hypothesis' | 'established_theory'
      evidenceNote: { en: 'Citing empirical research...', ar: 'توثيق الملاحظة التجريبية...' }
    }
  ],
  references: [
    {
      title: 'Peer-reviewed paper title',
      institutionOrJournal: 'Nature Physics',
      year: '2025'
    }
  ]
},`;

  const copyToClipboard = async (text: string, tabKey: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTab(tabKey);
      setTimeout(() => setCopiedTab(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-slate-100 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {currentLang === 'en'
                  ? 'Mobile Phone Content Management Guide'
                  : 'دليل إدارة محتوى الموقع من هاتفك الأندرويد'}
              </h2>
              <p className="text-xs text-slate-400">
                {currentLang === 'en'
                  ? 'Zero computer needed. Edit content in under 60 seconds from any smartphone.'
                  : 'بدون الحاجة لجهاز حاسوب. عدّل ونشر المحتوى في أقل من 60 ثانية من أي هاتف ذكي.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Simple Steps */}
        <div className="my-6 space-y-4">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
            <h3 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono">1</span>
              {currentLang === 'en' ? 'Open GitHub Mobile or Chrome Browser' : 'افتح تطبيق غيت هب أو متصفح كروم على هاتفك'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'On your Android phone, open your GitHub repository in Chrome or the GitHub app. Navigate directly to file: src/config/content.ts.'
                : 'على هاتفك الأندرويد، افتح مستودع المشروع (Repository) على موقع GitHub أو تطبيقه الرسمي، واذهب مباشرة للملف: src/config/content.ts.'}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
            <h3 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono">2</span>
              {currentLang === 'en' ? 'Tap the Pencil (Edit) Icon' : 'اضغط على أيقونة القلم (تعديل الملف)'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'All your YouTube videos, articles, quizzes, daily facts, and social links live in this one file. Just paste your new entry and tap "Commit changes".'
                : 'جميع مقاطع الفيديو والمقالات والأسئلة وحقائق اليوم والروابط موجودة في هذا الملف الواحد. الصق محتواك الجديد واضغط "Commit changes".'}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
            <h3 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono">3</span>
              {currentLang === 'en' ? 'Automatic Live Deployment (Zero Cost)' : 'نشر تلقائي فوري للموقع مجاناً'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'When connected to Vercel, Netlify, or Google Cloud Run, saving your changes triggers an automated instant build that publishes live in ~45 seconds.'
                : 'بمجرد ربط المستودع بمنصة استضافة مجانية (مثل Vercel أو Netlify أو Google Cloud Run)، يُعاد بناء الموقع ونشره حياً خلال 45 ثانية تلقائياً.'}
            </p>
          </div>
        </div>

        {/* Copy-Paste Templates */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              {currentLang === 'en' ? 'Template: Add New Video' : 'نموذج جاهز: إضافة فيديو جديد'}
            </h4>
            <button
              onClick={() => copyToClipboard(sampleVideoCode, 'video')}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 transition-colors"
            >
              {copiedTab === 'video' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTab === 'video' ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-48">
            <code>{sampleVideoCode}</code>
          </pre>

          <div className="flex items-center justify-between pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              {currentLang === 'en' ? 'Template: Add New Article' : 'نموذج جاهز: إضافة مقال جديد'}
            </h4>
            <button
              onClick={() => copyToClipboard(sampleArticleCode, 'article')}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 transition-colors"
            >
              {copiedTab === 'article' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTab === 'article' ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-48">
            <code>{sampleArticleCode}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
          >
            {currentLang === 'en' ? 'Got It' : 'فهمت ذلك'}
          </button>
        </div>
      </div>
    </div>
  );
};
