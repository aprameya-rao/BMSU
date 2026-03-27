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
  const location = useLocation();
  const disableActive = location.pathname === "/" || location.pathname === "/home";

  return (
    <header className="bg-surface/70 dark:bg-slate-950/70 backdrop-blur-xl docked full-width top-0 sticky z-50 no-border tonal-shift-bg-surface-container-low">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <NavLink to="/home" className="flex items-center">
          <img
            src="/bms1.png"
            alt="BMS University"
            className="h-12 w-auto"
          />
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                !disableActive && isActive
                  ? "text-blue-900 dark:text-blue-300 border-b-2 border-blue-900 dark:border-blue-300 pb-1 text-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors text-sm"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
