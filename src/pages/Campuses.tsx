import { useEffect } from "react";
export default function Campuses() {
  useEffect(() => {
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "";
  }, []);

  return (
    <>
      {/*  TopNavBar  */}

      {/*  Hero Section  */}
      {/*  Main Content Section: Grid Layout  */}
      <section className="campuses-page px-8 pt-32 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {/*  Item 1  */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-outline/50">
              <img
                alt="BMS College of Engineering"
                className="w-full h-full object-cover"
                data-alt="Modern red brick university building with classical clock tower at sunset, prestigious academic atmosphere with clean landscaping"
                src="https://studiojaed.com/imager/projectimages/730/UD-DuPontHall-1_b152a6d9118b56897a27914d1f64f070.jpg"
              />
            </div>
            <h3 className="font-headline text-2xl text-primary mb-3">BMS College of Engineering</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">
              The first private sector initiative in engineering education in India, fostering innovation and technical excellence since 1946.
            </p>
            <button className="font-label text-xs uppercase tracking-widest font-bold text-primary transition-colors flex items-center gap-2">
              View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          {/*  Item 2  */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-outline/50">
              <img
                alt="BMS College of Law"
                className="w-full h-full object-cover"
                data-alt="Stately neoclassical law school building with large stone columns and manicured lawns under a clear blue sky"
                src="https://st.depositphotos.com/2152853/4022/i/450/depositphotos_40228699-stock-photo-06-04-2011-usa-harvard.jpg"
              />
            </div>
            <h3 className="font-headline text-2xl text-primary mb-3">BMS College of Law</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">
              Providing premier legal education through a blend of traditional values and modern legal practices for over 50 years.
            </p>
            <button className="font-label text-xs uppercase tracking-widest font-bold text-primary transition-colors flex items-center gap-2">
              View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          {/*  Item 3  */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-outline/50">
              <img
                alt="BMS College of Architecture"
                className="w-full h-full object-cover"
                data-alt="Minimalist design studio interior with high ceilings, drafting tables, and large windows overlooking a campus park"
                src="https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?semt=ais_incoming&w=740&q=80"
              />
            </div>
            <h3 className="font-headline text-2xl text-primary mb-3">BMS College of Architecture</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">
              Merging technical proficiency with artistic expression to shape the built environment of the future.
            </p>
            <button className="font-label text-xs uppercase tracking-widest font-bold text-primary transition-colors flex items-center gap-2">
              View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
      {/*  Footer  */}

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }`}</style>
    </>
  );
}
