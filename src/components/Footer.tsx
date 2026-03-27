import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 px-8 tonal-shift from surface to surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-screen-2xl mx-auto md:justify-items-center">
        <div className="space-y-6 md:pl-6">
          <img src="/bms1.webp" alt="BMS University" className="h-12 w-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Nurturing minds and shaping futures since 1954. Committed to global
            academic leadership and ethical research.
          </p>
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors"
              data-icon="public"
            >
              public
            </span>
            <span
              className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors"
              data-icon="mail"
            >
              mail
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-headline text-lg text-blue-950 dark:text-blue-50 mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-body">
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/campuses"
              >
                Campus
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/placements"
              >
                Placements
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/research"
              >
                Research
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-blue-950 dark:text-blue-50 mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-sm font-body">
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                to="/terms"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © 2026 BMS University. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a className="text-slate-500 dark:text-slate-400 text-xs hover:underline" href="#">
            Accreditation
          </a>
          <a className="text-slate-500 dark:text-slate-400 text-xs hover:underline" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
