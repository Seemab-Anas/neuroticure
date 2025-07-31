'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from '@/components/PageHeader';
import PageLoaderGSAP from '@/components/PageLoaderGSAP';

export default function ContactUs() {

  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [errors, setErrors] = useState({});

  // Initialize EmailJS (add your public key here)
  useEffect(() => {
    emailjs.init('kerMNCY8dGoazdju9'); // Replace with your actual public key
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Your name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Toast notification handler
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.yourName,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'neuroticure@nu.com',
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_yxhca3d',     // Replace with your actual service ID
        'template_t33zv7f',    // Replace with your actual template ID
        templateParams
      );
      
      // Show success toast
      showToast('Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      
      // Reset form
      setFormData({
        yourName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agreeToTerms: false
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toast component
  const Toast = ({ message, type }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    
    return (
      <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center transition-all transform`}>
        <span className="mr-2">
          {type === 'success' ? '✓' : '✕'}
        </span>
        <p>{message}</p>
      </div>
    );
  };

  return (
    <>
      {/* Loader covers the page initially, then slides up */}
      {showLoader && (
        <PageLoaderGSAP 
          pageName="contact" 
          onComplete={handleLoaderComplete}
        />
      )}

    <div className="min-h-screen">
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      
      {/* Hero Section */}
      <PageHeader 
        backgroundImage="/contactUs/back.webp"
        badge="CONTACT US"
        title="Have Any Questions? Don't Hesitate to Reach Us"
        description="We're here to help and answer any question you might have. We look forward to hearing from you and will respond as soon as possible."
      />

      {/* Contact Form Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="w-full lg:flex-[1.3] bg-[#17181D] p-8 rounded-lg">
              <div className="space-y-6">
                {/* Your Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 text-white placeholder-gray-400 ${
                      errors.yourName ? 'border-red-500' : 'border-gray-600'
                    } focus:border-white focus:outline-none transition-colors`}
                    placeholder="Your Name *"
                  />
                  {errors.yourName && <p className="mt-2 text-sm text-red-500">{errors.yourName}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 text-white placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } focus:border-white focus:outline-none transition-colors`}
                    placeholder="Email *"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 text-white placeholder-gray-400 ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    } focus:border-white focus:outline-none transition-colors`}
                    placeholder="Phone *"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 text-white placeholder-gray-400 ${
                      errors.subject ? 'border-red-500' : 'border-gray-600'
                    } focus:border-white focus:outline-none transition-colors`}
                    placeholder="Subject *"
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 text-white placeholder-gray-400 ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    } focus:border-white focus:outline-none transition-colors resize-none`}
                    placeholder="Message *"
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="relative">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-white bg-transparent border-2 border-gray-600 rounded focus:ring-white focus:ring-2"
                    />
                    <span className="text-gray-300 text-sm">
                      I agree to the terms and conditions
                    </span>
                  </label>
                  {errors.agreeToTerms && <p className="mt-2 text-sm text-red-500">{errors.agreeToTerms}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="rounded-[30px] bg-white text-black py-3 px-8 text-lg font-medium hover:bg-gray-200 focus:ring-4 focus:ring-gray-400 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full lg:flex-1 lg:pl-8">
              <div className="space-y-6">
                <p className="text-[#17181D] text-sm uppercase tracking-wider">
                  WE ARE HERE TO HELP YOU
                </p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#17181D] leading-tight">
                  DISCUSS YOUR THERAPY SOLUTION HERE
                </h2>
                <p className="text-[#17181D] text-base leading-relaxed mb-8">
                  Are you looking for top quality ai therapist solution tailored to your need? Reach out us now
                </p>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#17181C] p-3 rounded-lg">
                      <img src="/contactUs/mail.png" alt="Email" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-[#17181D] font-medium">Email</p>
                      <p className="text-[#17181dc1]">neuroticure@nu.com</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#17181C] p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#17181D] font-medium">Phone</p>
                      <p className="text-[#17181dc1]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}