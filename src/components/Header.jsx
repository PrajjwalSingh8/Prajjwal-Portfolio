
import { useState } from 'react';

const sectionLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const pageLinks = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'store', label: 'Store' },
];

const EMAIL = 'prajjwalsinghsisodia@gmail.com';
const GITHUB = 'https://github.com/PrajjwalSingh8';
const LINKEDIN = 'https://www.linkedin.com/in/prajjwalsingh8/';
const LEETCODE = 'https://leetcode.com/u/PrajjwalSingh23/';

export default function Header({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    setMenuOpen(false);
    onNavigate(page);

    if (page === 'portfolio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        .ps-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(9, 10, 20, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(167, 139, 250, 0.16);
        }

        .ps-header-inner {
          max-width: 1240px;
          min-height: 82px;
          margin: auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
        }

        .ps-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #f5f3ff;
          background: none;
          border: 0;
          cursor: pointer;
          font-size: 21px;
          font-weight: 800;
          white-space: nowrap;
        }

        .ps-brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          color: #090a14;
          background: linear-gradient(135deg, #c4b5fd, #8b5cf6);
          font-size: 15px;
          font-weight: 900;
        }

        .ps-brand-dot {
          color: #a78bfa;
        }

        .ps-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 21px;
        }

        .ps-nav a,
        .ps-nav button {
          color: #aaa9c0;
          background: none;
          border: 0;
          text-decoration: none;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 10px 0;
        }

        .ps-nav a:hover,
        .ps-nav button:hover,
        .ps-nav .ps-active {
          color: #c4b5fd;
        }

        .ps-nav .ps-email {
          color: #c4b5fd;
        }

        .ps-nav .ps-github {
          color: #0b0b18;
          background: linear-gradient(135deg, #c4b5fd, #8b5cf6);
          padding: 12px 18px;
          border-radius: 11px;
          font-weight: 800;
        }

        .ps-nav .ps-github:hover {
          color: #ffffff;
          background: #8b5cf6;
        }

        .ps-menu-toggle {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 10px;
          background: #171729;
          color: #c4b5fd;
          font-size: 23px;
          cursor: pointer;
        }

        @media (max-width: 1050px) {
          .ps-header-inner {
            gap: 14px;
            padding: 0 20px;
          }

          .ps-nav {
            gap: 13px;
          }

          .ps-nav a,
          .ps-nav button {
            font-size: 12px;
          }
        }

        @media (max-width: 820px) {
          .ps-header-inner {
            min-height: 72px;
          }

          .ps-menu-toggle {
            display: grid;
            place-items: center;
          }

          .ps-nav {
            display: none;
            position: absolute;
            top: calc(100% + 1px);
            left: 0;
            right: 0;
            padding: 18px 24px 24px;
            background: #0c0d1a;
            border-bottom: 1px solid rgba(167, 139, 250, 0.2);
            flex-direction: column;
            align-items: stretch;
            gap: 5px;
            box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);
          }

          .ps-nav.ps-open {
            display: flex;
          }

          .ps-nav a,
          .ps-nav button {
            width: 100%;
            text-align: left;
            padding: 12px 8px;
            font-size: 14px;
          }

          .ps-nav .ps-github {
            text-align: center;
            margin-top: 6px;
          }
        }
      `}</style>

      <header className="ps-header">
        <div className="ps-header-inner">

          <button
            className="ps-brand"
            onClick={() => handleNavigate('portfolio')}
            aria-label="Go to home"
          >
            <span className="ps-brand-mark">PS</span>
            <span>
              prajjwal<span className="ps-brand-dot">.</span>
            </span>
          </button>

          <button
            className="ps-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '×' : '☰'}
          </button>

          <nav
            className={`ps-nav ${menuOpen ? 'ps-open' : ''}`}
            aria-label="Main navigation"
          >
            {activePage === 'portfolio' ? (
              <>
                {sectionLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}

                <button onClick={() => handleNavigate('blog')}>
                  Blog
                </button>

                <button onClick={() => handleNavigate('store')}>
                  Store
                </button>
              </>
            ) : (
              pageLinks.map((item) => (
                <button
                  key={item.id}
                  className={activePage === item.id ? 'ps-active' : ''}
                  onClick={() => handleNavigate(item.id)}
                >
                  {item.label}
                </button>
              ))
            )}

           <a
  className="ps-email"
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
>
  Email ↗
</a>

            <a
              className="ps-github"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </nav>

        </div>
      </header>
    </>
  );
}
