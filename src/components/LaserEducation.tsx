/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Flame, 
  HelpCircle, 
  Smile, 
  ShieldAlert, 
  TrendingDown, 
  Layers, 
  Sparkles, 
  Calendar,
  Frown,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LaserEducation() {
  const laserKeyPoints = [
    {
      title: 'شعاع مركز للغاية بدقة ميكرونية',
      desc: 'نوفر حماية كاملة للأنسجة الطبيعية المجاورة، وخصوصاً عضلات التحكم بالشرج لتلافي أي مضاعفات للمستقبل.'
    },
    {
      title: 'تحفيز الالتئام التلقائي',
      desc: 'تعمل طاقة الليزر على إغلاق الأوردة وكي مسار الناسور ذاتياً بفعل الحرارة المنفذة، مما يسرع التئام الأنسجة.'
    },
    {
      title: 'منظومة خالية من النزيف والجروح',
      desc: 'بما أن الليزر يقوم بكي وتبخير الأوعية في نفس لحظة دخوله، تخرج من العملية دون نزيف ودون جروح مفتوحة.'
    }
  ];

  const comparisonData = [
    {
      criterion: 'شدة الألم بعد العملية',
      traditional: 'ألم حاد ومستمر يحتاج مسكنات قوية وحقن لأسابيع.',
      laser: 'ألم طفيف ومحتمل جداً، يختفي خلال يوم أو يومين بمجرد المسكنات الخفيفة.',
      isLaserBetter: true,
    },
    {
      criterion: 'الجروح والغرز الجراحية',
      traditional: 'شق جراحي مفتوح يحتاج خياطة أو حشو مع غيارات يومية طويلة ومؤلمة.',
      laser: 'دخل مبسط جداً من خلال ألياف رفيعة بقطر الإبرة، بدون شقوق مفتوحة أو حشوات.',
      isLaserBetter: true,
    },
    {
      criterion: 'فترة النقاهة والتعافي',
      traditional: 'راحة تامة في الفراش لمدة تتراوح بين 15 إلى 30 يوماً وتوقف عن العمل.',
      laser: 'مغادرة المستشفى سريعاً، والعودة للعمل وممارسة الحياة الطبيعية في غضون 48 ساعة.',
      isLaserBetter: true,
    },
    {
      criterion: 'التأثير على عضلات التحكم',
      traditional: 'يوجد خطورة محتملة لإصابة عضلات صمام الشرج في حالات علاج الناسور.',
      laser: 'أعلى حماية وأمان لصمام الشرج وعضلات التحكم نظراً لدقة الكي ومحدودية الامتداد الجراحي.',
      isLaserBetter: true,
    },
    {
      criterion: 'مدة العملية والحدوث مجددا',
      traditional: 'عملية أطول ومخاطر التهابات عالية قد تؤدي لتكرار الشكوى.',
      laser: 'تستغرق من 15 إلى 25 دقيقة فقط، مع نسب نجاح تلامس 98% وعدم عودة الشكوى.',
      isLaserBetter: true,
    }
  ];

  return (
    <section id="laser-edu" className="py-16 lg:py-24 bg-white relative overflow-hidden text-right">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 uppercase tracking-widest inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>لماذا تعتبر تقنيات الليزر الخيار الجراحي الأفضل؟</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 leading-tight">
            المقارنة العلمية: <span className="text-teal-600">الجراحة بالليزر</span> مقابل <span className="text-slate-500 font-bold">الجراحة التقليدية</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            مقارنة دقيقة وشاملة تساعدك على تمييز الفوائد الجوهرية والراحة الكبيرة التي توفرها تكنولوجيا الليزر الحديثة في عيادة دكتور مهاب الغروي.
          </p>
        </div>

        {/* Highlight points of laser */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {laserKeyPoints.map((point, index) => (
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              key={index} 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-400/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100/50 text-teal-600 flex items-center justify-center font-bold text-lg mb-4">
                0{index + 1}
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">{point.title}</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900 text-xs sm:text-sm">
                  <th className="py-4 px-4 font-extrabold text-slate-800 w-1/4">وجه المقارنة</th>
                  <th className="py-4 px-4 font-extrabold text-slate-500 w-3/8 text-sky-900">الجراحة التقليدية بالمشرط</th>
                  <th className="py-4 px-4 font-extrabold text-teal-700 w-3/8 bg-teal-500/10 rounded-t-xl text-center">الليزر (مع د. مهاب الغروي)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-100/40 transition-colors">
                    <td className="py-4.5 px-4 font-bold text-slate-900">{row.criterion}</td>
                    
                    {/* Traditional info */}
                    <td className="py-4.5 px-4 text-slate-500 leading-relaxed">
                      <div className="flex gap-2 items-start">
                        <Frown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    
                    {/* Laser info */}
                    <td className="py-4.5 px-4 text-slate-700 leading-relaxed bg-teal-500/5 text-center font-medium border-x border-teal-500/10">
                      <div className="flex gap-2 items-start justify-center text-teal-900 font-semibold">
                        <Smile className="w-4.5 h-4.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{row.laser}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white rounded-2xl p-4.5 border border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Activity className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                <strong>ملاحظة هامة:</strong> تتميز عمليات الليزر في دكتور مهاب الغروي بأرقى درجات التعقيم، ونسب عودة مرض تؤول إلى الصفر بفضل التطويع الدقيق لليزر.
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono font-medium shrink-0">معايير الدقة والأمان الطبي بالشرقية</p>
          </div>
        </div>

      </div>
    </section>
  );
}
