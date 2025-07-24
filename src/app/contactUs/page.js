'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      }, 5000); // Hide toast after 5 seconds
      
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      // Show success toast
      showToast('Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
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
      <div className="py-20 bg-[#D5CEBC] text-black">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-8">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 ${
                  errors.firstName ? 'border-red-500' : 'border-[#e0e0e0]'
                } focus:border-[#17181D] focus:outline-none transition-colors`}
                placeholder="First Name *"
              />
              {errors.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 ${
                  errors.lastName ? 'border-red-500' : 'border-[#e0e0e0]'
                } focus:border-[#17181D] focus:outline-none transition-colors`}
                placeholder="Last Name *"
              />
              {errors.lastName && <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-[#e0e0e0]'
                } focus:border-[#17181D] focus:outline-none transition-colors`}
                placeholder="Email *"
              />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-0 py-3 text-lg bg-transparent border-0 border-b-2 ${
                  errors.message ? 'border-red-500' : 'border-[#e0e0e0]'
                } focus:border-[#17181D] focus:outline-none transition-colors resize-none`}
                placeholder="Message *"
              ></textarea>
              {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="rounded-[30px] bg-black text-white py-3 px-8 text-lg font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}