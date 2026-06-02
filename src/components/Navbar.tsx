/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, Mail, MapPin, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', name: 'الرئيسية' },
    { id: 'about', name: 'عن العيادة' },
    { id: 'services', name: 'خدماتنا' },
    { id: 'laser-edu', name: 'العلاج بالليزر' },
    { id: 'symptoms', name: 'مساعد الأعراض' },
    { id: 'booking', name: 'حجز موعد' },
    { id: 'faqs', name: 'الأسئلة الشائعة' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Banner (Contact info, working hours, address) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>أبو كبير، الشرقية - عمارة الأطباء</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>نتائج جراحية آمنة بأحدث تقنيات الليزر</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:01019200900" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono font-medium">01019200900</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">تواصل مباشر طوال اليوم</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleNavClick('hero')}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-600/10 flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-5.5 h-5.5 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900 tracking-tight leading-snug group-hover:text-teal-600 transition-colors duration-200">
                  د. مهاب محمد الغروي
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-none">
                  استشاري الجراحة العامة والشرج بالليزر
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-teal-600 bg-teal-50/60 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:01019200900"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span className="font-mono">01019200900</span>
              </a>
              <button
                onClick={() => handleNavClick('booking')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                حجز موعد عاجل
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors duration-200"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5 shadow-inner">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-teal-50 text-teal-700 font-semibold border-r-4 border-teal-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <a
                    href="tel:01019200900"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اتصال بالهاتف</span>
                  </a>
                  <button
                    onClick={() => handleNavClick('booking')}
                    className="bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                  >
                    حجز موعد
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
