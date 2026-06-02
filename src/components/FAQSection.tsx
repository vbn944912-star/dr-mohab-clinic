/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'laser',
      question: 'هل جراحات ومناظير الشرج بالليزر مؤلمة بعد العملية؟',
      answer: 'على الإطلاق! يصفها جميع المرضى بأن الألم طفيف جداً ومحتمل ومختلف تماماً عن الجراحة التقليدية المؤلمة بالمشرط. يعود السبب في ذلك إلى غياب الشقوق المفتوحة الكاشفة للأعصاب وتجنب الغرز العميقة، ويوفر الطبيب كورس مسكنات خفيفة ومضادات وذمة لضمان راحة ومبيت سليم طوال فترة الالتئام.'
    },
    {
      id: 'faq-2',
      category: 'laser',
      question: 'متى يمكنني العودة لممارسة عملي وحياتي الطبيعية بعد عملية الليزر؟',
      answer: 'بفضل طبيعة تقنيات التبخير الحراري (LHP) وكي الناسور، يستطيع غالبية المرضى العودة للأعمال المكتبية والمشي العادي في غضون 48 إلى 72 ساعة فقط. ومع ذلك، نوصي بالحظر وتجنب رفع الأوزان الثقيلة، الكبس الحاد أثناء التبرز، أو الرياضات الشاقة لمدة أسبوعين على الأقل لإعطاء الأنسجة الداخلية الوقت الكامل للالتحام والالتئام التلقائي.'
    },
    {
      id: 'faq-3',
      category: 'laser',
      question: 'هل يغادر المريض المستشفى في نفس يوم العملية أم يستلزم المبيت؟',
      answer: 'كل جراحات الشرج بالليزر في عيادة دكتور مهاب الغروي هي "جراحات اليوم الواحد". وهذا يعني أن المريض يغادر المستشفى إلى منزله بعد الإجراء بساعة إلى ساعتين على الأكثر فور زوال مفعول التخدير البسيط، ودون الحاجة لأية حشوات شرجية داخلية تعيق حركته أو تسبب له الضيق.'
    },
    {
      id: 'faq-4',
      category: 'gastro',
      question: 'ما هي أهمية الصيام والتحضير المسبق لزيارة كشف العيادة؟',
      answer: 'يفضل الصيام عن الأكل والشراب لمدة تتراوح بين 5 إلى 6 ساعات قبل موعد حضورك للعيادة. ذلك الصيام البسيط يمنح العيادة فرصة ذهبية لوضع تقييم جراحي ومنظاري فوري لمنطقة القناة الشرجية أو جدار المعدة والموجات التلفزيونية إذا تطلبت الحالة ذلك دون تكرار للزيارات وتكبد مشاق السفر.'
    },
    {
      id: 'faq-5',
      category: 'laser',
      question: 'هل هناك خطر على صمامات التحكم وعضلات الشرج في جراحة الليزر؟',
      answer: 'هذه أكبر ميزة يتفرد بها بدقة ليزر الشرج (ولا سيما في جراحات الناسور والشرخ المزمن). يقوم ليزر الشرج بكي مسار الناسور أو حرق نواة البواسير الداخلية دون المساس أو القطع في الألياف العصبية العضلية لصمام التحكم، وهو ما يحميك تماماً من مضاعفات الارتخاء أو فقدان السيطرة المصاحبة لقص المشرط في الطرق القديمة.'
    },
    {
      id: 'faq-6',
      category: 'gastro',
      question: 'هل يمكن الاكتفاء بالعلاج الدوائي دون تدخل ليزر لحالات البواسير والشرخ؟',
      answer: 'مضمون الكشف السليم هو الذي يقرر. حالات البواسير في الدرجة الأولى والثانية والشرخ الحاد الحديث يعالجه الدكتور مهاب دائماً بأحدث البروتوكولات الدوائية والملينات وتنظيم الحركة المعوية. إنما الحالات المتطورة (مثل البواسير المتدلاة الدرجة الثالثة والرابعة) أو الشرخ المزمن المتليف الذي لا ينعقد التئامه بالدواء، يكون التبخير بالليزر هو الحل الآمن والأسهل والوحيد لتلافي الشكوى.'
    }
  ];

  const handleToggle = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-slate-50 text-right relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 uppercase tracking-widest inline-flex items-center gap-1">
            <HelpCircle className="w-4 h-4 text-teal-500" />
            <span>نجيب على جميع استفسارات المرضى</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-4 leading-tight">
            الأسئلة الشائعة <span className="text-teal-600">والإجابات الطبية</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            جمعنا لك الأسئلة والهموم الأكثر تداولاً عن جراحات الليزر والجراحة العامة والمناظير بالشرقية مع إجابات علمية دقيقة ومبسطة يوصي بها دكتور مهاب الغروي.
          </p>
        </div>

        {/* Dynamic Interactive Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute right-4 top-3.5 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="ابحث بموضوع سؤالك (مثال: ألم، ليزر، ناسور، صيام)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-450 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-sm"
          />
        </div>

        {/* Accordion Questions Grid */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              لا توجد أسئلة تطابق بحثك المكتوب. يرجى إعادة محاولة صياغة كلمة البحث بأسلوب آخر.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-teal-500 shadow-lg shadow-teal-500/5 ring-1 ring-teal-500/10' 
                      : 'border-slate-200 hover:border-slate-350 hover:shadow-sm'
                  }`}
                >
                  {/* Top click bar button */}
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-50/50"
                  >
                    <span className={`font-black text-xs sm:text-sm leading-snug transition-colors ${
                      isOpen ? 'text-teal-900' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Body text expanded using motion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Final Interactive CTA callout inside FAQ list */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl border border-slate-850">
          <div className="flex gap-4 items-start text-right">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0 text-teal-400 mt-1">
              <MessageSquare className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-teal-400">هل لديك استفسار جراحي مخصص لمريض؟</h4>
              <p className="text-xs text-slate-300 mt-1 leading-normal max-w-xl">
                الدكتور مهاب الغروي وسكرتاريته الطبية مستعدون لاستقبال التقارير والأشعات والتحاليل والإجابة عليها لمساعدتكم وسن التوجيه المناسب.
              </p>
            </div>
          </div>
          <a
            href="tel:01019200900"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-6 rounded-xl text-xs sm:text-sm text-center block shrink-0 self-stretch sm:self-auto cursor-pointer"
          >
            تواصل تليفونياً الآن: 01019200900
          </a>
        </div>

      </div>
    </section>
  );
}
