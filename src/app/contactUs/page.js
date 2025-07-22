'use client';

import { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      {/* Hero Section */}
      <div className="contact-three-hero-big-container relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: 'url(/contactUs/back.webp)', height: '650.151px'}}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="contact-three-hero-content relative z-10">
            {/* Header Content */}
            <div className="contact-heading-part text-center mb-12 relative p-8 rounded-3xl">
              {/* Decorative Images positioned at corners of this div */}
              <div className="absolute top-[-20px] left-[-20px] w-16 h-16 z-10">
                <img src="/contactUs/p1.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute top-[-30px] right-[-30px] w-24 h-24 z-10">
                <img src="/contactUs/p2.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-[-45px] left-[-45px] w-20 h-20 z-10">
                <img src="/contactUs/p3.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-[-15px] right-[-15px] w-18 h-18 z-10">
                <img src="/contactUs/p4.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              
              <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-lg tracking-tighter mb-4">
                CONTACT US
              </div>
              <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-2 text-[#17181D]">
                Have Any Questions? Don&#39;t Hesitate to Reach Us
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
                We&#39;re here to help and answer any question you might have. 
                We look forward to hearing from you and will respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                  errors.firstName ? 'border-red-500' : 'border-gradient'
                } focus:outline-none transition-colors`}
                placeholder="First Name *"
                style={{
                  borderImage: errors.firstName ? 'none' : 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%) 1'
                }}
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
                  errors.lastName ? 'border-red-500' : 'border-gradient'
                } focus:outline-none transition-colors`}
                placeholder="Last Name *"
                style={{
                  borderImage: errors.lastName ? 'none' : 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%) 1'
                }}
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
                  errors.email ? 'border-red-500' : 'border-gradient'
                } focus:outline-none transition-colors`}
                placeholder="Email *"
                style={{
                  borderImage: errors.email ? 'none' : 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%) 1'
                }}
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
                  errors.message ? 'border-red-500' : 'border-gradient'
                } focus:outline-none transition-colors resize-none`}
                placeholder="Message *"
                style={{
                  borderImage: errors.message ? 'none' : 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%) 1'
                }}
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