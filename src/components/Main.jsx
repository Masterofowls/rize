import React from 'react';
import ProductList from './ProductList';
import '../styles/Main.css';
import About from './About';
import Clients from './Clients';
import Catalog from './Catalog';

function Main({ currentSection }) {
  let content;
  switch (currentSection) {
    case 'Catalog':
      content = <Catalog />;
      break;
    case 'Clients':
      content = <Clients />;
      break;
    case 'About':
    default:
      content = <About />;
      break;
  }

  return (
    <main className="main-content">
      {content}
    </main>
  );
}

export default Main;