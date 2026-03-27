import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import campusesData from "../data/campuses.json";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920";

export default function CampusTemplate() {
  const { campusId } = useParams<{ campusId: string }>();
  const campus = campusesData.find((c) => c.id === campusId);
  
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.className = "bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed";
  }, []);

  if (!campus) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-headline text-primary mb-4">Campus Not Found</h1>
        <Link to="/campuses" className="text-blue-600 hover:underline">Return to Campuses</Link>
      </div>
    );
  }

  const filteredDepartments = campus.departments?.filter((dept) => 
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (dept.hod && dept.hod.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full overflow-hidden flex items-end bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={campus.heroImage || FALLBACK_IMAGE}
            alt={campus.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        </div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20">
          <Link 
            to="/campuses"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full backdrop-blur-md transition-all text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/20 shadow-lg"
          >
            <span className="material-symbols-outlined text-[16px] md:text-[18px]">arrow_back</span>
            Campuses
          </Link>
        </div>

        <div className="relative z-10 px-6 sm:px-8 md:px-12 pb-16 md:pb-24 max-w-5xl">
          {campus.established && (
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-200/80 mb-3 md:mb-4 block">
              Est. {campus.established}
            </span>
          )}
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-tight mb-4 md:mb-6 serif tracking-tighter">
            {campus.name}
          </h1>
          
          {campus.description && (
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed font-light">
              {campus.description}
            </p>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {campus.stats && campus.stats.length > 0 && (
        <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 bg-surface">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-outline-variant/20 pb-12 md:pb-16">
            {campus.stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary serif">{stat.value}</h3>
                <p className="text-xs md:text-sm text-secondary font-medium tracking-wide mt-1 md:mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Departments & HOD Search Section */}
      {campus.departments && campus.departments.length > 0 && (
        <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 bg-surface-container-low" id="departments">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
              <div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-extrabold text-on-secondary-container">
                  Academic Leadership
                </span>
                <h2 className="text-3xl md:text-4xl text-primary font-bold mt-2 serif">Departments & HODs</h2>
              </div>
              
              <div className="relative w-full lg:w-96">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  search
                </span>
                <input 
                  type="text" 
                  placeholder="Search departments or HODs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none text-on-surface placeholder:text-outline shadow-sm transition-all text-sm md:text-base"
                />
              </div>
            </div>

            {filteredDepartments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDepartments.map((dept, index) => (
                  <div key={index} className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-primary serif text-lg md:text-xl mb-1">{dept.name}</h4>
                    
                    {dept.hod && dept.hod !== "NA" && (
                      <div className="inline-flex items-center gap-2 bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-4 mt-2">
                        <span className="material-symbols-outlined text-[12px] md:text-[14px]">person</span>
                        HOD: {dept.hod}
                      </div>
                    )}
                    
                    <p className="text-sm text-secondary leading-relaxed mt-2">{dept.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-surface-container-lowest rounded-xl border border-outline-variant/30">
                <p className="text-sm md:text-base text-secondary font-medium px-4">No departments or HODs found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="mt-4 text-primary font-bold text-sm hover:underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Undergraduate Programs Section */}
      {campus.ugPrograms && campus.ugPrograms.length > 0 && (
        <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 bg-surface" id="programs">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8 md:mb-12 serif">Undergraduate Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campus.ugPrograms.map((program, index) => (
                <div key={index} className="bg-surface-container-low p-6 md:p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform border border-outline-variant/20">
                  <h4 className="font-bold text-primary serif text-lg md:text-xl mb-2">{program.title}</h4>
                  <p className="text-sm text-secondary">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}