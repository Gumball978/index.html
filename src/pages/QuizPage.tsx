import React, { useState } from 'react';
import { 
  BrainCircuit, CheckCircle2, XCircle, RotateCcw, 
  ArrowRight, Award, HelpCircle, Sparkles, Filter 
} from 'lucide-react';
import { QUIZ_QUESTIONS, CATEGORIES, UI_STRINGS } from '../config/content';
import { Language, CategoryKey } from '../types';

interface QuizPageProps {
  currentLang: Language;
}

export const QuizPage: React.FC<QuizPageProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | 'All'>('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const t = UI_STRINGS[currentLang];
  const isRtl = currentLang === 'ar';

  const questions = React.useMemo(() => {
    if (selectedCategory === 'All') return QUIZ_QUESTIONS;
    const filtered = QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);
    return filtered.length > 0 ? filtered : QUIZ_QUESTIONS;
  }, [selectedCategory]);

  const activeQuestion = questions[currentQuestionIndex] || questions[0];
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === activeQuestion.correctIndex;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    if (index === activeQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = (newCategory: CategoryKey | 'All' = selectedCategory) => {
    setSelectedCategory(newCategory);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  const progressPercentage = Math.round(
    ((currentQuestionIndex + (isAnswered ? 1 : 0)) / questions.length) * 100
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 pb-24">
      {/* Quiz Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <BrainCircuit className="w-4 h-4" />
          <span>{t.interactiveQuiz}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {currentLang === 'en' ? 'Empirical Knowledge Challenge' : 'تحدي المعرفة العلمية التجريبية'}
        </h1>
        <p className="text-sm text-slate-400 max-w-xl">
          {currentLang === 'en'
            ? 'Test your understanding against 10 verified scientific questions with full explanations of physical laws and empirical observations.'
            : 'اختبر فهمك مع 10 أسئلة علمية موثقة مصحوبة بشروحات تفصيلية للقوانين الفيزيائية والملاحظات التجريبية.'}
        </p>
      </div>

      {/* Category Filter Pills (Functional Buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => handleRestart('All')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors min-h-[38px] ${
            selectedCategory === 'All'
              ? 'bg-cyan-500 text-slate-950 font-bold'
              : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {t.allCategories} ({QUIZ_QUESTIONS.length})
        </button>

        {CATEGORIES.map((cat) => {
          const count = QUIZ_QUESTIONS.filter((q) => q.category === cat.key).length;
          if (count === 0) return null;
          const isSelected = selectedCategory === cat.key;

          return (
            <button
              key={cat.key}
              onClick={() => handleRestart(cat.key)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors min-h-[38px] ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.label[currentLang]} ({count})
            </button>
          );
        })}
      </div>

      {/* Main Quiz Area */}
      {!quizFinished ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 space-y-6 backdrop-blur-sm shadow-xl">
          {/* Progress & Live Score Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">
                  {t.question} {currentQuestionIndex + 1}
                </span>
                <span>/ {questions.length}</span>
              </span>

              <div className="flex items-center gap-3">
                <span className="text-slate-500">
                  {t.difficulty}: <span className="text-slate-300">{activeQuestion.difficulty}</span>
                </span>
                <span className="text-emerald-400 font-bold">
                  {score} {t.correctAnswers}
                </span>
              </div>
            </div>

            {/* Accessible Progress Bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              {activeQuestion.category}
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white leading-snug">
              {activeQuestion.question[currentLang]}
            </h2>
          </div>

          {/* Options Grid (Minimum 48px hitboxes for thumb reach) */}
          <div className="space-y-3">
            {activeQuestion.options[currentLang].map((option, idx) => {
              let buttonStyle = 'border-slate-800 bg-slate-950/70 hover:bg-slate-900 text-slate-200';

              if (isAnswered) {
                if (idx === activeQuestion.correctIndex) {
                  buttonStyle = 'border-emerald-500 bg-emerald-950/30 text-emerald-200 font-semibold';
                } else if (idx === selectedOption) {
                  buttonStyle = 'border-rose-500 bg-rose-950/30 text-rose-200';
                } else {
                  buttonStyle = 'border-slate-800/50 bg-slate-950/30 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base flex items-start gap-3.5 transition-all min-h-[52px] ${buttonStyle} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-semibold text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-snug">{option}</span>

                  {isAnswered && idx === activeQuestion.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== activeQuestion.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback Card & Next Trigger */}
          {isAnswered && (
            <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
              <div
                className={`p-4 rounded-2xl border ${
                  isCorrect
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-rose-500/30 bg-rose-950/20 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{currentLang === 'en' ? 'Correct Answer!' : 'إجابة صحيحة!'}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>{currentLang === 'en' ? 'Incorrect' : 'إجابة غير صحيحة'}</span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  {activeQuestion.explanation[currentLang]}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800/60 text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <span className="text-slate-400">{currentLang === 'en' ? 'Domain:' : 'المجال:'}</span>
                  <span>{activeQuestion.scientificContext[currentLang]}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-colors min-h-[48px]"
                >
                  <span>
                    {currentQuestionIndex < questions.length - 1 ? t.nextQuestion : t.seeResults}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Scoreboard */
        <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-8 sm:p-12 text-center space-y-6 backdrop-blur-md shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.scoreResult}
            </h2>
            <p className="text-sm text-slate-300">
              {t.scoreSummary}{' '}
              <span className="text-cyan-400 font-bold font-mono text-lg">
                {score}
              </span>{' '}
              / <span className="font-mono text-lg">{questions.length}</span> {t.correctAnswers}.
            </p>
          </div>

          {/* Score percentage rating */}
          <div className="max-w-xs mx-auto p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="text-4xl font-extrabold font-mono text-cyan-400">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {score >= questions.length * 0.8
                ? currentLang === 'en' ? 'Exceptional Scientific Acumen!' : 'مستوى علمي فائق ومتميز!'
                : score >= questions.length * 0.5
                ? currentLang === 'en' ? 'Solid Empirical Foundation!' : 'معرفة علمية جيدة جداً!'
                : currentLang === 'en' ? 'Keep exploring our video breakdowns!' : 'واصل متابعة حلقاتنا لتعميق فهمك!'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleRestart('All')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors min-h-[48px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.restartQuiz}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
