import { useEffect } from "react";

export default function Alumni() {
  useEffect(() => {
    document.title = "Alumni | BMS University Portal";
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "scroll-smooth";
  }, []);

  return (
    <>
      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Side Navigation (Scholar's Drawer Style) */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-2 p-6 bg-surface-container-low rounded-xl backdrop-blur-sm border-l-4 border-primary">
              <h4 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 px-2">Alumni Network</h4>
              <a className="block px-2 py-2 text-primary font-bold border-b-2 border-primary w-fit text-sm" href="#chapters">Global Chapters</a>
              <a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#mentorship">Mentorship Program</a>
              <a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#support">Support & Endowment</a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            {/* Hero Section */}
            <div className="scroll-mt-32" id="hero">
              <h1 className="font-headline text-5xl md:text-7xl text-primary mb-4 tracking-tight">
                The Alumni <br/><span className="italic font-serif text-on-surface-variant">Network</span>
              </h1>
              <p className="text-on-surface-variant max-w-2xl text-lg">
                A lifelong connection to excellence. Access exclusive resources, reconnect with classmates, and mentor the next generation of BMS leaders.
              </p>
            </div>

            {/* Global Alumni Chapters - Bento Grid */}
            <div className="scroll-mt-32" id="chapters">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">01.</span>
                <h2 className="text-3xl font-headline text-primary">Global Chapters</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-surface-container-low shadow-xl">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80" 
                    alt="North America Hub" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-10 z-10">
                    <h3 className="font-headline text-3xl text-white mb-2">North America Hub</h3>
                    <p className="text-white/80 font-body mb-6 max-w-sm">Focusing on Tech Innovation and Finance in San Francisco & NYC.</p>
                    <span className="inline-flex items-center gap-2 text-white font-bold bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm border border-white/20">
                      <span>24,500 Members</span>
                      <span className="material-symbols-outlined text-sm">public</span>
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between shadow-sm border border-outline-variant/20 group hover:border-primary/50 transition-colors">
                  <div>
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">location_city</span>
                    <h3 className="font-headline text-xl mb-2 text-on-surface">London Circle</h3>
                    <p className="text-on-surface-variant text-sm">A bridge between European heritage and global commerce.</p>
                  </div>
                  <button className="text-primary font-bold text-left flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    <span>Explore Chapter</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>

                <div className="bg-primary p-8 rounded-2xl flex flex-col justify-between shadow-lg text-white">
                  <div>
                    <span className="material-symbols-outlined text-white/90 text-4xl mb-4">temple_hindu</span>
                    <h3 className="font-headline text-xl mb-2">Delhi-NCR Base</h3>
                    <p className="text-white/80 text-sm">Our primary engine for policy and engineering growth.</p>
                  </div>
                  <button className="text-white font-bold text-left flex items-center gap-2">
                    <span>Explore Chapter</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mentorship Program */}
            <div className="scroll-mt-32" id="mentorship">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">02.</span>
                <h2 className="text-3xl font-headline text-primary">The Mentor's Archive</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                  <img 
                    className="rounded-2xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Mentorship" 
                  />
                  <div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-xl shadow-2xl z-20 border border-outline-variant/20">
                    <p className="font-headline text-3xl text-primary mb-1">98%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Success Rate</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
                    Bridge the gap between academic theory and industry reality. Our Mentorship Program pairs seasoned graduates with final-year students and early-career alumni for a structured 6-month journey.
                  </p>
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-5">
                      <div className="bg-surface-container-low p-3 rounded-xl">
                        <span className="material-symbols-outlined text-primary">diversity_3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">Strategic Matching</h4>
                        <p className="text-sm text-on-surface-variant">AI-driven pairing based on career aspirations and shared values.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="bg-surface-container-low p-3 rounded-xl">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">Shadowing Opportunities</h4>
                        <p className="text-sm text-on-surface-variant">Direct insight into high-level decision-making processes.</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                    Become a Mentor
                  </button>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="scroll-mt-32" id="support">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">03.</span>
                <h2 className="text-3xl font-headline text-primary">Paving the Path for Future Scholars</h2>
              </div>
              
              <div className="bg-surface-container-low rounded-2xl p-12">
                <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">The Endowment</span>
                    <p className="text-on-surface-variant text-lg mb-10">
                      Your contributions do more than just fund degrees; they ignite potential. Help us reach our goal of supporting 1,000 students by 2026.
                    </p>
                    
                    <div className="mb-8">
                      <div className="flex justify-between text-sm mb-3 font-bold uppercase tracking-wider">
                        <span className="text-on-surface-variant">Campaign Progress</span>
                        <span className="text-primary">74% of $5M</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[74%] rounded-full"></div>
                      </div>
                    </div>
                    <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
                      Support a Student
                    </button>
                  </div>
                  
                  <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <img 
                      className="rounded-2xl w-full h-48 object-cover shadow-2xl" 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400" 
                      alt="Students" 
                    />
                    <img 
                      className="rounded-2xl w-full h-48 object-cover shadow-2xl mt-12" 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400" 
                      alt="Success" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}