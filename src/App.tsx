/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import ServicesSection from './components/ServicesSection';
import LaserEducation from './components/LaserEducation';
import SymptomChecker from './components/SymptomChecker';
import BookingWizard from './components/BookingWizard';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Multi-section scroll intersection tracking
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'laser-edu', 'symptoms', 'booking', 'faqs'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px', // focused view margin trigger
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
          obs.observer.disconnect();
        }
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Arabic sticky header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main clinic content flow */}
      <main>
        {/* Welcome and key stats hero banner */}
        <Hero onNavigate={handleNavigate} />

        {/* Vision values and doctor profile facts */}
        <BioSection />

        {/* Services & Operations explorer folder */}
        <ServicesSection />

        {/* Laser surgical education comparison table */}
        <LaserEducation />

        {/* Interactive health checker assistant */}
        <SymptomChecker onNavigate={handleNavigate} />

        {/* LocalStorage durable appointments coordinator */}
        <BookingWizard />

        {/* Six reasons of clinic excellence */}
        <WhyChooseUs />

        {/* Interactive accordion frequently asked questions */}
        <FAQSection />
      </main>

      {/* Structured details footer and WhatsApp dialog module */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
