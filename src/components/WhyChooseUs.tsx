/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Award, 
  Zap, 
  SearchCode, 
  ShieldCheck, 
  HeartHandshake, 
  Smile, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-teal-600 animate-pulse" />,
      title: 'خبرة جراحية متخصصة',
      desc: 'حاصل على شهادات عليا في الجراحة العامة وعلاج مختلف أمراض الجهاز الهضمي والقولون بدقة متناهية.'
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: 'ألياف وتقنيات ليزر متطورة',
      desc: 'نمتلك أحدث الأجهزة الجراحية لعلاج البواسير، الناسور، والشرخ دون مشرط ودون التسبب بنزيف ممتد.'
    },
    {
      icon: <SearchCode className="w-6 h-6 text-teal-600" />,
      title: 'تشخيص وخطط علاجية مخصصة',
      desc: 'دراسة واعية ومحكمة لكل تفاصيل المريض وفحوصاته لتصميم بروتوكول آمن يحقق غاية الشفاء والوقاية.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      title: 'التزام صارم بمعايير التعقيم العالمية',
      desc: 'مقر العيادة والأدوات تخضع لعمليات تعقيم صارمة جداً لتقليل خطر الالتهاب أو تناقل الميكروبات.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600" />,
      title: 'مراقبة ومتابعة طوال الرحلة الطبية',
      desc: 'نتواصل معك قبل وبعد العملية للتعليمات الواجبة لضمان عودة ميمونة لحياتك الطبيعية دون قلق.'
    },
    {
      icon: <Smile className="w-6 h-6 text-teal-600" />,
      title: 'بيئة مريحة وودودة تمنح الطمأنينة',
      desc: 'منذ اللحظة الأولى لدخولك مقر العيادةستشعر بالدفء والاحتواء الإنساني والاحترام الفائق لشخصك وخصوصيتك.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-teal-50/20 text-right relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 inline-flex items-center gap-1 uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>معايير التميز الطبي بالعيادة</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 leading-tight">
            لماذا تختار عيادة <span className="text-teal-600">الدكتور مهاب الغروي</span>؟
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            الرعاية المتميزة ليست مصادفة، بل هي ثمرة التزامنا الثابت واليومي بأعلى مستويات الاحترافية الطبية لأجل توفير أقصى راحة تامة وصحة مستدامة لمرضانا.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, index) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="bg-white rounded-2xl p-6.5 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-teal-500/20 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/10 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Decorative top border glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5 border border-teal-500/10 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-inner">
                <span className="text-teal-600 group-hover:text-white transition-colors">{point.icon}</span>
              </div>

              <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                {point.title}
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
