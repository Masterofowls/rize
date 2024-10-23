import React from 'react';
import '../styles/SideBar.css';

import { FaHome, FaBook, FaUsers } from 'react-icons/fa';

function SideBar({ onSelectSection }) {
  const sections = [
    { name: 'Section 1', label: 'Главная', section: 'About', icon: <FaHome /> },
    { name: 'Section 2', label: 'Каталог', section: 'Catalog', icon: <FaBook /> },
    { name: 'Section 3', label: 'Клиенты и Партнёры', section: 'Clients', icon: <FaUsers /> },
  ];

  return (
    <aside className="sidebar">
      {sections.map(({ name, label, section, icon }) => (
        <button key={name} className="sidebar-button" onClick={() => onSelectSection(section)}>
          <span className="sidebar-icon">{icon}</span>
          {label}
        </button>
      ))}
    </aside>
  );
}

export default SideBar;
