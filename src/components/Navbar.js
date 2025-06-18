import React from 'react';
import { useLanguage } from './LanguageContext';

const Navbar = ({ setPage }) => {
  const { language, toggleLanguage } = useLanguage();

  const navLabels = {
    home: language === 'ar' ? 'الرئيسية' : 'Home',
    landmarks: language === 'ar' ? 'المعالم' : 'Landmarks',
    contact: language === 'ar' ? 'اتصل بنا' : 'Contact Us',
    toggleLang: language === 'ar' ? 'English' : 'العربية',
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setPage('home')}>{navLabels.home}</li>
        <li onClick={() => setPage('landmarks')}>{navLabels.landmarks}</li>
        <li onClick={() => setPage('contact')}>{navLabels.contact}</li>
        <li onClick={toggleLanguage}>{navLabels.toggleLang}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
