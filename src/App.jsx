
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Store from './pages/Store.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('portfolio');

  function navigate(page) {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="app-shell">
      {/* Header visible on every page */}
      <Header
        activePage={activePage}
        onNavigate={navigate}
      />

      {/* Main page content */}
      {activePage === 'portfolio' ? (
        <Portfolio onNavigate={navigate} />
      ) : activePage === 'blog' ? (
        <Blog />
      ) : (
        <Store />
      )}

      {/* Footer visible on every page */}
      <Footer />
    </div>
  );
}
