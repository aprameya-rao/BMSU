import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Placements", to: "/placements" },
  { label: "Campuses", to: "/campuses" },
  { label: "Research", to: "/research" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock background scroll when the mobile overlay is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="bg-surface/70 dark:bg-slate-950/70 backdrop-blur-xl docked full-width top-0 sticky z-[100] no-border tonal-shift-bg-surface-container-low transition-colors duration-300 font-sans">
        <nav className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/bms1.png"
              alt="B.M. Sreenivasiah UNIVERSITY"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-900 dark:text-blue-300 border-b-2 border-blue-900 dark:border-blue-300 pb-1 text-sm font-semibold tracking-wide"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors text-sm font-semibold tracking-wide"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-on-surface-variant hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" data-icon="search">
                search
              </span>
            </button>
            
            {/* Animated Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex flex-col justify-center items-center w-10 h-10 md:hidden focus:outline-none group"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span 
                className={`block w-6 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"
                }`}
              />
              <span 
                className={`block w-6 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span 
                className={`block w-6 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"
                }`}
              />
            </button>
            
            {/* Desktop Apply Now Button */}
            <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 active:scale-95 duration-150 ease-in-out">
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Glassy Mobile Overlay - Now Scrollable */}
      <div 
        className={`fixed inset-0 z-[90] bg-surface/95 dark:bg-slate-950/95 backdrop-blur-2xl overflow-y-auto overscroll-contain transition-all duration-500 ease-in-out font-sans ${
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Inner wrapper ensures vertical centering if content is short, but allows normal scrolling if content exceeds screen height */}
        <div className="min-h-full w-full flex flex-col justify-center items-center py-24 px-8">
          <nav className="flex flex-col items-center gap-8 w-full max-w-sm mx-auto">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50 + 150}ms` : '0ms' 
                }}
                className={({ isActive }) =>
                  `text-2xl sm:text-3xl font-bold tracking-wide transition-all duration-500 transform ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${
                    isActive
                      ? "text-blue-900 dark:text-blue-300"
                      : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Mobile Apply Now Button */}
            <div 
              className={`w-full mt-8 pt-8 border-t border-slate-300/30 dark:border-slate-700/30 flex flex-col gap-4 transition-all duration-500 transform ${
                isMenuOpen ? "translate-y-0 opacity-100 delay-[450ms]" : "translate-y-8 opacity-0"
              }`}
            >
              <button className="w-full bg-primary text-on-primary px-6 py-3.5 rounded-lg text-lg font-bold hover:opacity-90 active:scale-95 duration-150 ease-in-out shadow-lg">
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}