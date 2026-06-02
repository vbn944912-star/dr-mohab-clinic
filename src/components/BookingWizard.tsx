/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ShieldCheck, 
  Trash2, 
  CheckCircle2, 
  ClipboardList, 
  AlertCircle,
  FileText,
  BadgeAlert,
  MapPin,
  CalendarDays
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Appointment } from '../types';

export default function BookingWizard() {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [serviceId, setServiceId] = useState('laser');
  
  // Create logical dates: Tomorrow, and succeeding 5 days
  const getUpcomingDates = () => {
    const list = [];
    const weekdays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'السبت'];
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    let added = 0;
    let dayOffset = 1; // start tomorrow
    
    while (added < 5) {
      const date = new Date();
      date.setDate(date.getDate() + dayOffset);
      
      const dayOfWeek = date.getDay();
      // Friday is closed
      if (dayOfWeek !== 5) {
        const dayName = weekdays[dayOfWeek === 6 ? 5 : dayOfWeek];
        const dayNum = date.getDate();
        const monthName = months[date.getMonth()];
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        
        list.push({
          formattedDate,
          displayStr: `${dayName} ${dayNum} ${monthName}`,
        });
        added++;
      }
      dayOffset++;
    }
    return list;
  };

  const dates = getUpcomingDates();
  const [appointmentDate, setAppointmentDate] = useState(dates[0]?.formattedDate || '');
  const [appointmentTime, setAppointmentTime] = useState('06:00 م');
  const [notes, setNotes] = useState('');
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Appointment | null>(null);
  const [activeTab, setActiveTab] = useState<'book' | 'my-appointments'>('book');

  const timeSlots = [
    '05:00 م', '05:30 م', '06:00 م', '06:30 م', 
    '07:00 م', '07:30 م', '08:00 م', '08:30 م', '09:05 م'
  ];

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('dr_mohab_bookings');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load local bookings:', e);
      }
    }
  }, []);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !patientAge) return;

    // Generate random queue
    const queueNo = Math.floor(Math.random() * 12) + 3;
    const newAppointment: Appointment = {
      id: 'RG-' + Math.floor(100000 + Math.random() * 900000),
      patientName,
      patientPhone,
      patientAge,
      serviceId,
      appointmentDate,
      appointmentTime,
      notes,
      queueNo,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('dr_mohab_bookings', JSON.stringify(updated));
    setCurrentBooking(newAppointment);

    // Clear form
    setPatientName('');
    setPatientPhone('');
    setPatientAge('');
    setNotes('');
  };

  const handleCancel = (id: string) => {
    const updated = appointments.map(app => {
      if (app.id === id) {
        return { ...app, status: 'cancelled' as const };
      }
      return app;
    });
    setAppointments(updated);
    localStorage.setItem('dr_mohab_bookings', JSON.stringify(updated));
    if (currentBooking && currentBooking.id === id) {
      setCurrentBooking({ ...currentBooking, status: 'cancelled' });
    }
  };

  const getServiceDisplay = (id: string) => {
    switch (id) {
      case 'laser': return 'جراحات الشرج بالليزر المتقدمة';
      case 'general': return 'جراحة عامة ومناظير جهاز هضمي';
      case 'checkups': return 'استشارات وفحوصات كشفية مطولة';
      default: return 'كشف واستشارة طبية ومراجعة';
    }
  };

  const formatDateDisplay = (dateStr: string) => {
    const found = dates.find(d => d.formattedDate === dateStr);
    if (found) return found.displayStr;
    return dateStr;
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-white relative overflow-hidden text-right">
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 uppercase inline-flex items-center gap-1">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>نظام الحجز المطور لعيادة الشرقية</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-4 leading-tight">
            احجز موعد استشارتك <span className="text-teal-600">بسهولة وأمان</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            املأ بياناتك الطبية والشخصية أدناه، وسيقوم النظام بتسجيل حجزك فوراً في عيادة دكتور مهاب الغروي بمركز أبو كبير لتلقي أرقى كشف للشفاء.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 mb-8 max-w-sm mx-auto justify-center bg-slate-50 p-1.5 rounded-2xl">
          <button
            onClick={() => { setActiveTab('book'); setCurrentBooking(null); }}
            className={`flex-1 py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'book'
                ? 'bg-white text-teal-600 shadow-md ring-1 ring-slate-100'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            طلب حجز جديد
          </button>
          <button
            onClick={() => setActiveTab('my-appointments')}
            className={`flex-1 py-2 rounded-xl text-center text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'my-appointments'
                ? 'bg-white text-teal-600 shadow-md ring-1 ring-slate-100'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <span>مواعيدي المتصلة</span>
            {appointments.length > 0 && (
              <span className="bg-teal-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold font-mono">
                {appointments.length}
              </span>
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main content grid (Form or Success result in Left, Information card in Right for RTL) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTab === 'book' ? (
                currentBooking ? (
                  /* Success Reservation panel */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-50 rounded-3xl border border-teal-500/20 shadow-xl p-6 sm:p-10 relative overflow-hidden"
                  >
                    {/* Big Check icon */}
                    <div className="w-16 h-16 rounded-3xl bg-teal-100 flex items-center justify-center mx-auto mb-6 text-teal-600 shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div className="text-center max-w-md mx-auto mb-8">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                        تم تأكيد الحجز المبدئي بنجاح!
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                        شكراً لثقتكم. تم تسجيل مراجعتكم في سجلات عيادة دكتور مهاب الغروي. يرجى مراجعة تفاصيل ووصايا الفحص تالياً:
                      </p>
                    </div>

                    {/* Receipt Details Block */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4 mb-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-100 gap-2">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold font-mono">CODE: {currentBooking.id}</span>
                          <h4 className="font-extrabold text-slate-900 text-base mt-0.5">{currentBooking.patientName}</h4>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          currentBooking.status === 'confirmed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700'
                        }`}>
                          {currentBooking.status === 'confirmed' ? 'حجز مؤكد ومجدول' : 'تم إلغاء الحجز'}
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <div className="text-slate-500">الخدمة المطلوبة:</div>
                          <div className="font-bold text-slate-900">{getServiceDisplay(currentBooking.serviceId)}</div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-slate-500">تاريخ المراجعة المقترح:</div>
                          <div className="font-bold text-teal-700 flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4 text-teal-500" />
                            <span>{formatDateDisplay(currentBooking.appointmentDate)}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-slate-500">الوقت التقريبي للدخول:</div>
                          <div className="font-bold text-teal-700 flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-teal-500" />
                            <span>{currentBooking.appointmentTime}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-slate-500">رقم المسار الخاص بك (رقم الدخول):</div>
                          <div className="font-bold text-teal-800 text-base font-mono">
                            دور {currentBooking.queueNo} <span className="text-[10px] font-normal font-sans text-slate-400">(تقديري)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pre-examination Doctor Directives */}
                    <div className="bg-amber-100/30 border border-amber-200/50 rounded-2xl p-5 mb-8">
                      <h4 className="font-extrabold text-amber-950 text-xs sm:text-sm flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                        <span>وصايا تحضيرية هامة للكشف السريري والجراحي:</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-amber-900">
                        <li className="flex items-start gap-1.5">
                          <span className="text-amber-500 mt-1 shrink-0">•</span>
                          <span>يرجى الصيام عن الأكل والشراب لمدة 6 ساعات قبل موعد الكشف الجراحي (إن أمكن ذلك) ليسهل الفحص الدقيق والمنظاري الشرجي السريع.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-amber-500 mt-1 shrink-0">•</span>
                          <span>يرجى التفضل بإحضار جميع نتائج التحاليل، الأشعات، أو الملفات الطبية السابقة التي تتعلق بالجهاز الهضمي أو القولون لعرضها مباشرة على دكتور مهاب.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-amber-500 mt-1 shrink-0">•</span>
                          <span>الرجاء الوصول إلى مقر العيادة قبل موعد الحجز بـ 15 دقيقة فقط لتأكيد الدفع واستلام كارت السجل الطبي الموحد للعيادة.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => setCurrentBooking(null)}
                        className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm text-center cursor-pointer"
                      >
                        طلب حجز مريض آخر
                      </button>
                      <button
                        onClick={() => setActiveTab('my-appointments')}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm text-center cursor-pointer"
                      >
                        استعراض مواعيدي المحفوظة
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Standard dynamic Booking Form */
                  <motion.form
                    key="form"
                    onSubmit={handleBook}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-slate-50 rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 text-right space-y-6"
                  >
                    <h3 className="font-extrabold text-slate-900 text-base mb-2 border-b border-slate-200 pb-3">
                      استمارة معلومات المريض والحجز
                    </h3>

                    {/* Service Selection input */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">1. الخدمة أو العيادة المطلوبة:</label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {[
                          { id: 'laser', label: 'جراحة ليزر الشرج' },
                          { id: 'general', label: 'جراحة عامة ومناظير' },
                          { id: 'checkups', label: 'استشارات جهاز هضمي' },
                        ].map((serv) => (
                          <div
                            key={serv.id}
                            onClick={() => setServiceId(serv.id)}
                            className={`cursor-pointer border py-3 px-4 rounded-xl text-center text-xs font-bold transition-all transition-colors ${
                              serviceId === serv.id
                                ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/10'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                          >
                            {serv.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Patient detail inputs */}
                    <div className="grid sm:grid-cols-12 gap-5">
                      <div className="sm:col-span-6 space-y-2">
                        <label className="block text-xs font-bold text-slate-700">2. اسم المريض ثلاثي:</label>
                        <div className="relative">
                          <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="مثال: مهاب محمد الغروي"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="bg-white border border-slate-200 rounded-xl py-3 pr-10 pl-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3 space-y-2">
                        <label className="block text-xs font-bold text-slate-700">3. رقم الهاتف المحمول:</label>
                        <div className="relative font-mono">
                          <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="01019200900"
                            pattern="01[0-9]{9}"
                            maxLength={11}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value.replace(/\D/g, ''))}
                            className="bg-white border border-slate-200 rounded-xl py-3 pr-10 pl-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full text-right"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3 space-y-2">
                        <label className="block text-xs font-bold text-slate-700">4. السن (بالسنوات):</label>
                        <input
                          type="number"
                          required
                          min={1}
                          max={110}
                          placeholder="مثال: 38"
                          value={patientAge}
                          onChange={(e) => setPatientAge(e.target.value)}
                          className="bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full text-center font-mono"
                        />
                      </div>
                    </div>

                    {/* Date select block */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">5. اختر يوم المراجعة المفضل:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {dates.map((dateObj) => {
                          const isSelected = appointmentDate === dateObj.formattedDate;
                          return (
                            <div
                              key={dateObj.formattedDate}
                              onClick={() => setAppointmentDate(dateObj.formattedDate)}
                              className={`cursor-pointer border p-3 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all ${
                                isSelected
                                  ? 'bg-teal-600 text-white border-teal-600 shadow-md ring-1 ring-teal-500/20'
                                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <Calendar className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                              <span className="text-[11px] font-bold mt-0.5 leading-none">{dateObj.displayStr.split(' ')[0]}</span>
                              <span className="text-[9px] opacity-80 leading-none">{dateObj.displayStr.split(' ').slice(1).join(' ')}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">6. وقت الكشف التقريبي المفضل في المساء:</label>
                      <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
                        {timeSlots.map((slot) => {
                          const isSelected = appointmentTime === slot;
                          return (
                            <div
                              key={slot}
                              onClick={() => setAppointmentTime(slot)}
                              className={`cursor-pointer border py-2 rounded-lg text-center text-[11px] font-bold tracking-tight font-sans transition-all ${
                                isSelected
                                  ? 'bg-teal-100 text-teal-850 border-teal-500 ring-1 ring-teal-500/10'
                                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {slot}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 leading-none">
                        * تبدأ مواعيد الاستشارات السريرية من الساعة 5:00 مساءً حتى 9:00 مساءً عدا أيام الجمعة.
                      </p>
                    </div>

                    {/* Medical comments */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">7. أعراضك المرضية أو أية ملاحظات إضافية (اختياري):</label>
                      <textarea
                        rows={3}
                        placeholder="معلوماتك الطبية تساعد الطبيب على التحضير المناسب لملفك وحالتك..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-full"
                      />
                    </div>

                    {/* Send button */}
                    <button
                      type="submit"
                      className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 rounded-xl text-xs sm:text-sm tracking-wide text-center block w-full shadow-lg shadow-teal-600/15 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      إتمام تأكيد موعد الحجز الفوري
                    </button>
                  </motion.form>
                )
              ) : (
                /* Saved appointments tab */
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50 rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6"
                >
                  <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-200 pb-3 flex items-center justify-between">
                    <span>مراجعة حجوزاتك المسجلة بالمتصفح</span>
                    <span className="text-xs text-slate-400 font-medium">مخزن بملف تعريف المتصفح بأمان</span>
                  </h3>

                  {appointments.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 space-y-3">
                      <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
                      <p className="text-xs font-bold">لا توجد لديك أية حجوزات مسبقة مخزنة حالياً.</p>
                      <p className="text-[11px] text-slate-400">يمكنك استخدام النافذة أعلاه لطلب موعد حجز كشف طبي فوري.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map((app) => (
                        <div key={app.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                          <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-3 flex-wrap gap-2">
                            <div>
                              <span className="text-[10px] text-slate-400 font-bold font-mono">ID: {app.id}</span>
                              <h4 className="font-extrabold text-slate-900 text-sm mt-0.5">{app.patientName}</h4>
                            </div>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              app.status === 'confirmed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-100'
                            }`}>
                              {app.status === 'confirmed' ? 'حجز نشط ومؤكد' : 'تم إلغاء الحجز والمسار'}
                            </span>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 text-xs mb-4">
                            <div className="space-y-0.5">
                              <span className="text-slate-400 text-[11px]">الخدمة:</span>
                              <div className="font-bold text-slate-800">{getServiceDisplay(app.serviceId)}</div>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-slate-400 text-[11px]">اليوم والتاريخ:</span>
                              <div className="font-bold text-slate-800">{formatDateDisplay(app.appointmentDate)}</div>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-slate-400 text-[11px]">وقت المراجعة:</span>
                              <div className="font-bold text-slate-800">{app.appointmentTime}</div>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-slate-400 text-[11px]">الدور والمسار:</span>
                              <div className="font-mono font-bold text-teal-700">ترتيب دخول {app.queueNo}</div>
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                            <button
                              onClick={() => {
                                if (confirm('هل أنت متأكد من رغبتك في إلغاء هذا الحجز؟')) {
                                  handleCancel(app.id);
                                }
                              }}
                              disabled={app.status === 'cancelled'}
                              className="text-xs font-bold text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-xl transition-colors disabled:opacity-45 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                            >
                              <BadgeAlert className="w-3.5 h-3.5" />
                              <span>إلغاء الحجز بالعيادة</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column Reservation details / clinic hours (On RTL placed on left side) */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="font-extrabold text-teal-400 text-lg border-b border-slate-850 pb-3">
              تفاصيل ومواعيد العيادة
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-teal-450 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-200">مقر العيادة الرئيسي بالشرقية:</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    مركز أبو كبير، الشرقية، عمارة الأطباء المشهورة بجوار الصيدلية الكبرى.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <CalendarDays className="w-5 h-5 text-teal-450 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-200">مواعيد استقبال المرضى:</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    الكشف والاستشارات يومياً من الساعة <strong className="text-white">5:00 م</strong> حتى <strong className="text-white">9:00 م</strong>
                  </p>
                  <p className="text-[11px] text-teal-400/80 mt-1 font-bold">
                    * ملحوظة: العيادة مغلقة تماماً يوم الجمعة للراحة وصيانة الليزر.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <FileText className="w-5 h-5 text-teal-450 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-200">الراحة وقدر الأمان:</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    نهتم بأقصى درجات حماية وسرية المريض، ونهيئ غرف فحص معقمة بالكامل، ومعدات تفوق المعايير الأوروبية للكشف الكلي والاستشارة.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-850 bg-slate-950/40 rounded-2xl p-4.5">
              <h4 className="font-extrabold text-xs text-emerald-400 flex items-center gap-1.5 mb-1">
                <span>للاستفسار السريع أو الحجز التليفوني:</span>
              </h4>
              <a
                href="tel:01019200900"
                className="text-base sm:text-lg font-mono font-black text-white hover:text-emerald-350 transition-colors block mt-1"
              >
                010 1920 0900
              </a>
              <p className="text-[10px] text-slate-500 mt-1 leading-none">تواصل مع السكرتيرة الطبية لمراجعة التقارير الفورية</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
