import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile, sectionIds } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollState } from '../hooks/useScrollState';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { scrolled, progress } = useScrollState();
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    const menu = menuRef.current;
    const previouslyFocused = document.activeElement;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusable = () =>
      menu
        ? Array.from(menu.querySelectorAll(focusableSelector)).filter(
            (element) =>
              element instanceof HTMLElement &&
              element.offsetParent !== null,
          )
        : [];

    const firstFocusable = getFocusable()[0];
    firstFocusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className="site-header__bar">
        <div className="container site-header__inner">
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label="RD. Ragunath D. — back to top"
          >
            <span className="brand__mark" aria-hidden="true">
              RD<span>.</span>
            </span>
            <span className="brand__text">Ragunath D.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`desktop-nav__link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a
              className="btn btn--secondary btn--small header-resume"
              href={profile.resume}
              download="Ragunath-D-Resume.pdf"
            >
              <Download size={15} strokeWidth={1.8} aria-hidden="true" />
              Resume
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? (
                <X size={21} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu size={21} strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuRef}
        >
          <div className="mobile-menu__top container">
            <span className="mono mobile-menu__label">Navigation / 2026</span>
            <button
              type="button"
              className="menu-toggle menu-toggle--close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X size={21} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-nav container" aria-label="Mobile navigation">
            <ul>
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`mobile-nav__link ${isActive ? 'is-active' : ''}`}
                      onClick={closeMenu}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className="mobile-nav__index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{link.label}</span>
                      <span className="mobile-nav__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-menu__foot container">
            <a
              className="btn btn--primary"
              href={profile.resume}
              download="Ragunath-D-Resume.pdf"
              onClick={closeMenu}
            >
              <Download size={16} strokeWidth={1.8} aria-hidden="true" />
              Download Resume
            </a>
            <div className="mobile-menu__meta">
              <SocialLinks variant="icons" />
              <div className="mobile-menu__theme">
                <span className="mono">Theme</span>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              </div>
            </div>
            <p className="mobile-menu__note">
              {profile.location} · {profile.availability}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
