import React from 'react';

const services = [
  {
    title: 'Custom Web Application Development',
    description: 'Crafting innovative, scalable web applications that transform ideas into powerful digital solutions.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        <path d="M17 12l5-3-5-3v6z"/>
      </svg>
    ),
  },
  {
    title: 'Responsive Front-End Development',
    description: 'Building mobile-first, pixel-perfect interfaces that adapt seamlessly across all devices and browsers.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M6 4v16"/>
        <path d="M18 4v16"/>
      </svg>
    ),
  },
  {
    title: 'Modern UI/UX Interface Design',
    description: 'Designing intuitive, user-centered interfaces that deliver seamless digital experiences across platforms.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/>
        <path d="M8 8h8v8H8z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: 'API Development and Integration',
    description: 'Creating secure and scalable ASP.NET Core applications that enable seamless data exchange and system communication.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 12h16"/>
        <path d="M12 4v16"/>
        <path d="M8 8l8 8"/>
        <path d="M16 8l-8 8"/>
      </svg>
    ),
  },
  {
    title: 'Database Design and Optimization',
    description: 'Designing structured, high-performance databases that ensure data integrity, scalability, and speed.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/>
        <path d="M8 8h8v8H8z"/>
        <path d="M12 4v16"/>
      </svg>
    ),
  },
  {
    title: 'Authentication & Authorization',
    description: 'Implementing secure login systems and access control to safeguard user data and restrict unauthorized access.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Developing secure, feature-rich e-commerce platforms tailored to grow your online business.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing application speed and responsiveness through smart asset handling, lazy loading, and code splitting.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    title: 'Maintenance and Support',
    description: 'Providing ongoing maintenance, updates, and technical support to ensure system reliability and performance.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700">
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 