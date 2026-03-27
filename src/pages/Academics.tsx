import { useEffect } from "react";

export default function Academics() {
  useEffect(() => {
    document.title = "Academics | B.M. Sreenivasiah UNIVERSITY";
    document.body.className = "bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "scroll-smooth";
  }, []);

  return (
    <>

<main>
{/*  Hero Section  */}
<section className="relative min-h-[110px] flex items-center pt-8 pb-16 px-8 max-w-screen-2xl mx-auto overflow-hidden"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-7 space-y-6">
<span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">Excellence in Education</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
                        Cultivating the Next Generation of <span className="italic font-normal">Global Leaders</span>
</h1>
<p className="text-lg text-on-surface-variant max-w-xl font-medium leading-relaxed">
                        At B.M. Sreenivasiah UNIVERSITY, we bridge the gap between traditional wisdom and modern innovation through a curated academic curriculum designed for impact.
                    </p>

</div>
<div className="lg:col-span-5 relative">
<div className="rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
<img alt="University Library" className="w-full h-full object-cover" data-alt="Modern university library with high ceilings, glass walls, students studying at wooden desks in warm morning sunlight" src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2015/04/Turku-City-Library-inside-e1438761209492.jpg?resize=663%2C840&ssl=1"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary">
<p className="font-headline italic text-primary text-lg">"The curriculum here doesn't just teach you what to think, but how to architect solutions for the future."</p>
<p className="mt-4 font-label text-xs uppercase font-bold tracking-widest text-on-surface-variant">— Dean</p>
</div>
</div>
</div>
<div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-1/4 skew-x-12 opacity-50"></div>
</section>
{/*  Academic Tiers Section  */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto bg-surface-container-low rounded-t-[3rem]">
<div className="text-center mb-16">
<span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">Programs Overview</span>
<h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-2">Academic Pathways</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Undergraduate  */}
<div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:-translate-y-2 group">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-3xl">school</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Undergraduate</h3>
<p className="text-on-surface-variant mb-8 leading-relaxed">Foundation programs across Science, Arts, and Commerce designed to ignite curiosity and professional discipline.</p>
<ul className="space-y-3 mb-10 text-sm font-medium">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 4-Year Bachelor's Degrees</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Liberal Arts Integration</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Research Internship Tracks</li>
</ul>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all underline underline-offset-8 decoration-2" href="#">
                        View Undergraduate Programs <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
{/*  Postgraduate  */}
<div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:-translate-y-2 group shadow-xl shadow-black/[0.02]">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-3xl">workspace_premium</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Postgraduate</h3>
<p className="text-on-surface-variant mb-8 leading-relaxed">Specialized master's and doctoral degrees for those seeking to master their craft and lead research-driven innovations.</p>
<ul className="space-y-3 mb-10 text-sm font-medium">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Advanced Specializations</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Industry Fellowship Link</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Flexible Part-time Options</li>
</ul>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all underline underline-offset-8 decoration-2" href="#">
                        Explore Master's &amp; Ph.D. <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
{/*  Executive Education  */}
<div className="bg-surface-container-lowest p-8 rounded-xl transition-all hover:-translate-y-2 group">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-3xl">engineering</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Executive Programs</h3>
<p className="text-on-surface-variant mb-8 leading-relaxed">Short-term, high-intensity modules for working professionals looking to upskill and navigate the digital economy.</p>
<ul className="space-y-3 mb-10 text-sm font-medium">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Corporate Leadership Tracks</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Weekend Intensive Formats</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Global Alumni Network</li>
</ul>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all underline underline-offset-8 decoration-2" href="#">
                        Upskill Today <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  Signature Programs Section (Bento Grid)  */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">The Industry Edge</span>
<h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-2">Signature Programs</h2>
</div>
<p className="text-on-surface-variant max-w-md font-medium leading-relaxed">
                    Flagship courses developed in collaboration with Fortune 500 tech leaders and creative houses to ensure immediate career relevance.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
{/*  Item 1  */}
<div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl">
<img alt="Quantum Computing Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern laboratory setting with blue light, researchers working on high-tech equipment for quantum computing experiments" src="https://cdn.mos.cms.futurecdn.net/CBcmkyZ8v4tAc8PSDcEgvM.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
<span className="text-white/70 font-label text-xs uppercase tracking-widest mb-2">School of Innovation</span>
<h3 className="text-white font-headline text-3xl font-bold mb-4">M.Tech in Quantum Systems</h3>
<p className="text-white/80 max-w-md mb-6 font-medium">Leading the frontier of computing with industry-partnered research labs and direct placements.</p>
<div className="flex gap-4">
<button className="bg-white text-primary px-6 py-3 rounded-lg font-bold text-sm active:scale-95 transition-all">Enroll Now</button>
<button className="border border-white/30 text-white backdrop-blur-md px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/10 active:scale-95 transition-all">Program Details</button>
</div>
</div>
</div>
{/*  Item 2  */}
<div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Data Analytics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Digital screen showing colorful data visualizations, charts, and financial analytics in a sharp, modern office environment" src="https://start.docuware.com/hubfs/Cover%20data%20m.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
<h4 className="text-white font-headline text-xl font-bold">MBA in Data Strategy</h4>
<p className="text-white/70 text-sm mt-1">Transforming numbers into business impact.</p>
</div>
</div>
{/*  Item 3  */}
<div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Creative Arts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Artist studio with large canvases, vibrant paint splashes, and natural light flooding in from tall industrial windows" src="https://www.dvc.edu/sites/default/files/2024-08/masthead_Art-Digital-Media_1264x711.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
<h4 className="text-white font-headline text-xl font-bold">B.Des in Media Arts</h4>
<p className="text-white/70 text-sm mt-1">Merging aesthetics with digital tech.</p>
</div>
</div>
</div>
</section>
{/*  Admission CTA Section  */}
<section className="py-24 px-8 max-w-screen-2xl mx-auto mb-24">
<div className="signature-cta rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
<div className="relative z-10">
<h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-8">Ready to define your future?</h2>
<p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                        Join a community of scholars, innovators, and leaders at B.M. Sreenivasiah UNIVERSITY. Fall admissions are now open across all primary faculties.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<button className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors active:scale-95 shadow-xl shadow-black/20">
                            Apply for 2024-25
                        </button>
<button className="text-white border-b-2 border-white/30 hover:border-white transition-all pb-1 font-bold flex items-center gap-2">
                            Request a Prospectus <span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            background: rgba(247, 249, 251, 0.7);
            backdrop-filter: blur(20px);
        }
        .signature-cta {
            background: linear-gradient(135deg, #000e24 0%, #00234b 100%);
        }`}</style>
    </>
  );
}










