import { useEffect } from "react";

export default function Campus() {
  useEffect(() => {
    document.title = "Campus | B.M. Sreenivasiah UNIVERSITY Portal";
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "scroll-smooth";
  }, []);

  return (
    <>

<div className="flex">
{/*  SideNavBar (Admissions Context)  */}
<aside className="fixed left-0 top-0 h-screen z-40 flex flex-col pt-20 w-72 bg-slate-50/95 backdrop-blur-2xl tonal-shift bg-slate-100 hidden lg:flex">
<div className="px-8 py-6">
<h2 className="font-serif text-xl text-blue-950">Admissions</h2>
<p className="font-sans text-xs uppercase tracking-widest text-slate-500 mt-1">The Scholar's Path</p>
</div>
<nav className="flex-1 overflow-y-auto no-scrollbar py-4">
<ul className="space-y-1">
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="assignment_turned_in">assignment_turned_in</span>
<span className="font-sans text-sm font-medium tracking-wide">PES Entrance Process</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="info">info</span>
<span className="font-sans text-sm font-medium tracking-wide">Eligibility &amp; Overview</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="font-sans text-sm font-medium tracking-wide">Qualifying Exams</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-sans text-sm font-medium tracking-wide">Program Intake</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-sans text-sm font-medium tracking-wide">Fee Details</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-sans text-sm font-medium tracking-wide">Important Dates</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-sans text-sm font-medium tracking-wide">Documents Required</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="card_membership">card_membership</span>
<span className="font-sans text-sm font-medium tracking-wide">Scholarships</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="loyalty">loyalty</span>
<span className="font-sans text-sm font-medium tracking-wide">Loyalty Program</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="directions_bus">directions_bus</span>
<span className="font-sans text-sm font-medium tracking-wide">Transportation</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="hotel">hotel</span>
<span className="font-sans text-sm font-medium tracking-wide">Hostel</span>
</a>
</li>
<li className="group">
<a className="flex items-center gap-4 py-3 pl-6 text-slate-500 hover:text-blue-700 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="quiz">quiz</span>
<span className="font-sans text-sm font-medium tracking-wide">FAQs</span>
</a>
</li>
<li className="group">
<a className="bg-white text-blue-900 rounded-l-full font-bold pl-6 shadow-sm translate-x-1 flex items-center gap-4 py-3 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="location_city">location_city</span>
<span className="font-sans text-sm font-medium tracking-wide">Campus</span>
</a>
</li>
</ul>
</nav>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 lg:ml-72 pt-24 px-6 md:px-12">
{/*  Hero Section  */}
<section className="mb-24">
<div className="relative rounded-xl overflow-hidden h-[614px] group">
<img className="w-full h-full object-cover" data-alt="Modern university campus architecture with glass buildings and green lawns under a clear blue morning sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3hO9wty8W_YUrNHdK6URGjmqbjN2zSpSntgK69slH8GrZ0eZJHYa6m2ykZpBhGZ-nWuNxNsoLAFVt4OjU9HsgM9PQxP9Z1qeahnKibrc9ehWhW6sRJJFpb9kTBxQDhlCMMPzWPPGcEUEdC6zoazorqzY-SMrxpRfRyJqUvmLzK_sZRscPruECe9iy8G4DUwmJKcFJub8yBEPKia_Hbi3Iw6KPeustFrWl4_qCbVHZcyN9AI-q7VMfXJV9XAQBzXxTVkf8UY_xeQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
<span className="text-primary-fixed font-label uppercase tracking-[0.2em] mb-4">Explore our Grounds</span>
<h1 className="font-headline text-5xl md:text-7xl text-white max-w-4xl leading-tight">A Sanctuary for Intellectual Growth</h1>
</div>
</div>
</section>
{/*  Campus Overview Stats  */}
<section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-8">
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
</section>
{/*  Bento Grid: Academic & Research Centers  */}
<section className="mb-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="font-label text-primary uppercase tracking-[0.2em] text-xs">Innovation Hubs</span>
<h2 className="font-headline text-4xl mt-2">Academic &amp; Research Pillars</h2>
</div>
<p className="text-on-surface-variant max-w-md">Our facilities are designed to foster cross-disciplinary collaboration and provide students with industry-standard tools.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
{/*  Large Feature: The Science Quad  */}
<div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Advanced science laboratory with high-tech equipment and clean white aesthetics inside a university academic block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvb9QkqPkUYTyOLKrbohG2w_QMx8bZlC-g5ZvdqJvatrWWbbOUYm2p51MRHtMc3BfMUCPGMvcuPNsQCF5O4WE8q1_f6EGDx70SG1-captc8ZDxjID9tvUcj6vjAYqHBVwcm9AxRN8j0uDyiRvUjN0wzv3dt4UET-IrsN7lagSL-sfcuRT3SKE3wqOTbtEu_1w0x_upC51hJLTHh6dyBuWCXEimbTrDo7Ue0j3K5OQFYZP4VQBU1Rv-bqHG9OvBajLazDUxUs40qEU"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<h3 className="font-headline text-2xl mb-2">The Excellence Quad</h3>
<p className="text-sm opacity-90 max-w-sm">Home to 15 specialized laboratories focusing on Quantum Computing, Biotechnology, and Advanced Robotics.</p>
</div>
</div>
{/*  Small Feature: Library  */}
<div className="relative rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern multi-level university library with tall wooden shelves and comfortable study pods for students" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHq9Q6oKLuoHTMyJzFVdQjXHeL53tZyx2Wy7L2YXViayrtktsPapy8dvhhhw34MKRbACAKSngCzn9O-78NeBDbZJQUChKEP3NklXV9MZL-BRVHJDYeytlsJ10OS-VvVPYICtc8II9r_mveh2ntPT90Gt7GrhgM1jMCHftnx_-hY8D008qRKZpy_2DB0sLunr_WpfvrGPwf76CSuIxBZawYiIKKyvGfLbtx-vsSHTrwYYDmiN2US1XZrtkeAP8tO5yJ3ENErm7wdUs"/>
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<h3 className="font-headline text-xl text-white">Central Archive</h3>
</div>
</div>
{/*  Small Feature: Research Center  */}
<div className="bg-primary p-8 rounded-xl flex flex-col justify-between">
<span className="material-symbols-outlined text-primary-fixed text-4xl" data-icon="biotech">biotech</span>
<div>
<h3 className="font-headline text-xl text-white mb-2">AI Innovation Center</h3>
<p className="text-on-primary-container text-xs">Pioneering research in neural networks and ethical machine learning.</p>
</div>
<a className="text-primary-fixed text-sm font-bold flex items-center gap-2 group underline-offset-4 hover:underline" href="#">
                            Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  Student Life: Recreational Areas  */}
<section className="mb-24 py-24 bg-surface-container-low -mx-6 md:-mx-12 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="font-label text-primary uppercase tracking-[0.2em] text-xs">Beyond the Classroom</span>
<h2 className="font-headline text-4xl mt-2">Campus Lifestyle &amp; Recreation</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<h4 className="font-headline text-xl mb-2">Olympia Sports Arena</h4>
<p className="text-on-surface-variant text-sm">State-of-the-art gym, Olympic-sized swimming pool, and professional tennis courts for all students.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
</div>
<div>
<h4 className="font-headline text-xl mb-2">Global Commons Dining</h4>
<p className="text-on-surface-variant text-sm">A multi-cuisine culinary hub serving fresh, organic meals sourced from local university-supported farms.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
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
<img className="w-full h-full object-cover" data-alt="Aerial shot of a vibrant college campus courtyard with students walking and sitting on benches under green trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47--y_HT52v5q2Mb9dUDlj0eP4rxWgOvtKtspNPfl5DvWSnuDS_nqXQnaBBSqH9t1kyfOLg9pCoVRKp_it0eWQUSB6HRwOTXeD0OB0P_2LitiTjCl4RIpCT-biWeF650VveuIYV8ilZVxeayaVxFaCSdM0JjRq9-M9U99acNAGPMDxOLlNa8OENfHGTUtWe68be7Co0_o00LbwwniBG84GQSmt3Vc7A75Q632mr_gvn_7zZVEuCWJx12qpBDVF0aJfq6lzfkn7iM"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-xl shadow-lg max-w-[200px]">
<span className="font-headline text-4xl block mb-1">24/7</span>
<span className="text-xs uppercase tracking-widest opacity-80">Security &amp; Access</span>
</div>
</div>
</div>
</div>
</section>
{/*  Map Section  */}
<section className="mb-24">
<div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
<div className="p-12 md:w-1/3 flex flex-col justify-center">
<h2 className="font-headline text-3xl mb-4">Visit Us</h2>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Schedule a guided tour to experience the vibrant atmosphere of B.M. Sreenivasiah UNIVERSITY. Walk through our historic gates and envision your future.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<span className="text-sm font-medium">B.M. Sreenivasiah UNIVERSITY Main Campus, Academic District</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="call">call</span>
<span className="text-sm font-medium">+91 (800) 123-4567</span>
</div>
</div>
<button className="mt-8 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-bold">Book a Tour</button>
</div>
<div className="md:w-2/3 h-96 md:h-auto min-h-[400px] relative">
<img className="w-full h-full object-cover" data-alt="A stylized overhead map of a large academic campus with clear building labels and pathways" data-location="New Delhi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-_tE8C9F5i0wXrCf8EC7f1m1v7skFq7NRA73YFyceBjv4tOL5_c3vLE8y0pehjfdOB_f1Bsj3kJx9Glg-21mKRGJbf30fWY1PinR9dKZ04gRUIYeAANRPQYCQpt0Zi2jrtsAM93LFYgzHTEVy0q3bGR4xzXeotiVCuPdAoVIPRQGVVRkOCnK17-pSW7jZP8OjooYiftjtcwkS3Oimdw6iYJgq95Fkyy6Nw9MB6n6UEXXxbxNm-dNQbe-NZ6RBzO98EC-atV1wReI"/>
</div>
</div>
</section>
{/*  Footer  */}
</main>
</div>
{/*  Mobile Bottom Nav (Filter Rule: Top-level destination)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-slate-100 z-50 flex justify-around py-3 px-2">
<a className="flex flex-col items-center gap-1 text-slate-400" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-bold">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-400" href="#">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="text-[10px] font-bold">Academics</span>
</a>
<a className="flex flex-col items-center gap-1 text-blue-900" href="#">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="text-[10px] font-bold">Campus</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-400" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="text-[10px] font-bold">Profile</span>
</a>
</nav>

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </>
  );
}










