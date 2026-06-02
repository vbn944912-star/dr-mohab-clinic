/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Sparkles, 
  Stethoscope, 
  Activity, 
  ArrowLeft, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  Plus, 
  Eye 
} from 'lucide-react';

interface SubServiceDetails {
  title: string;
  benefits: string[];
  duration: string;
  summary: string;
}

interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tagline: string;
  colorClass: string;
  textClass: string;
  icon: React.ReactNode;
  bgDecorative: string;
  subservices: SubServiceDetails[];
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>('laser');

  const servicesData: ServiceData[] = [
    {
      id: 'laser',
      title: 'جراحات الشرج بالليزر',
      tagline: 'علاجات متطورة بلا ألم ممتد وبدون جروح مفتوحة',
      shortDesc: 'نستخدم تقنيات الليزر الحديثة في علاج البواسير، الشرخ، والناسور الشرجي لتقليل زمن التعافي وتقديم الراحة التامة للمريض.',
      longDesc: 'تعتبر جراحات الشرج بالليزر ثورة طبية تخلص المريض من معاناته بطرق آمنة وسريعة. تعتمد على تركيز أشعة الليزر لإغلاق الأوعية الدموية المغذية للبواسير أو كي أنسجة الناسور بدقة متناهية دون الحاجة إلى استخدام المشرط الجراحي التقليدي، مما يجنب المريض جروح العمليات الصعبة والغيارات اليومية المؤلمة تماماً.',
      colorClass: 'from-teal-500 to-emerald-600 hover:shadow-teal-100',
      textClass: 'text-teal-600',
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      bgDecorative: 'bg-teal-50/50',
      subservices: [
        {
          title: 'علاج البواسير بالليزر (LHP - Laser Hemorrhoidoplasty)',
          summary: 'تستهدف غلق الأوردة المتضخمة للبواسير من الداخل ببلورات ليزر دقيقة دون استئصال أو قص خارجي.',
          duration: '15-20 دقيقة فقط',
          benefits: ['ألم يكاد لا يذكر بعد العملية', 'الحفاظ التام على عضلات الشرج وحمايتها', 'العودة للعمل وممارسة النشاط الطبيعي خلال 48 ساعة']
        },
        {
          title: 'علاج الشرخ الشرجي بالليزر (Laser Fissurectomy)',
          summary: 'كي مبسط وسريع للشرخ الشرجي المزمن وتحفيز التئام الأنسجة المتضررة بصورة مذهلة وفورية.',
          duration: '10 دقائق',
          benefits: ['تخفيف فوري وملموس للألم بعد العملية مباشرة', 'بدون خياطة جراحية أو غيارات مؤلمة', 'جلسة علاجية سريعة بنسبة تعافي قياسية']
        },
        {
          title: 'علاج الناسور الشرجي والعصعصي بالليزر (FiLaC & SiLaC)',
          summary: 'تنظيف مسار الناسور تماماً وتعقيمه، ثم غلقه وكيِّه حرارياً بألياف الليزر المرنة لإغلاق القناة نهائياً.',
          duration: '20-30 دقيقة',
          benefits: ['حماية مطلقة لعضلات التحكم بالبراز', 'نسبة أمان متميزة ونسب شفاء تلامس الـ 98%', 'بدول فجوات وتجويفات جراحية مفتوحة تحتاج حشوات']
        }
      ]
    },
    {
      id: 'general',
      title: 'الجراحة العامة وجراحات الجهاز الهضمي',
      tagline: 'خبرة جراحية رائدة ودراسة متميزة لكل حالة للحصول على أفضل دقة علاجية',
      shortDesc: 'نقدم عمليات جراحات المناظير المتطورة والنزول الآمن لمرضى المرارة، والفتق والزائدة الدودية بمستويات أمان جراحي دقيق.',
      longDesc: 'نوفر حلولاً جراحية تشخيصية وعلاجية لمشكلات جدار البطن والجهاز الهضمي، بالاعتماد على أدق المناظير الجراحية والتقنيات الطبية. نحرص على دراسة تاريخ المريض وفحوصاته لوضع الخطة العلاجية والدوائية الأنسب لمسار الشفاء بأعلى درجات الأمان الطبي والتعقيم القياسي.',
      colorClass: 'from-sky-500 to-indigo-600 hover:shadow-sky-100',
      textClass: 'text-sky-600',
      bgDecorative: 'bg-sky-50/40',
      icon: <Stethoscope className="w-8 h-8 text-sky-600" />,
      subservices: [
        {
          title: 'استئصال المرارة بالمنظار الجراحي',
          summary: 'علاج حصوات والتهابات المرارة من خلال شقوق جراحية ميكروسكوبية لا تتعدى المليمترات بدقة وسهولة.',
          duration: '30-40 دقيقة',
          benefits: ['مظهر تجميلي للجروح دون آثار ظاهرة', 'ألم قليل جداً بعد العملية بالمقارنة بالجراحة المفتوحة', 'مغادرة المستشفى في نفس يوم إجراء العملية']
        },
        {
          title: 'جراحات الفتق بأنواعه واستخدام الشبكات الداعمة',
          summary: 'إصلاح جميع أنواع الفتق (الفتق الإربي، السري، الفخذي، والجراحي) عبر المنظار أو الفتح المحدود مع تثبيت أفضل الخامات من الشبكات الدعامية لمنع الارتداد.',
          duration: '40-50 دقيقة',
          benefits: ['تثبيت شبكات داعمة عالية الجودة متوافقة حيوياً', 'تدعيم قوي لجدار البطن يمنح حماية لأجل طويل', 'تقليل خطر عودة الفتق لأقل المستويات']
        },
        {
          title: 'استئصال الزائدة الدودية وجراحات البطن الطارئة',
          summary: 'تدخل عاجل ودقيق على مدار الساعة لإنقاذ حالات الالتهاب الحاد في الزائدة الدودية بالمناظير وتجنب مضاعفات انفجارها.',
          duration: '20-35 دقيقة',
          benefits: ['استمرارية الكشف والتحضير للعمليات بمرونة تامة', 'مغادرة سريعة وآمنة للمستشفى للاستقرار بالمنزل', 'أصغر ندبات جراحية ممكنة']
        }
      ]
    },
    {
      id: 'checkups',
      title: 'الفحوصات والاستشارات الطبية للجهاز الهضمي',
      tagline: 'تشخيص دقيق هو الخطوة الأولى والطريق الأقصر لاستقرار الصحة وتلافي الجراحات',
      shortDesc: 'استشارات متقدمة وفحوصات مبكرة لمشاكل واضطرابات القولون والمعدة والمتابعة الإرشادية لضمان أفضل وقاية وصحة صحيحة.',
      longDesc: 'تجنب الاضطرابات المزمنة والتوتر الهضمي يبدأ دائماً بالتشخيص المبكر الصحيح. نحن نمنح المريض الوقت الكافي للكشف الإكلينيكي المفصل، ونقدم أرقى استشارات أمراض الجهاز الهضمي لوضع خطط علاج تجمع بين الأدوية الحديثة والحميات الغذائية الوقائية والتشخيص السليم.',
      colorClass: 'from-emerald-500 to-teal-600 hover:shadow-emerald-100',
      textClass: 'text-emerald-600',
      bgDecorative: 'bg-emerald-50/30',
      icon: <Activity className="w-8 h-8 text-emerald-600" />,
      subservices: [
        {
          title: 'تشخيص آلام البطن المزمنة واضطرابات القولون الهضمي والعصبي',
          summary: 'دراسة دقيقة وحكيمة لعوامل المغص المتكرر ومشاكل عسر الهضم، والتشنجات والتهيجات المزمنة للقولون لدحض العلة.',
          duration: 'جلسة كشف مكثفة للراحة',
          benefits: ['تشخيص مسبب المرض وطمأنة تامة للمريض بمكامن الشكوى', 'تقديم بروتوكول علاجي تدريجي لا يسبب أعراضاً جانبية', 'إرشادات مخصصة تغني عن الأدوية المتراكمة المنهكة للمعدة']
        },
        {
          title: 'تقييم الارتجاع المريئي والتهابات المعدة البكتيرية (جرثومة المعدة)',
          summary: 'بناء خطة علاجية للقضاء الفعال على الحوض الحمضي الشديد والتهابات فم المعدة، وبكتيريا الـ H-Pylori ببروتوكولات علاجية حديثة ومحدثة.',
          duration: 'متابعة أسبوعية دقيقة',
          benefits: ['إيقاف حرقة الفم ومشاكل التجشؤ والارتداد', 'استعادة صحة جدار المعدة والقدرة على الهضم المتزن', 'تفادي تطور الالتهابات للقرح النزفية الخطرة']
        }
      ]
    }
  ];

  const currentService = servicesData.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
            أفضل تقنيات وخدمات الرعاية الصحية بالعيادة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 leading-tight">
            خدمات عيادة <span className="text-teal-600">الدكتور مهاب الغروي</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            نجمع بين الخبرة الجراحية العميقة وأحدث التقنيات العلاجية الحديثة، لنقّدم لمرضانا رعاية متكاملة وحلولاً طبية فعّالة لأجل استعادة الصحة والعافية سريعاً وبكل ثقة.
          </p>
        </div>

        {/* Selection Buttons Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border text-right group ${
                  isSelected 
                    ? 'border-teal-500 bg-white shadow-xl shadow-teal-500/5 ring-1 ring-teal-500/20 translate-y-[-4px]' 
                    : 'border-slate-200/80 bg-white/70 hover:bg-white hover:shadow-lg hover:border-slate-300 hover:translate-y-[-2px]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-all ${
                    isSelected ? 'bg-teal-50' : 'bg-slate-100 group-hover:bg-slate-50'
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {service.id === 'laser' ? 'تقنية متميزة' : 'رعاية متكاملة'}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
                <div className="mt-4 flex items-center justify-end text-xs font-bold gap-1 text-teal-600">
                  <span>تفاصيل الخدمة</span>
                  <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-[-4px]' : 'group-hover:translate-x-[-3px]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Block using AnimatePresence */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden min-h-[400px]">
          {/* Subtle stylized background elements inside card */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-teal-50/40 to-slate-50 rounded-br-3xl -z-10" />
          
          <AnimatePresence mode="wait">
            {currentService && (
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Text explanation */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[11px] font-extrabold text-teal-600 uppercase tracking-widest">
                      {currentService.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      {currentService.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {currentService.longDesc}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4.5 border border-slate-100 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      نتبع المنهج الطبي والوقائي الصارم لضمان بيئة آمنة للمرضى، مع متابعة دقيقة وحثيثة لكل تفاصيل رحلتهم العلاجية منذ الاستشارة وحتى الشفاء التام.
                    </p>
                  </div>
                </div>

                {/* Sub-procedures and exact treatments list inside detailed card */}
                <div className="lg:col-span-5 bg-slate-50/50 rounded-2xl p-5 border border-slate-100 space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm border-b border-slate-200/60 pb-2">
                    الإجراءات العلاجية المتوفرة بالعيادة:
                  </h4>
                  <div className="space-y-4.5">
                    {currentService.subservices.map((sub, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="font-extrabold text-teal-900 text-xs sm:text-sm">
                            {sub.title}
                          </h5>
                          <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-md font-mono shrink-0">
                            {sub.duration}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mb-3">
                          {sub.summary}
                        </p>
                        
                        <div className="space-y-1.5 border-t border-slate-100 pt-2.5">
                          {sub.benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-2 items-center text-[11px] text-slate-600 leading-tight">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
