import React from 'react';
import '../styles/Footer.css';

import { useState } from 'react';

function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleFooter = () => {
    setExpanded(!expanded);
  };

  return (
    <footer className={`footer ${expanded ? 'expanded' : 'collapsed'}`} onClick={toggleFooter}>
      <div className="footer-content">
        <div className="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CDdKNFKx"
            width="100%"
            height="150"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p>© Типография FlyPrint Online, 2014-2022</p>
      </div>
    </footer>
  );
}

export default Footer;

