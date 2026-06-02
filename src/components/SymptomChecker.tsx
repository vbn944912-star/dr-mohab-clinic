/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Stethoscope, 
  CheckSquare, 
  Square, 
  HelpCircle, 
  AlertTriangle, 
  ChevronLeft, 
  Clock, 
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Symptom {
  id: string;
  label: string;
  desc: string;
}

export default function SymptomChecker({ onNavigate }: { onNavigate: (sec: string) => void }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [analyzed, setAnalyzed] = useState(false);
  const [result, setResult] = useState<{
    possibleConditions: string[];
    riskLevel: 'high' | 'medium' | 'low';
    recommendation: string;
    warning: string;
  } | null>(null);

  const symptomList: Symptom[] = [
    { id: 'bleed', label: 'نزيف دم أحمر فاتح', desc: 'ملاحظة قطرات دم أحمر مع البراز أو على المناديل عقب التبرز.' },
    { id: 'pain', label: 'ألم حاد أو حرقان أثناء التبرز', desc: 'ألم مستمر يشبه السكاكين أو الزجاج المكسور يدوم لساعات بعد قضاء الحاجة.' },
    { id: 'lump', label: 'وجود كتلة أو انتفاخ بارز', desc: 'بروز كتل لحمية أو انتفاخات مستديرة حول فتحة الشرج تزداد حجماً أثناء الحذق.' },
    { id: 'pus', label: 'إفرازات صديدية أو رطوبة متواصلة', desc: 'وجود فتحة صغيرة بجانب الشرج تفرز صديداً مدمماً أو سائل رطب ذو رائحة.' },
    { id: 'itch', label: 'حكة شديدة وتهيج جلدي', desc: 'رغبة شديدة في الحك وشعور بالتحسس العنيف في المنطقة المحيطة بالشرج.' },
    { id: 'constip', label: 'إمساك مزمن مع صعوبة بالغة', desc: 'صعوبة شديدة في إخراج الفضلات وبراز صلب متكرر يحتاج إلى ضغط.' }
  ];

  const handleToggle = (id: string) => {
    setAnalyzed(false);
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleAnalyze = () => {
    if (selectedSymptoms.length === 0) return;

    let possibleConditions: string[] = [];
    let riskLevel: 'high' | 'medium' | 'low' = 'low';
    let recommendation = '';
    let warning = 'يرجى التنبيه أن هذا التحليل استرشادي لتثقيف المريض وتوجيهه، ولا يغني إطلاقاً عن زيارة دكتور مهاب الغروي للفحص السريري الدقيق بالعيادة.';

    const check = (id: string) => selectedSymptoms.includes(id);

    if (check('bleed') && check('pain') && !check('pus') && !check('lump')) {
      possibleConditions = [
        'شرخ شرجي حاد أو مزمن (Anal Fissure)',
        'بواسير داخلية نازفة من الدرجة الأولى أو الثانية'
      ];
      riskLevel = 'medium';
      recommendation = 'هذه الأعراض ترجّح وجود تصدع في جدار الشرج أو تضخم بالأوعية الداخلية. تقنية ليزر الشرج البسيطة تكفل غلق الشرخ أو كي البواسير في كشف سريع يوفّر لك نوماً هادئاً بدون وجع.';
    } else if (check('pus') || (check('pus') && check('itch'))) {
      possibleConditions = [
        'ناسور شرجي (Anal Fistula)',
        'خراج شرجي نشط (Anal Abscess)'
      ];
      riskLevel = 'high';
      recommendation = 'ظهور الإفرازات الصديدية يشير بقوة لوجود نفق ناسوري جلدي. إهمال الناسور قد يسبب تكرار الخراجات الصعبة. ليزر الشرج بتقنية الـ FiLaC يضمن كي النفق بالكامل دون جرح غائر ودون المساس بصمام التحكم.';
    } else if (check('lump') && check('pain')) {
      possibleConditions = [
        'بواسير خارجية متخثرة (Thrombosed Hemorrhoids)',
        'تدلي بائس للبواسير الداخلية من الدرجة الثالثة أو الرابعة'
      ];
      riskLevel = 'high';
      recommendation = 'الكتلة المؤلمة قد تكون جلطة بالبواسير الخارجية أو تضخماً يستلزم التثبيت أو الاستئصال بالليزر (LHP). ننصح بزيارة سريعة للعيادة لتجنب تفاقم الألم وصعوبة الحركة.';
    } else if (check('bleed') && check('lump') && !check('pain')) {
      possibleConditions = [
        'بواسير داخلية متدلية ونازفة (Grade II / III Hemorrhoids)'
      ];
      riskLevel = 'medium';
      recommendation = 'عدم وجود ألم مع نزيف وكتل يشخص البواسير الداخلية بوضوح لأنها عميقة وتخلو من مستقبلات الألم السطحية. علاجها بالليزر متطور وسهل للغاية قبل تحولها لدرجة مستعصية.';
    } else if (check('constip') && check('pain')) {
      possibleConditions = [
        'إمساك وظيفي مزمن أدى إلى شرخ شرجي مبدئي'
      ];
      riskLevel = 'low';
      recommendation = 'الإمساك هو العدو الأول لمنطقة الشرج. ننصح بزيارة دكتور مهاب لتشخيص الحالة مبكراً والحصول على ملينات طبية متزنة وتنظيم الحمية مع بحث إمكانية الحاجة لليزر الشرج قبل تعقد الأمور.';
    } else {
      possibleConditions = [
        'أعراض متنوعة تستوجب فحص القناة الشرجية بالمنظار الشرجي البسيط بالعيادة'
      ];
      riskLevel = 'medium';
      recommendation = 'يرجى حجز كشف طبي سريري سريع لفحص دقيق للحالة، فوجود تداخل في الأعراض يمنع التشخيص التقريبي بدون المعاينة المباشرة من د. مهاب الغروي.';
    }

    setResult({ possibleConditions, riskLevel, recommendation, warning });
    setAnalyzed(true);
  };

  const clearSymptoms = () => {
    setSelectedSymptoms([]);
    setAnalyzed(false);
    setResult(null);
  };

  return (
    <section id="symptoms" className="py-16 lg:py-24 bg-slate-100 relative overflow-hidden text-right">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>مستشار الفحص والأعراض المبدئي</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-3">
            مساعد الأعراض <span className="text-teal-600">والتوجيه العلاجي</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            اختر الأعراض التي تعاني منها حالياً، وسيقوم نظامنا التوجيهي الذكي بتقديم تقييم أولي مبسط لحالتك الصحية وتوجيهك لأفضل الخيارات العلاجية المتاحة.
          </p>
        </div>

        {/* Checker Core Area */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Info Ribbon */}
          <div className="bg-slate-900 text-slate-300 py-3.5 px-6 flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-teal-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>تحليل استرشادي فوري</span>
            </span>
            <span className="hidden sm:inline">أمن وسري بالكامل • لا نخزن أي بيانات</span>
          </div>

          <div className="p-6 sm:p-10">
            {/* Checklist items */}
            <div className="mb-8">
              <h3 className="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2">
                <span>1. اختر الأعراض التي تشعر بها (يمكنك اختيار أكثر من بند):</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {symptomList.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <div
                      key={sym.id}
                      onClick={() => handleToggle(sym.id)}
                      className={`cursor-pointer border p-4.5 rounded-2xl transition-all flex items-start gap-3 text-right select-none ${
                        isChecked
                          ? 'border-teal-500 bg-teal-50/20 shadow-md shadow-teal-500/5'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="mt-1 shrink-0">
                        {isChecked ? (
                          <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center p-0.5 shadow-sm">
                            <CheckSquare className="w-4 h-4 fill-teal-600 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-md border border-slate-300 bg-white" />
                        )}
                      </div>
                      <div>
                        <h4 className={`font-bold text-xs sm:text-sm mt-0.5 transition-colors ${
                          isChecked ? 'text-teal-900' : 'text-slate-800'
                        }`}>
                          {sym.label}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-normal">{sym.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
              <button
                onClick={clearSymptoms}
                disabled={selectedSymptoms.length === 0}
                className="text-xs text-slate-500 font-bold hover:text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                مسح الخيارات
              </button>

              <button
                onClick={handleAnalyze}
                disabled={selectedSymptoms.length === 0}
                className="bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl shadow-md text-xs sm:text-sm transition-all active:scale-97 cursor-pointer"
              >
                تحليل الأعراض بالعيادة
              </button>
            </div>

            {/* Results Animation */}
            <AnimatePresence>
              {analyzed && result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-8 border-t-2 border-dashed border-teal-500/20 pt-8"
                >
                  <div className={`rounded-2xl p-5 border text-right mb-6 ${
                    result.riskLevel === 'high' 
                      ? 'bg-rose-50 border-rose-200 text-rose-950' 
                      : result.riskLevel === 'medium'
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : 'bg-teal-50 border-teal-200 text-teal-950'
                  }`}>
                    <div className="flex items-center gap-2 mb-3.5">
                      <AlertTriangle className={`w-5.5 h-5.5 ${
                        result.riskLevel === 'high' ? 'text-rose-600' : result.riskLevel === 'medium' ? 'text-amber-600' : 'text-teal-600'
                      }`} />
                      <span className="font-extrabold text-sm sm:text-base leading-none">
                        التشخيص الاسترشادي المبدئي:
                      </span>
                    </div>

                    <div className="space-y-2.5 mb-4">
                      {result.possibleConditions.map((cond, i) => (
                        <div key={i} className="flex gap-2 items-center font-bold text-xs sm:text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full ${result.riskLevel === 'high' ? 'bg-rose-600' : 'bg-amber-500'}`} />
                          <span>{cond}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs leading-relaxed border-t border-slate-900/5 pt-3">
                      <strong>توجيه الطبيب:</strong> {result.recommendation}
                    </p>
                  </div>

                  {/* Booking Trigger box */}
                  <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-right">
                      <h4 className="font-bold text-xs sm:text-sm text-emerald-400">لا داعي للقلق؛ الحل الطبي موجود دوماً</h4>
                      <p className="text-[11px] text-slate-300 mt-1 leading-normal max-w-xl">
                        أحدث أجهزة ليزر الشرج بالعيادة تكفل لك التخلص التام والنهائي من هذه المشاكل في أقل من 20 دقيقة، مع خروج آمن وتعافي سريع بدون أوجاع.
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('booking')}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors self-stretch md:self-auto text-center shrink-0 cursor-pointer"
                    >
                      احجز كشفاً طبياً الآن
                    </button>
                  </div>

                  {/* Medical Warning */}
                  <div className="mt-4 text-[10px] text-slate-400 leading-normal bg-slate-50 rounded-xl p-3 text-center border">
                    {result.warning}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
