import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Placements", to: "/placements" },
  { label: "Campuses", to: "/campuses" },
  { label: "Students", to: "/students" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Alumni", to: "/alumni" },
  { label: "Contact", to: "/contact" },
  { label: "Research", to: "/research" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const disableActive = location.pathname === "/" || location.pathname === "/home";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="bg-surface/70 dark:bg-slate-950/70 backdrop-blur-xl docked full-width top-0 sticky z-50 no-border border-b border-outline-variant/20">
      <nav className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        
        {/* Logo - Kept at z-[60] to sit above the overlay */}
        <NavLink to="/home" className="flex items-center relative z-[60]">
          <img
            src="/bms1.png"
            alt="BMS University"
            className="h-10 md:h-12 w-auto"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                !disableActive && isActive
                  ? "text-blue-900 dark:text-blue-300 border-b-2 border-blue-900 dark:border-blue-300 pb-1 text-sm font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors text-sm"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button - Kept at z-[60] */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[60] p-2 text-slate-900 dark:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl transition-transform duration-300">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Overlay Menu */}
        <div className={`
          fixed inset-0 w-full h-[100dvh] bg-white dark:bg-slate-950 z-[55] 
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden
          overflow-y-auto overscroll-contain
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-8 invisible pointer-events-none'}
        `}>
          
          {/* THE FIX: A solid masking bar that stays at the top of the overlay so scrolling text hides behind it instead of hitting the logo */}
          <div className="fixed top-0 inset-x-0 h-[72px] bg-white dark:bg-slate-950 z-[58]"></div>

          {/* Inner container for scrollable content */}
          <div className="flex flex-col min-h-full pt-28 px-8 pb-16 relative z-[56]">
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
                  className={({ isActive }) => `
                    text-3xl font-headline tracking-tight transition-all duration-500 transform
                    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                    ${!disableActive && isActive 
                      ? "text-blue-900 dark:text-blue-400 font-bold" 
                      : "text-slate-600 dark:text-slate-400 hover:text-blue-900"}
                  `}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            <div className={`
              mt-auto pt-16 transition-all duration-700 delay-300
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="w-12 h-1 bg-blue-900 mb-6 rounded-full"></div>
              <p className="text-xs text-slate-500 tracking-widest uppercase font-bold">
                BMS Educational Trust
              </p>
              <p className="text-sm text-slate-400 mt-2">
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}