import { useEffect } from "react";

export default function Research() {
  useEffect(() => {
    document.title = "Research | B.M. Sreenivasiah UNIVERSITY";
    document.body.className = "bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "";
  }, []);

  return (
    <>

<main className="pt-24">
{/*  Hero Section: Editorial Design  */}
<section className="relative px-8 md:px-20 py-24 md:py-32 overflow-hidden bg-surface">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 z-10">
<span className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold text-xs mb-6 block">Global Innovation Hub</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] -tracking-tight mb-8">
                        The Future of <br/><span className="italic text-on-primary-container">Academic Inquiry</span>
</h1>
<p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                        At B.M. Sreenivasiah UNIVERSITY, research isn't just about discovery—it's about curation. We bring together world-class minds to solve the most pressing challenges of the next century.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-base transition-all hover:bg-primary-container">Explore Journals</button>
<button className="border-b-2 border-primary-fixed text-primary px-4 py-4 font-bold text-base hover:border-primary transition-all">Meet Our Fellows</button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Modern high-tech laboratory with researchers in clean white suits working with advanced futuristic equipment in a bright blue-tinted environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLjxIy39KWA8sAJMr5-V16N0utS1DWcvEsccCSG5YNJy7hrj77ZrZ7toFhz1VNBz3FnL54EZ7yIqaushoFO_vq6Q0tQ_K9yKLK277ppEw8aLTE4OCw62-M-5t7fbxYmmBgGM6G1dQuOMvtBqRh9SF26P0gtzF4ru8r1y442zYj6Bw7AvrmZ1C7eeHrV1Z6ihCcodfDA23Jv59Nf-Od2lBaqUE1O87MfO0PaGwRzzXjWz__BdC2is4YUMYXRPnJbkYgYgIoOaDmU34"/>
</div>
{/*  Overlapping Decorative Element  */}
<div className="absolute -bottom-10 -left-10 bg-primary-container p-8 rounded-lg shadow-xl hidden md:block">
<div className="text-primary-fixed text-4xl font-serif mb-1">94%</div>
<div className="text-on-primary-container text-xs uppercase tracking-widest font-bold">Research Impact Score</div>
</div>
</div>
</div>
</section>
{/*  Bento Grid: Focus Areas  */}
<section className="bg-surface-container-low py-32 px-8 md:px-20">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold text-xs mb-4 block">Current Pillars</span>
<h2 className="font-serif text-4xl md:text-5xl text-primary">Priority Research Labs</h2>
</div>
<p className="max-w-md text-on-surface-variant font-body">Our interdisciplinary labs are structured to dissolve traditional boundaries between science, ethics, and engineering.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  AI + Society  */}
<div className="group bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-[0_32px_64px_-12px_rgba(25,28,30,0.06)] flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]">
<div>
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary">neurology</span>
</div>
<h3 className="font-body text-2xl font-bold text-primary mb-4">AI + Society</h3>
<p className="text-on-surface-variant leading-relaxed">Defining the ethical frameworks and cultural implications of ubiquitous machine intelligence.</p>
</div>
<a className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all" href="#">
                            View Lab <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
{/*  Climate Systems  */}
<div className="group bg-primary p-8 rounded-xl transition-all hover:shadow-[0_32px_64px_-12px_rgba(0,14,36,0.2)] flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]">
<div>
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-on-primary-container">eco</span>
</div>
<h3 className="font-body text-2xl font-bold text-on-primary mb-4">Climate Systems</h3>
<p className="text-on-primary-container leading-relaxed">Developing carbon-neutral technologies and resilient urban ecosystems for the next century.</p>
</div>
<a className="inline-flex items-center text-on-primary font-bold group-hover:gap-2 transition-all" href="#">
                            View Lab <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
{/*  Urban Mobility  */}
<div className="group bg-surface-container-lowest p-8 rounded-xl transition-all hover:shadow-[0_32px_64px_-12px_rgba(25,28,30,0.06)] flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]">
<div>
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary">commute</span>
</div>
<h3 className="font-body text-2xl font-bold text-primary mb-4">Urban Mobility</h3>
<p className="text-on-surface-variant leading-relaxed">Engineering the physical and digital infrastructure of the smart, hyper-connected city.</p>
</div>
<a className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all" href="#">
                            View Lab <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  Split Section: Research Impact  */}
<section className="py-32 px-8 md:px-20 bg-surface overflow-hidden">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative h-[600px]">
<div className="absolute inset-0 bg-slate-200 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Satellite visualization of global data networks with glowing blue and white nodes representing connectivity and research impact across continents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnR9Mc50GGzIRPzKQnE5-Ey0oMTKQ8URP5kBM62YKpA5RwRa1U4SfoYK0its0LQSNkzVZliDg3wLQPT9YZa_HPU5Zhk-zH4bxC0s1l4DYNcepmLWDo-DNfoN8OjtGlhqr7A71rr-Y7yljjJqRbUQHQ9G2HOXYWLUqgBIUxY7UivQ2SeHx6WyZJTUHhYa4ZhC4Mmp2FBaG3aTz0R-Uyca8OSxwyeMkyzrjjgVQJjbhnBlpJqL9vcrtcVSmByDyyAnzmN38KF616Ug4"/>
</div>
<div className="absolute top-12 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs">
<span className="material-symbols-outlined text-primary mb-3">public</span>
<p className="text-sm font-body text-on-surface-variant italic">"B.M. Sreenivasiah UNIVERSITY's global footprint has expanded to 42 countries, leading over 200 cross-continental research projects."</p>
<p className="text-xs font-bold text-primary mt-3">— Global Research Council</p>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold text-xs mb-6 block">Sovereign Impact</span>
<h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight mb-8">Knowledge that <br/><span className="text-on-primary-container underline decoration-primary-fixed decoration-4 underline-offset-8">Transforms</span> Reality</h2>
<div className="space-y-12">
<div className="flex gap-6">
<div className="shrink-0 text-3xl font-serif text-primary-container">01</div>
<div>
<h4 className="font-bold text-xl mb-2 text-primary">Policy Influence</h4>
<p className="text-on-surface-variant leading-relaxed">Our researchers act as primary advisors to national governments on digital privacy and sustainable growth.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 text-3xl font-serif text-primary-container">02</div>
<div>
<h4 className="font-bold text-xl mb-2 text-primary">Commercial Ventures</h4>
<p className="text-on-surface-variant leading-relaxed">B.M. Sreenivasiah UNIVERSITY incubated startups have raised over $1.2B in venture funding, bridging the gap from lab to market.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 text-3xl font-serif text-primary-container">03</div>
<div>
<h4 className="font-bold text-xl mb-2 text-primary">Humanitarian Reach</h4>
<p className="text-on-surface-variant leading-relaxed">Applying high-end engineering to solve local sanitation and energy crisis in developing regions.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Newsletter / CTA  */}
<section className="mb-32 px-8 md:px-20">
<div className="max-w-screen-xl mx-auto bg-primary-container rounded-2xl p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] -mr-32 -mt-32 opacity-50"></div>
<div className="relative z-10">
<h2 className="font-serif text-3xl md:text-5xl text-on-primary mb-6">Stay at the forefront <br/>of discovery.</h2>
<p className="text-on-primary-container mb-10 text-lg max-w-xl mx-auto">Subscribe to the B.M. Sreenivasiah UNIVERSITY Monthly Digest for deep-dives into our latest breakthroughs and academic papers.</p>
<div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
<input className="flex-grow bg-primary text-on-primary border-none rounded-lg px-6 py-4 placeholder:text-on-primary-container focus:ring-2 focus:ring-on-primary-container" placeholder="Academic Email Address" type="email"/>
<button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-bold hover:bg-on-primary hover:text-primary transition-all">Subscribe</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<style>{`body { font-family: 'Manrope', sans-serif; background-color: #f7f9fb; color: #191c1e; }
        .font-serif { font-family: 'Noto Serif', serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
    </>
  );
}










