import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.body.className = "bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "";
  }, []);

  return (
    <>

{/*  Top Navigation Shell  */}
<main>
{/*  Hero Section  */}
<section className="relative h-[819px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="B.M. Sreenivasiah UNIVERSITY Campus" className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]" data-alt="stately university gothic architecture buildings surrounded by ancient oak trees under a clear twilight sky with soft orange glow" src="https://images.shiksha.com/mediadata/images/1535019907phpaCZsTx.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-3xl">
<span className="font-label text-sm uppercase tracking-[0.2em] text-primary-fixed mb-4 block">Established 1954</span>
<h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] text-white font-bold tracking-tight mb-8">
                        Excellence in <br/><span className="italic font-normal">Every Endeavor.</span>
</h1>
<p className="text-blue-100 text-xl leading-relaxed font-light max-w-xl">
                        B.M. Sreenivasiah UNIVERSITY stands as a beacon of intellectual rigor and cultural heritage, shaping the leaders of tomorrow through holistic education.
                    </p>
</div>
</div>
</section>
{/*  Purpose-Driven Education Section  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="relative">
<img alt="Collaborative Learning" className="rounded-xl shadow-xl relative z-10" data-alt="diverse group of graduate students engaged in deep discussion around a wooden table in a sunlit modern library with glass walls" src="https://exeedcollege.com/wp-content/uploads/2024/12/Collaborative-Learning.jpg"/>
<div className="absolute -top-6 -left-6 w-32 h-32 bg-tertiary-fixed rounded-xl -z-10"></div>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2">
<span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-3 block">Our Mission</span>
<h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-8 leading-tight">
                            Purpose-driven education for a global landscape.
                        </h2>
<div className="space-y-6 text-on-surface/80 text-lg leading-relaxed max-w-2xl">
<p>
                                At B.M. Sreenivasiah UNIVERSITY, we believe education transcends the classroom. Our curriculum is designed to foster critical thinking, ethical leadership, and a profound sense of social responsibility. 
                            </p>
<p>
                                We empower our students to not only understand the world as it is but to envision and create the world as it should be. Through interdisciplinary research and community engagement, we bridge the gap between theory and impact.
                            </p>
<a className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 group hover:text-on-primary-container hover:border-on-primary-container transition-all" href="#">
                                Discover Our Vision
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Statistics Section  */}
<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
{/*  Stat Item  */}
<div className="flex flex-col border-l border-outline-variant pl-8 py-4">
<span className="text-6xl font-headline font-bold text-primary mb-2">1954</span>
<span className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-semibold">Year Founded</span>
<p className="mt-4 text-on-surface/70 text-sm">Seven decades of academic excellence and heritage in the heart of the region.</p>
</div>
{/*  Stat Item  */}
<div className="flex flex-col border-l border-outline-variant pl-8 py-4">
<div className="flex items-baseline gap-2">
<span className="text-6xl font-headline font-bold text-primary mb-2">24K</span>
<span className="material-symbols-outlined text-primary mb-2" data-icon="add">add</span>
</div>
<span className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-semibold">Global Students</span>
<p className="mt-4 text-on-surface/70 text-sm">A vibrant community representing over 45 countries and diverse cultural backgrounds.</p>
</div>
{/*  Stat Item  */}
<div className="flex flex-col border-l border-outline-variant pl-8 py-4">
<span className="text-6xl font-headline font-bold text-primary mb-2">120+</span>
<span className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-semibold">Global Collaborations</span>
<p className="mt-4 text-on-surface/70 text-sm">Strategic partnerships with world-class institutions for research and exchange programs.</p>
</div>
</div>
</div>
</section>
{/*  Values Grid (Bento Style)  */}
<section className="pb-32 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 bg-primary-container p-12 rounded-xl flex flex-col justify-end text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
<span className="material-symbols-outlined text-[12rem]" data-icon="account_balance">account_balance</span>
</div>
<h3 className="font-headline text-3xl font-bold mb-4 relative z-10">Integrity &amp; Honor</h3>
<p className="text-blue-200 relative z-10 max-w-md">Our foundation is built upon the unwavering pursuit of truth and ethical conduct in all academic and personal pursuits.</p>
</div>
<div className="md:col-span-2 bg-surface-container-highest p-8 rounded-xl flex items-center gap-8 group">
  <span className="material-symbols-outlined text-primary text-3xl" data-icon="science">
    science
  </span>
  <div>
    <h3 className="font-bold text-xl text-primary mb-1">Research Excellence</h3>
    <p className="text-on-surface-variant text-sm">
      Pioneering discoveries that address the most pressing challenges of our time.
    </p>
  </div>
</div>
<div className="bg-tertiary-fixed p-8 rounded-xl flex flex-col justify-between group">
<span className="material-symbols-outlined text-on-tertiary-fixed text-4xl" data-icon="diversity_3">diversity_3</span>
<h3 className="font-bold text-lg text-on-tertiary-fixed">Inclusive Community</h3>
</div>
<div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between group">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="auto_awesome">auto_awesome</span>
<h3 className="font-bold text-lg text-primary">Innovation First</h3>
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
        backdrop-filter: blur(20px);
      }`}</style>
    </>
  );
}









