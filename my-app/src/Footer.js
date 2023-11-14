import React, { useState } from 'react';

const Footer = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };
    return (
      <div>
        <h3>Made by MindX 🔥</h3>
        <div>
          <span>Available on:</span>
          <span className="languague-picker">🇻🇳</span>
          <span className="languague-picker selected">🇺🇸</span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  