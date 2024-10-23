import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button>Contacts</button>
      </div>
      <div className="header-center">
        <h1>Logo</h1>
      </div>
      <div className="header-right">
        <button>English</button>
      </div>
    </header>
  );
}

export default Header;
