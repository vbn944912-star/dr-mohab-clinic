/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronLeft, 
  ShieldCheck, 
  Send,
  X,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('السلام عليكم دكتور مهاب، أرغب في الاستفسار عن كشف جراحة ليزر الشرج وأقرب موعد متاح بالعيادة.');

  const handleWhatsAppSend = () => {
    // URL encode the message
    const encodedText = encodeURIComponent(chatMessage);
    const whatsappUrl = `https://wa.me/201019200900?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    setShowChat(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 lg:py-16 text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
            
            {/* Dr Profile introduction column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
                  <Stethoscope className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-white text-base">دكتور مهاب محمد الغروي</span>
                  <span className="text-[10px] text-teal-400 font-medium">استشاري الجراحة العامة والشرج بالليزر</span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                عيادة طبية متخصصة تقدم أرقى الفحوصات والاستشارات، وأحدث تقنيات الليزر الطبي في علاج بواسير وشرخ وناسور الشرج لضمان الأمان والتعافي السريع.
              </p>

              <div className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 max-w-sm">
                <ShieldCheck className="w-5.5 h-5.5 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-400 leading-normal">
                  ملتزمون تماماً بالتعقيم الوقائي الشامل وغرف الفحص المعقمة ومعدات معتمدة أوروبياً لحماية صحتكم.
                </span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-extrabold text-white text-sm border-b border-slate-800 pb-2">روابط سريعة</h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <button onClick={() => onNavigate('hero')} className="hover:text-teal-400 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>الرئيسية</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-teal-400 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>عن العيادة</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-400 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>خدماتنا الطبية</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('symptoms')} className="hover:text-teal-400 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>تحليل الأعراض الإلكتروني</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('booking')} className="hover:text-teal-400 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>حجز موعد كشف فوري</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact details column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-extrabold text-white text-sm border-b border-slate-800 pb-2">التواصل والعنوان بالشرقية</h4>
              <ul className="space-y-3.5 text-xs">
                <li className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-350 block leading-tight">عنوان العيادة:</span>
                    <span className="text-slate-400 mt-1 block">الشرقية، مركز أبو كبير، عمارة الأطباء المجاورة للصيدلية الكبرى</span>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-350 block leading-tight">للتواصل أو الحجز الفوري:</span>
                    <a href="tel:01019200900" className="text-emerald-400 hover:text-emerald-350 font-mono font-bold mt-1 block text-base leading-none">
                      01019200900
                    </a>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-350 block leading-tight">ساعات استقبال الكشف:</span>
                    <span className="text-slate-400 mt-1 block leading-snug">يومياً من السبت حتى الخميس من 5:00 م حتى 9:00 م</span>
                    <span className="text-teal-400/80 mt-1 block font-bold text-[10px]">الجمعة العيادة مغلقة للصيانة الفنية للأجهزة</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-slate-500 text-center sm:text-right">
              حقوق النشر والطبع محفوظة © {currentYear} عيادة دكتور مهاب محمد الغروي.
            </p>
            <div className="flex gap-4 text-[11px] text-slate-500 font-medium">
              <span>تطبيقات الجراحة الطبية المتطورة بالليزر</span>
              <span>•</span>
              <span>مركز أبو كبير - الشرقية</span>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION WHATSAPP CHAT MODULE */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        
        {/* Floating dialog box */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl w-[320px] sm:w-[350px] overflow-hidden mb-3 text-right"
            >
              {/* Box Top Header */}
              <div className="bg-gradient-to-l from-emerald-600 to-teal-600 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8.5 h-8.5 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
                    <MessageCircle className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs sm:text-sm">سكرتارية د. مهاب الغروي</h5>
                    <p className="text-[10px] text-emerald-100 mt-0.5 leading-none">متصل ومستعد للمساعدة الطبية</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-white hover:bg-white/10 p-1 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat messages */}
              <div className="p-4 bg-slate-50 space-y-3.5">
                <div className="bg-emerald-50 rounded-2xl rounded-tr-none p-3 border border-emerald-100 text-emerald-950 text-xs leading-relaxed max-w-[85%] self-start">
                  <span>مرحباً بك! السكرتارية الطبية للدكتور مهاب الغروي متواجدة لتلقي استفسارتكم وحجوزاتكم الطبية العاجلة. يمكنك إرسال سؤالك وسنجيبك فوراً.</span>
                </div>
                
                <div className="space-y-1.5 mt-2">
                  <label className="block text-[10px] font-bold text-slate-500">رسالتك المسبقة للإرسال ل د. مهاب:</label>
                  <textarea
                    rows={3}
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Chat action footer buttons */}
              <div className="p-3 bg-white border-t border-slate-100 flex justify-end">
                <button
                  onClick={handleWhatsAppSend}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all active:scale-97 cursor-pointer"
                >
                  <span>أرسل بالواتساب</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Big pulsing WhatsApp Trigger Button */}
        <motion.button
          onClick={() => setShowChat(!showChat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative pulse-glow border border-white/20"
          aria-label="تواصل معنا عبر واتساب"
        >
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
          <span className="absolute -top-1 -left-1 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </motion.button>

      </div>
    </>
  );
}
