/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Activity, Milestone, ShieldAlert, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';
import doctorAvatarImg from '../assets/images/doctor_v3_premium_1780443319450.png';

export default function BioSection() {
  // Use our magnificent imported doctor avatar asset

  const facts = [
    {
      icon: <Heart className="w-5 h-5 text-teal-600" />,
      title: 'الاستماع والفهم الإنساني',
      desc: 'نؤمن بأن الرعاية تبدأ بالإنصات المخلص للمريض والمساهمة في طمأنته وتخفيف مخاوفه من العلاج.'
    },
    {
      icon: <Activity className="w-5 h-5 text-teal-600" />,
      title: 'رعاية صحية مخصصة',
      desc: 'لا توجد خطة علاجة تناسب الجميع؛ لذلك نصمم لكل مريض بروتوكولاً جراحياً وطبياً خاصاً بحالته.'
    },
    {
      icon: <Milestone className="w-5 h-5 text-teal-600" />,
      title: 'التعقيم الوقائي الصارم',
      desc: 'نتبع بروتوكولات تعقيم عالمية متطورة للغاية لضمان تلافى حدوث أي عدوى وتحقيق بيئة علاج بأعلى درجات الأمان.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Visual Grid (Right on RTL) */}
          <div className="lg:col-span-5 relative group order-last lg:order-first">
            <div className="absolute inset-0 bg-teal-600 rounded-3xl rotate-3 scale-102 opacity-10 group-hover:rotate-1 group-hover:scale-104 transition-all duration-300" />
            <div className="absolute inset-0 bg-slate-900 rounded-3xl -rotate-2 scale-100 opacity-5 group-hover:-rotate-0 group-hover:scale-102 transition-all duration-300" />
            
            <div className="relative bg-teal-50 border border-slate-100 rounded-3xl overflow-hidden p-3 shadow-xl">
              <img
                src={doctorAvatarImg}
                alt="دكتور مهاب الغروي"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-2xl bg-teal-600/5 object-cover"
              />
              
              {/* Bottom tag inside portrait block */}
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">د. مهاب محمد الغروي</h4>
                  <p className="text-[11px] text-slate-500 font-medium">استشاري الجراحة العامة والشرج بالليزر</p>
                </div>
                <div className="flex items-center gap-1 bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                  <BadgeCheck className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold font-mono">الشرقية</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Clinic Text & Principles Grid (Left on RTL) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">رؤيتنا ورعايتنا الطبية</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                حول عيادة <span className="text-teal-600">الدكتور مهاب الغروي</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              في عيادة دكتور مهاب محمد الغروي، نؤمن بأن الرعاية الطبية المتميزة تبدأ بالاستماع الجيد للمريض وفهم حالته بدقة كإنسان أولاً وكحالة مرضية ثانياً. لذلك نحرص على توفير بيئة طبية مريحة تجمع بين الاحترافية المطلقة والاهتمام الإنساني، مع الالتزام الكامل بأعلى معايير الأمان الطبي واستطبابات العلاج الحديثة.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              تعتمد العيادة على الخبرة التخصصية المتقدمة لتقديم خدمات جراحية آمنة وبأقل فترة تعافي، بالاعتماد على أفضل ما توصلت إليه تقنيات الليزر في العالم، لضمان استعادة العافية في بضعة أيام معدودة وبدون آلام ما بعد الجراحات التقليدية.
            </p>

            {/* Facts Grid */}
            <div className="space-y-4">
              {facts.map((fact, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index} 
                  className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 shadow-sm border border-teal-500/10">
                    {fact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{fact.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{fact.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
