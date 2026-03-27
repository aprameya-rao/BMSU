export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 px-8 tonal-shift from surface to surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <img src="/bms1.png" alt="B.M. Sreenivasiah UNIVERSITY" className="h-12 w-auto" />
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
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="/Campus"
              >
                Campus
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="Placements"
              >
                Placements
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="/Research"
              >
                Research
              </a>
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
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-blue-950 dark:text-blue-50 mb-6">
            Update yourself
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Stay updated with B.M. Sreenivasiah UNIVERSITY news and research.
          </p>
          <div className="flex flex-col gap-3">
            <input
              className="bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-container"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © 2026 B.M. Sreenivasiah UNIVERSITY. All rights reserved.
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




