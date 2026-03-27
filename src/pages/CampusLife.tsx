import { useEffect } from "react";

export default function Campus() {
  useEffect(() => {
    document.title = "Campus | BMS University Portal";
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
              <h4 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 px-2">Explore Campus</h4>
              <a className="block px-2 py-2 text-primary font-bold border-b-2 border-primary w-fit text-sm" href="#overview">Campus Overview</a>
              <a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#academic">Academic & Research Hubs</a>
              <a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#student-life">Student Life</a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            {/* Hero Image Section */}
            <div className="scroll-mt-32" id="overview">
              <div className="relative rounded-xl overflow-hidden h-[500px] group">
                <img 
                  className="w-full h-full object-cover" 
                  data-alt="Modern university campus architecture with glass buildings and green lawns under a clear blue morning sky" 
                  src="https://img.campusreform.org/eyJidWNrZXQiOiJjYW1wdXMucmVmb3JtIiwia2V5IjoiMTkzNjUvdHNjM2RiVW50aXRsZWRkZXNpZ25ULjY4NCIsImVkaXRzIjp7ImdyYXlzY2FsZSI6ZmFsc2UsInJlc2l6ZSI6eyJ3aWR0aCI6MTAwMH19fQ=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                  <span className="text-primary-fixed font-label uppercase tracking-[0.2em] mb-4">Explore our Grounds</span>
                  <h1 className="font-headline text-5xl md:text-7xl text-white max-w-4xl leading-tight">A Sanctuary for Intellectual Growth</h1>
                </div>
              </div>
            </div>

            {/* Campus Overview Stats */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">01.</span>
                <h2 className="text-3xl font-headline text-primary">By the Numbers</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-8 bg-surface-container-low rounded-xl text-center">
                  <div className="text-primary font-headline text-4xl mb-2">150+</div>
                  <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Acres of Greenery</div>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl text-center">
                  <div className="text-primary font-headline text-4xl mb-2">42</div>
                  <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Research Labs</div>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl text-center">
                  <div className="text-primary font-headline text-4xl mb-2">12k+</div>
                  <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Living Spaces</div>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl text-center">
                  <div className="text-primary font-headline text-4xl mb-2">3</div>
                  <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Sports Complexes</div>
                </div>
              </div>
            </div>

            {/* Academic & Research Hubs */}
            <div className="scroll-mt-32" id="academic">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">02.</span>
                <h2 className="text-3xl font-headline text-primary">Academic & Research Pillars</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Large Feature: The Science Quad */}
                <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    data-alt="Advanced science laboratory with high-tech equipment and clean white aesthetics inside a university academic block" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvb9QkqPkUYTyOLKrbohG2w_QMx8bZlC-g5ZvdqJvatrWWbbOUYm2p51MRHtMc3BfMUCPGMvcuPNsQCF5O4WE8q1_f6EGDx70SG1-captc8ZDxjID9tvUcj6vjAYqHBVwcm9AxRN8j0uDyiRvUjN0wzv3dt4UET-IrsN7lagSL-sfcuRT3SKE3wqOTbtEu_1w0x_upC51hJLTHh6dyBuWCXEimbTrDo7Ue0j3K5OQFYZP4VQBU1Rv-bqHG9OvBajLazDUxUs40qEU"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="font-headline text-2xl mb-2">The Excellence Quad</h3>
                    <p className="text-sm opacity-90 max-w-sm">Home to 15 specialized laboratories focusing on Quantum Computing, Biotechnology, and Advanced Robotics.</p>
                  </div>
                </div>
                {/* Small Feature: Library */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    data-alt="Modern multi-level university library with tall wooden shelves and comfortable study pods for students" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHq9Q6oKLuoHTMyJzFVdQjXHeL53tZyx2Wy7L2YXViayrtktsPapy8dvhhhw34MKRbACAKSngCzn9O-78NeBDbZJQUChKEP3NklXV9MZL-BRVHJDYeytlsJ10OS-VvVPYICtc8II9r_mveh2ntPT90Gt7GrhgM1jMCHftnx_-hY8D008qRKZpy_2DB0sLunr_WpfvrGPwf76CSuIxBZawYiIKKyvGfLbtx-vsSHTrwYYDmiN2US1XZrtkeAP8tO5yJ3ENErm7wdUs"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="font-headline text-xl text-white">Central Archive</h3>
                  </div>
                </div>
                {/* Small Feature: Research Center */}
                <div className="bg-primary p-8 rounded-xl flex flex-col justify-between">
                  <span className="material-symbols-outlined text-primary-fixed text-4xl" data-icon="biotech">biotech</span>
                  <div>
                    <h3 className="font-headline text-xl text-white mb-2">AI Innovation Center</h3>
                    <p className="text-on-primary-container text-xs">Pioneering research in neural networks and ethical machine learning.</p>
                  </div>
                  <a className="text-primary-fixed text-sm font-bold flex items-center gap-2 group underline-offset-4 hover:underline" href="#">
                    </a>
                </div>
              </div>
            </div>

            {/* Student Life: Recreational Areas */}
            <div className="scroll-mt-32" id="student-life">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-headline text-outline-variant italic">03.</span>
                <h2 className="text-3xl font-headline text-primary">Campus Lifestyle & Recreation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-container-low p-4 rounded-xl shrink-0">
                      <span className="material-symbols-outlined text-primary" data-icon="fitness_center">fitness_center</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">Olympia Sports Arena</h4>
                      <p className="text-on-surface-variant text-sm">State-of-the-art gym, Olympic-sized swimming pool, and professional tennis courts for all students.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-container-low p-4 rounded-xl shrink-0">
                      <span className="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">Global Commons Dining</h4>
                      <p className="text-on-surface-variant text-sm">A multi-cuisine culinary hub serving fresh, organic meals sourced from local university-supported farms.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-container-low p-4 rounded-xl shrink-0">
                      <span className="material-symbols-outlined text-primary" data-icon="park">park</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">The Zen Gardens</h4>
                      <p className="text-on-surface-variant text-sm">Quiet, landscaped outdoor spaces designed for meditation, study, and social reconnection.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                    <img 
                      className="w-full h-full object-cover" 
                      data-alt="Aerial shot of a vibrant college campus courtyard with students walking and sitting on benches under green trees" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47--y_HT52v5q2Mb9dUDlj0eP4rxWgOvtKtspNPfl5DvWSnuDS_nqXQnaBBSqH9t1kyfOLg9pCoVRKp_it0eWQUSB6HRwOTXeD0OB0P_2LitiTjCl4RIpCT-biWeF650VveuIYV8ilZVxeayaVxFaCSdM0JjRq9-M9U99acNAGPMDxOLlNa8OENfHGTUtWe68be7Co0_o00LbwwniBG84GQSmt3Vc7A75Q632mr_gvn_7zZVEuCWJx12qpBDVF0aJfq6lzfkn7iM"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-xl shadow-lg max-w-[200px]">
                    <span className="font-headline text-4xl block mb-1">24/7</span>
                    <span className="text-xs uppercase tracking-widest opacity-80">Security & Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </>
  );
}