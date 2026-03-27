import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "BMS University | BMS University";
    document.body.className = "bg-background text-on-surface font-body antialiased";
    document.documentElement.className = "scroll-smooth";
  }, []);

  return (
    <>
      {/* Top Navigation Shell  */}
      <main>
        {/* Hero Section  */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Cinematic Image Overlay  */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-[0.35]"
              src="https://www.udel.edu/referenced-components/home-page-references/admissions-panels/explore/_jcr_content/par_udel_panel/columngenerator_87741378/par/panelforpages_copy_c/par_1/columngenerator_1391138112/par_0/calloutfullimage_cop.coreimg.jpeg/1758821845796/fall-campus.jpeg"
              alt="BMS University Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/10"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
            <span className="text-on-primary-container font-label uppercase tracking-[0.3em] text-sm mb-6 block">
              The Sovereign University
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tighter leading-tight">
              A Legacy of <br />
              <i className="font-normal italic">Intellectual Grandeur</i>
            </h1>
            <p className="text-blue-100/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Cultivating the architects of the future through a blend of tradition and pioneering research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
            <span className="material-symbols-outlined text-4xl" data-icon="keyboard_double_arrow_down">
              keyboard_double_arrow_down
            </span>
          </div>
        </section>

        {/* Academic Pillars Section  */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20">
              <span className="text-primary font-label uppercase tracking-widest text-xs mb-4 block">
                Foundations of Knowledge
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary">Academic Pillars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Engineering  */}
              <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="mb-8 w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="precision_manufacturing">
                    precision_manufacturing
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">BMSCE (Engineering)</h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Pioneering sustainable technology and robotic innovation through applied physics and structural excellence.
                </p>
                <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                  Explore Faculty{" "}
                  <span className="material-symbols-outlined" data-icon="arrow_right_alt">
                    arrow_right_alt
                  </span>
                </a>
              </div>
              {/* Law  */}
              <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="mb-8 w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="gavel">
                    gavel
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">BMSCL (Law)</h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Nurturing legal minds to navigate global justice systems with ethics, precision, and historical context.
                </p>
                <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                  Explore Faculty{" "}
                  <span className="material-symbols-outlined" data-icon="arrow_right_alt">
                    arrow_right_alt
                  </span>
                </a>
              </div>
              {/* Architecture  */}
              <div className="group bg-surface-container-lowest p-10 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="mb-8 w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl" data-icon="architecture">
                    architecture
                  </span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">BMSSA (Architecture)</h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Designing tomorrow’s landscapes through a rigorous blend of classical aesthetics and modern urbanism.
                </p>
                <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                  Explore Faculty{" "}
                  <span className="material-symbols-outlined" data-icon="arrow_right_alt">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Curator Section  */}
        <section className="bg-primary overflow-hidden">
          <div className="editorial-grid min-h-[700px]">
            <div className="col-span-12 lg:col-span-6 p-12 md:p-24 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-on-primary-container font-label uppercase tracking-widest text-xs mb-6 block">
                Philosophy
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-white mb-8 leading-tight">
                The Digital <br />
                <i className="font-normal italic">Curator</i>
              </h2>
              <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                At BMS University, education is not a conveyor belt; it is a curated experience. We embrace the philosophy of
                'Clarity and Craft'—stripping away academic noise to reveal the core of intellectual discovery.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <span className="block text-3xl font-headline text-white">1892</span>
                  <span className="text-xs text-blue-100/40 uppercase tracking-widest">Est. Tradition</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <span className="block text-3xl font-headline text-white">2024</span>
                  <span className="text-xs text-blue-100/40 uppercase tracking-widest">Global Ranking</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                data-alt="Interior of a modern, high-end architectural studio with floor-to-ceiling glass windows, clean white surfaces, and sophisticated lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpMo-IM90kx0d9fw7nW9VdSSFJ76TMLfXOdEKeMDOZIvl-Ags5WrhIIdy2r9Y_raBW0SLxYeJznKRltYnDNn56WhZkC60UNajeajg2kfsgnbGs28sKkhVw67cVeYvjAQ2Wh93oHXZzUxaqiV8hbXDqgv8gqrCckAhBjCj99GMvw_KM-eb1bCXJGOIRPAwJ-PLP4ddvwoEK34FinovEtvpszlzf2Nv95mGojLLP9apOdL4-UKGscmoTmz6EZ4JaHyRtbrT-zSPJIm8"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Student Life Mosaic  */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <span className="text-primary font-label uppercase tracking-widest text-xs mb-4 block">
                  The Experience
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-primary">Student Life</h2>
              </div>
              <p className="text-secondary max-w-md">
                Life at BMS University extends beyond the lecture hall, into spaces designed for collision, creation, and
                community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Candid shot of diverse students collaborating in a bright, modern glass-walled library hall with warm ambient light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oqu-sKW-XHW6w_3P1wshY9dn744f8LbmtD554boi-SRtHjuFNksci-G8BMLA09IMqnmFSfNTm03IOcxnfH2SNksQhAhg0YNVxtGee8RLhXNMEtN-69Y1nNQvgsg4J8TxTCPfj7d_q7Jw4EC_Lv-fgnQl7iKMQ-yAjn_luVbRR8o0mCK-AhFWtI6ncgDXOq_RbHtf-twccyYwxa3du_EDMgcIpu-qvCdQ2A1FBbvRrq26QN4u99axo7Ot7sM1Qyf-e_q4kKXK3kE"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <h4 className="text-white font-headline text-2xl">The Excellence Quad</h4>
                </div>
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Students working with high-tech robotics and clean industrial design in a state-of-the-art innovation lab"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZV0eVQbIIktYgdZ1oui4EM7VHs-qAqOzYAZ5uat-eaODP0nkqObyIPSgO3Hli5pGotyF-2nSkCSoc_ka6ouKOPhzaGaBe1iDWgdoPX_Abz7xLCbuA2NtPK-SnHp7DSqu9wpFfJdf_MvSrcbexc3CC_MT4-Vp0O-10-by-aXo5BUVURy4qRIxNRLLtfyfuvwo2D3giwRngpsIh1VgN5wD3XHYZghR_TYfo1viQUyb5gxHr77d1XXmRln1-DAANiOlhTniBJAId60"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <h4 className="text-white font-headline text-2xl">Innovation Hubs</h4>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="A group of students in professional attire engaged in a formal debate within a wood-paneled historic lecture hall"
                  src="https://blog.ipleaders.in/wp-content/uploads/2018/06/mootcourt.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest uppercase">The Society</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Aerial view of students relaxed on a pristine green university lawn surrounded by grand neoclassical buildings"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt8Bt8uvq6Gn00wVAR9O_3MOlOKsXA9nQ4FHpsTc0IxB-So8c7U3sub_0xR3W1FuHgmgUhZ2vsypgo7bJCuyzgWHUPkCDgVReCB3hcjAfJvQZd0K0gj6gMpIJRfLdVsPVo_ACeJ14kPxX9YxhZKfK7oh8lhgg_RESLnKCgnYYJasNSyrjONy-ZiRQaakzW1zCN8nIsGmMsNVs5J0nf7exw8rd83JY6firctTSFwR4NFsukZZLJbhrE2XC7MbHKj1cw7fZqtUQs1nw"
                  alt=""
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest uppercase">Serenity</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Shell  */}

      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
        }
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
      `}</style>
    </>
  );
}