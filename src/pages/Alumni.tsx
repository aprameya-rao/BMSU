import { useEffect } from "react";

export default function Alumni() {
  useEffect(() => {
    document.title = "Alumni | B.M. Sreenivasiah UNIVERSITY";
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "light";
  }, []);

  return (
    <>

{/*  Side Navigation Bar (Hidden on Mobile)  */}
<aside className="flex flex-col w-64 h-screen fixed left-0 top-0 pt-20 bg-slate-50 z-40 hidden xl:flex">
<div className="px-8 py-6">
<h2 className="font-serif text-xl font-bold text-slate-900">B.M. Sreenivasiah UNIVERSITY Portal</h2>
<p className="text-sm text-slate-500 font-body">The Digital Curator</p>
</div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-slate-100 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-body">Home</span>
</a>
<a className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-slate-100 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">domain</span>
<span className="font-body">Campuses</span>
</a>
<a className="flex items-center space-x-3 p-3 bg-slate-200 text-slate-900 font-bold rounded-lg group" href="#">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">school</span>
<span className="font-body">Alumni</span>
</a>
<a className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-slate-100 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">person_search</span>
<span className="font-body">Student Services</span>
</a>
</nav>
<div className="p-8 border-t border-slate-200">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">JD</div>
<div>
<p className="text-sm font-bold">John Doe</p>
<p className="text-xs text-slate-500">Class of '14</p>
</div>
</div>
</div>
</aside>
<main className="xl:pl-64 pt-24 min-h-screen">
{/*  Hero Section  */}
{/*  Global Alumni Chapters - Bento Grid  */}
<section className="px-12 py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Connectivity</span>
<h2 className="font-headline text-4xl text-primary">Global Chapters</h2>
</div>
<a className="text-primary font-bold border-b-2 border-primary-fixed-dim pb-1 hover:border-primary transition-all" href="#">View Map</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-primary shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Modern high-angle view of San Francisco skyline and Golden Gate Bridge in soft afternoon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRLII3jSCh58eqBXup84maviRSOhWInGVypbIkgPz-ZG55eBTadO3HwNs5TLHumzWxj6xJldZDNMwX-UWxGRz7pMemJnQ2wcUb1fTgcn-DpxbgUAVK_0Vfa5Syqef1m8q_AOP7ZqNitJlxSWdlnp6jkYas1x05oTCWRGlWa1QRAq_cJc3LwSfoeW2Mxa3oaznCa_kT6XsObjwqFg14czAHK8GErgHmhdAFSxf94m1UZgc0zJuBQYGeI8-TO1WZfumOJmeeqB5mVM"/>
<div className="absolute bottom-0 left-0 p-10 z-10">
<h3 className="font-headline text-3xl text-white mb-2">North America Hub</h3>
<p className="text-white/80 font-body mb-4">Focusing on Tech Innovation and Finance in San Francisco &amp; NYC.</p>
<span className="inline-flex items-center space-x-2 text-white font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
<span>24,500 Members</span>
<span className="material-symbols-outlined text-xs">public</span>
</span>
</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/10">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-4">location_city</span>
<h3 className="font-headline text-xl mb-2 text-primary">London Circle</h3>
<p className="text-on-surface-variant text-sm">A bridge between European heritage and global commerce.</p>
</div>
<button className="text-primary font-bold text-left flex items-center space-x-2">
<span>Explore Chapter</span>
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between shadow-sm">
<div>
<span className="material-symbols-outlined text-on-primary-container text-4xl mb-4">temple_hindu</span>
<h3 className="font-headline text-xl mb-2 text-on-primary-container">Delhi-NCR Base</h3>
<p className="text-on-primary-container/80 text-sm">Our primary engine for policy and engineering growth.</p>
</div>
<button className="text-on-primary-container font-bold text-left flex items-center space-x-2">
<span>Explore Chapter</span>
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
{/*  Mentorship Program - Asymmetric Layout  */}
<section className="px-12 py-24 bg-surface max-w-7xl mx-auto overflow-hidden">
<div className="editorial-grid items-center">
<div className="col-span-12 lg:col-span-5 relative mb-12 lg:mb-0">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
<img className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" data-alt="Two professional women having a serious but warm discussion in a modern office with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc1qp-2FM2gmZtYCO4LgT-iwo60q481QsUQNGav9xuycvr18-Y4RLSS-ETzvP-oafJ6uEuYuQE16tFTAweuv9uyHYW0X3ilh83D27Ho3ZatPSZUNSmb3-H-WvB4yx3GmH09mjogxtp8KgwsgRBfyAv2EWwQzLBhQRNMv3EOpwb7K0knqfjjjlF1TnWM5XN7zsvMDzfQN3UyXROXFn3LNa_iYhC7pKcvR4Urabu6rHxVYQcAcUNyLtDLXg6zQQ2Ij9nQTKaVCaxCNo"/>
<div className="absolute -bottom-6 -right-6 bg-surface-bright p-6 rounded-lg shadow-xl z-20 border border-outline-variant/20">
<p className="font-headline text-2xl text-primary mb-1">98%</p>
<p className="text-xs font-label uppercase text-on-surface-variant">Success Rate</p>
</div>
</div>
<div className="col-span-12 lg:col-span-6 lg:col-start-7">
<span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Knowledge Exchange</span>
<h2 className="font-headline text-5xl text-primary mb-8 leading-tight">The Mentor’s <br/>Archive</h2>
<p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                        Bridge the gap between academic theory and industry reality. Our Mentorship Program pairs seasoned graduates with final-year students and early-career alumni for a structured 6-month journey.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start space-x-4">
<span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-full">diversity_3</span>
<div>
<h4 className="font-bold text-primary">Strategic Matching</h4>
<p className="text-sm text-on-surface-variant">AI-driven pairing based on career aspirations and shared values.</p>
</div>
</li>
<li className="flex items-start space-x-4">
<span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-full">psychology</span>
<div>
<h4 className="font-bold text-primary">Shadowing Opportunities</h4>
<p className="text-sm text-on-surface-variant">Direct insight into high-level decision-making processes.</p>
</div>
</li>
</ul>
<button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all">Become a Mentor</button>
</div>
</div>
</section>
{/*  Alumni Events - Glass Cards  */}
<section className="px-12 py-24 bg-surface-container-high relative">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Calendar</span>
<h2 className="font-headline text-4xl text-primary">Upcoming Reunions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Event Card 1  */}
<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-1 rounded-2xl group transition-all hover:-translate-y-2">
<div className="relative h-64 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover" data-alt="Elegant corporate banquet hall setup with warm lighting and floral arrangements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByCAi8KxOzfk6kohdCVlBx5gj4uID4eGLBL-dBowah3xY0Bh0kGwkEeyewrm28gQupEoaBN3Ie4jDo1q1WXvXvmmAJmLBNIpZhXId-RROkAA9chFSxB1msDyORBBI_A-RT0ESSdKgv9W4uQyrjDHnlJPmm8e4nkJSLyL28jRLy53UlUaH-9qOuR-OnzYJ_PPS3pZWJEAOTi7JR5wQXvH-qt5BislmgHwkPmAi67THblBZ6t8dN-_FA92nMZb02jo2UZjo0iQNGR6c"/>
<div className="absolute top-4 left-4 bg-primary text-white text-center p-2 rounded-lg min-w-[60px]">
<p className="text-xs uppercase font-label">Oct</p>
<p className="text-xl font-bold">14</p>
</div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl text-primary mb-2">Annual Heritage Dinner</h3>
<p className="text-on-surface-variant text-sm mb-6">A black-tie evening celebrating the founders' legacy and future goals.</p>
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Main Campus</span>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-sm font-bold">Register</button>
</div>
</div>
</div>
{/*  Event Card 2  */}
<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-1 rounded-2xl group transition-all hover:-translate-y-2">
<div className="relative h-64 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover" data-alt="Tech conference auditorium with large digital screen and silhouettes of attendees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZd1DN35X3uzCwTO49bSP7NF_LO9seZv-5MqsXM-dHdOqtm6euC0RS1fXxevRRtwWY3_OGyeSz9eZNAR6boSEQ72EmuT40eRNYeASXfoulrKIZ4WP5YtdF0xvfhL3sMAyzjev951b6nGpHHxFiXcF3POrPZz0Ld7CiGkKsULu1UEkNWu2sNPgcKJvLfaRnZl1BPuTFmKOVk83cWGsh2LBVisO5F-7qVLj1Zz0_qCblE_IjIx20vvc2wVSFIKH61V_KcTGb7yWRsbA"/>
<div className="absolute top-4 left-4 bg-primary text-white text-center p-2 rounded-lg min-w-[60px]">
<p className="text-xs uppercase font-label">Nov</p>
<p className="text-xl font-bold">02</p>
</div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl text-primary mb-2">Innovation Summit '24</h3>
<p className="text-on-surface-variant text-sm mb-6">Join alumni entrepreneurs pitching to venture capitalists.</p>
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Bengaluru</span>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-sm font-bold">Register</button>
</div>
</div>
</div>
{/*  Event Card 3  */}
<div className="bg-white/40 backdrop-blur-xl border border-white/60 p-1 rounded-2xl group transition-all hover:-translate-y-2">
<div className="relative h-64 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover" data-alt="People sitting on a lawn during a sunlit outdoor campus social event" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUFzuR1ymC59hOmmqRgdqHwiv-zvK1Nn2CsMurG7tuy8Le-DZtOT3laZqYP9i5u8_YGNiecp9Ut7FlZwZm2DrqFZt_LDSVy9g8sON_1Cz_k_NzYu6MOwWUpMvICiFXD7zUN2VCpKDs-gGGxpdDeaYQJ0iiPoat9xqusl5lagXUzzapRiqUQjAXTFdwCvnreT2gGyIga2FP7EjdbPcGftajpqSx7SqNu2RHyBDi6WW3Ds6_CrJZdxpWiVN0LUiSVql2D-RBK4i7_tk"/>
<div className="absolute top-4 left-4 bg-primary text-white text-center p-2 rounded-lg min-w-[60px]">
<p className="text-xs uppercase font-label">Dec</p>
<p className="text-xl font-bold">20</p>
</div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl text-primary mb-2">Winter Garden Mixer</h3>
<p className="text-on-surface-variant text-sm mb-6">Casual networking and mulled tea at the Old Library Garden.</p>
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Oxford Hub</span>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-sm font-bold">Register</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Give Back - Scholarship Section  */}
<section className="px-12 py-32 bg-primary text-on-primary relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
<svg className="h-full w-full" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<path d="M0,400 Q200,300 400,400 L400,0 Q200,100 0,0 Z" fill="currentColor"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
<div className="md:w-1/2">
<span className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed mb-4 block">The Endowment</span>
<h2 className="font-headline text-5xl mb-8">Paving the Path for Future Scholars</h2>
<p className="font-body text-xl opacity-80 mb-10 leading-relaxed">
                        Your contributions do more than just fund degrees; they ignite potential. Help us reach our goal of supporting 1,000 first-generation students by 2026.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex justify-between text-sm mb-2">
<span>Campaign Progress</span>
<span>74% of $5M</span>
</div>
<div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
<div className="bg-primary-fixed h-full w-[74%]"></div>
</div>
</div>
<button className="bg-primary-fixed text-on-primary-fixed px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">Support a Student</button>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<img className="rounded-lg w-full h-48 object-cover" data-alt="A group of diverse university students laughing and walking together across a sunny courtyard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPnrkpS2dj9et113NKe2L6dZNVey_uzxe7aQaZpRC3J0en2fTBgJg12lAHAUp0aJBHZiqwAkCb8Zltj7okSAa9Zfg8vxXn1Pfz3aRe-JvNOy_MuQvXA51CL-uTGBfRkXQHJXxQXsUdBJnILlvSHXnIoFR6BK0hfVkx1NqUrpraFeIfRzUwcSinRucc30-VjtehygBg2Ih8B2yGjQWFyczm8Ytq1UIXoyST5pSK8Gv-nNUVNaXTni7IA22r9th0IpDcbNgQiv4WU6Y"/>
<img className="rounded-lg w-full h-48 object-cover mt-12" data-alt="Close up of a student in a graduation gown holding a diploma with a proud expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9XVSI-LYFZqrHxWXUazXzwEmXg44YOa0A_7ntePLJDk62KCC8PV9p-MUkd8LHvMpmWqCNVGILf7SU3AXboSGWLocP1xvZuhntySo_ijfuQzYxWzLCK1aBjnLioEII7xub_6IJuFi0blPZyaGU1s4NH9wnagOQFPEBkDYsyYH_V3EfvkCAr3auEp6aYta5n7lttVO0vjpnYmbKLuKmdhWOqQ6Z86VwbxAAxFvIAbIfyxscRh8eBnzIHPlzIwwEfa98pcqdOhVDFdM"/>
<img className="rounded-lg w-full h-48 object-cover" data-alt="Interior of a modern, bright library with students studying at long wooden tables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbwOgp2oR1nft9pAh_GTp3oIxc4FPHdlHWqf7GkhpU1Pm_UdeWYlLqLO3M8HT8NCCgeS8twAIK9JZsU_xUqxR-3bO9DntnBpq2rZVA1_CRPX2D59gSxU5THWQKaCMHDvTqxwwKdEV_-d1B6jprPqPqCcYN4dq0hjnBuyfbTafxPOnrauAZJ-5NiM4nscH_N9I9lLlLodhXXWZ1evOTe4hisR3tW5c3MD8Ey23KgoOS3I-8rgj9xWLq-CReRoPjRqOwXQ-GHnmgQc"/>
<img className="rounded-lg w-full h-48 object-cover mt-12" data-alt="A professor teaching students in a high-tech university classroom with a whiteboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAwWnbsomm-yKY79I7-t8H7xu_SYhZOxOKpP_YRVfSIXronLGg9VJdeK7TlpYor6mtsKk5hvYyHlK99o-sWKfxIY3yxHpjCbwnZyovKQfLDbVA72e1mqBaqh7F2pXxreK2Fq-TTej1L6pSyp_gZqX0VqVEZrI-ciZkinLcayVGKhNLWU8mH1duSV4IoO6yVBQR1uG695v8G2SYAbhFzwiXxfEZvERSFKLH84fEo5H1HddOExlPXIYGT9hUYv3TrZ0c_FxbqigI8W0"/>
</div>
</div>
</section>
{/*  Footer  */}
</main>

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-nav {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .editorial-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
        }`}</style>
    </>
  );
}



