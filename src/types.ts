/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  treatmentDetails: string[];
  durationMinutes: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientAge: string;
  serviceId: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
  queueNo: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  procedure: string;
  feedback: string;
  rating: number;
  recoveryDays: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'laser' | 'gastro' | 'booking';
}

export interface Symptom {
  id: string;
  label: string;
  description: string;
}
