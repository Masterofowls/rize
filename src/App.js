import React from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SideBar from './components/SideBar.jsx';
import Main from './components/Main.jsx';
import { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <SideBar onSelectSection={handleSectionChange} />
        <Main currentSection={currentSection} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
