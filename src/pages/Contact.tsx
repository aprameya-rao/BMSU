import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | BMS University";
    document.body.className = "bg-surface font-body text-on-surface";
    document.documentElement.className = "light";
  }, []);

  return (
    <>

{/*  Hero Section  */}
<main className="max-w-screen-2xl mx-auto px-8 md:px-12 py-24">
{/*  Main Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
{/*  Contact Form Section  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl">
<h2 className="font-headline text-3xl mb-8 text-primary">Send a Message</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Name</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="email@address.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Subject</label>
<select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all">
<option>Admissions Inquiry</option>
<option>Research Collaboration</option>
<option>General Information</option>
<option>Alumni Relations</option>
<option>Media &amp; Press</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Message</label>
<textarea className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="How can we assist you today?" rows="6"></textarea>
</div>
<button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label uppercase tracking-widest text-sm hover:opacity-90 transition-all flex items-center gap-3" type="submit">
                        Send Message
                        <span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</form>
</div>
{/*  Contact Details Sidebar  */}
<div className="lg:col-span-5 space-y-12">
<div>
<h2 className="font-headline text-3xl mb-8 text-primary">University Registry</h2>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-xl text-on-primary-container">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</div>
<div>
<h3 className="font-bold text-lg mb-1">Main Campus</h3>
<p className="text-on-surface-variant leading-relaxed">
                                    Knowledge Square, Sector 12<br/>
                                    University Heights, Bangalore 560004<br/>
                                    
                                </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-xl text-on-primary-container">
<span className="material-symbols-outlined" data-icon="call">call</span>
</div>
<div>
<h3 className="font-bold text-lg mb-1">General Inquiries</h3>
<p className="text-on-surface-variant">+91 11 2345 6789</p>
<p className="text-on-surface-variant">+91 11 2345 6790</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-xl text-on-primary-container">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<h3 className="font-bold text-lg mb-1">Electronic Correspondence</h3>
<p className="text-on-surface-variant">admissions@bmsuniversity.edu.in</p>
<p className="text-on-surface-variant">registry@bmsuniversity.edu.in</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Departments Grid  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-screen-2xl mx-auto px-8 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<span className="font-label uppercase tracking-[0.2em] text-sm text-on-tertiary-container mb-4 block">Specific Support</span>
<h2 className="font-headline text-4xl text-primary">Departmental Contacts</h2>
</div>
<p className="text-on-surface-variant font-medium md:text-right">Find the direct line to our specialized academic councils.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-8 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group">
<h3 className="font-headline text-xl mb-4">Admissions Office</h3>
<p className="text-sm opacity-80 mb-6">Inquiries regarding enrollment, scholarships, and undergraduate applications.</p>
<a className="inline-flex items-center text-primary group-hover:text-primary-fixed-dim font-bold text-sm" href="#">
                        Connect Now <span className="material-symbols-outlined ml-2 scale-75" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group">
<h3 className="font-headline text-xl mb-4">Research &amp; Grants</h3>
<p className="text-sm opacity-80 mb-6">Partnering for innovation and accessing the university's research archives.</p>
<a className="inline-flex items-center text-primary group-hover:text-primary-fixed-dim font-bold text-sm" href="#">
                        Connect Now <span className="material-symbols-outlined ml-2 scale-75" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group">
<h3 className="font-headline text-xl mb-4">Alumni Relations</h3>
<p className="text-sm opacity-80 mb-6">Stay connected with the BMS University global network and upcoming reunions.</p>
<a className="inline-flex items-center text-primary group-hover:text-primary-fixed-dim font-bold text-sm" href="#">
                        Connect Now <span className="material-symbols-outlined ml-2 scale-75" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group">
<h3 className="font-headline text-xl mb-4">Student Life</h3>
<p className="text-sm opacity-80 mb-6">Support services, housing information, and campus activities.</p>
<a className="inline-flex items-center text-primary group-hover:text-primary-fixed-dim font-bold text-sm" href="#">
                        Connect Now <span className="material-symbols-outlined ml-2 scale-75" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
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




