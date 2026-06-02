/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Zap, ShieldCheck, ArrowLeft, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Use the highly beautiful generated asset path
  const clinicHeroImg = '/src/assets/images/clinic_hero_1780441184700.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-teal-50/50 via-white to-slate-50 pt-8 pb-16 lg:py-24 overflow-hidden">
      {/* Abstract decorative backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-12 left-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Visual Content (Left column space, but placed left for RTL correctly) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-12 xl:col-span-5 order-last lg:order-first"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16:10] lg:aspect-auto">
                <img
                  src={clinicHeroImg}
                  alt="عيادة الدكتور مهاب محمد الغروي لليزر والجراحة"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Overlay Card inside image frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold backdrop-blur-md bg-white/20 px-2 py-0.5 rounded-full">
                      5.0 (تقييمات ممتازة)
                    </span>
                  </div>
                  <h4 className="text-lg font-bold leading-tight">مركز الشرج بالليزر المعتمد بالشرقية</h4>
                  <p className="text-xs text-slate-200 mt-1">تجهيز بأحدث تكنولوجيا ليزر جراحي دون تنميل أو ألم ممتد.</p>
                </div>
              </div>

              {/* Outside Floating Badges */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h5 className="text-[13px] font-bold text-slate-950 leading-tight">استشاري معتمد</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">خبرة جراحية واسعة وآمنة</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-4 bg-slate-900 text-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 max-w-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white leading-tight">مستقبل بدون ألم</h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">تعافي سريع مقارنة بالتدخل التقليدي</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Block */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center order-first lg:order-last"
          >
            {/* Top Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-teal-100/50 hover:bg-teal-100 border border-teal-200/50 text-teal-800 px-3 py-1.5 rounded-full text-xs font-semibold self-start tracking-wide mb-6">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>تقنيات حديثة لراحة أسرع وأمان تام</span>
            </motion.div>

            {/* Dr name and primary intro */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.2] mb-4">
              دكتور <span className="text-teal-600">مهاب محمد الغروي</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-lg sm:text-xl font-bold text-slate-700 mb-6 leading-relaxed flex flex-col gap-1">
              <span>استشاري الجراحة العامة وجراحات الجهاز الهضمي</span>
              <span className="text-teal-700 text-base font-semibold">استشاري جراحات الشرج بالليزر – مركز أبو كبير، الشرقية</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              مع دكتور مهاب الغروي، ستحصل على رعاية طبية متكاملة تجمع بين الدقة الجراحية والتقنيات العلاجية الحديثة. نلتزم بالتشخيص السليم لتوفير خطط علاجية آمنة ومدروسة بمستويات رعاية تفوق التوقعات للمرضى.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10">
              <button
                onClick={() => onNavigate('booking')}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-teal-600/20 active:scale-95 transition-all text-center text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>احجز استشارتك الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onNavigate('services')}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold py-4 px-8 rounded-2xl hover:border-slate-300 transition-all text-center text-sm cursor-pointer"
              >
                استكشف خدماتنا الطبية
              </button>
            </motion.div>

            {/* Highlight Statistics Ribbon */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200/80"
            >
              {[
                { label: 'تقنية ليزر دقيقة', value: '100%' },
                { label: 'معدل أمان كامل', value: '100%' },
                { label: 'تعافي سريع وصحي', value: 'أيام معدودة' },
                { label: 'رعاية ومتابعة مستمرة', value: '24/7' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-100/50 p-3 rounded-2xl border border-slate-200/30">
                  <div className="font-bold text-lg md:text-xl text-teal-700">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
