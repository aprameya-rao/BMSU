import { useEffect } from "react";

export default function Admissions() {
  useEffect(() => {
    document.title = "Admissions | B.M. Sreenivasiah UNIVERSITY";
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary";
    document.documentElement.className = "scroll-smooth";
  }, []);

  return (
    <>

<main>
{/*  Hero Section  */}
<section className="relative pt-24 pb-32 px-8 overflow-hidden">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 space-y-8">
<span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase bg-surface-container-high px-3 py-1 rounded">Future Scholars</span>
<h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight tracking-tight">
                        Your Journey to <br/>Global Excellence <br/>Starts Here.
                    </h1>
<p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                        Join a community of innovators, researchers, and leaders. B.M. Sreenivasiah UNIVERSITY offers a curated educational experience designed to empower your professional trajectory.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold shadow-sm hover:shadow-lg transition-all flex items-center gap-2">
                            Start Your Application <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-all">
                            View Prospectus
                        </button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative z-10">
<img className="w-full h-full object-cover" data-alt="high-angle shot of sunlight filtering through large glass windows of a modern university library with students studying quietly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMcwEf1C01cWY8JhAkRL64iyRHN2wt0JZTXXVm133vtAxUWETNm-rVCl814vJYFNwsq5RCMHKC4LkodZO-rFxBwdEqbNw2oXccuqo3nbhACsAxyc-0zb6-k3MEZ-xHsMBkKA24HB3HzsM1-B6tQrBmtzJitDN1AD0WIY5SnqHCRvG7w4GLrYXmFCAJjgYWPtVj7m8hoY5GBxWLIh6eHhohV6smiNpJTe7fbs3vjpIrtMrHMyuIC5OKtwZzHZNgt1Ccm3eHBQcHcS4"/>
</div>
{/*  Decorative Element  */}
<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-fixed rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
</div>
</div>
</section>
{/*  Application Timeline  */}
<section className="bg-surface-container-low py-24 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="space-y-4">
<span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase">The Process</span>
<h2 className="font-headline text-4xl font-bold text-primary">Simple Steps to Enroll</h2>
</div>
<p className="text-on-surface-variant max-w-md md:text-right">
                        Our admissions process is designed for clarity and support at every stage of your application.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
{/*  Step 01  */}
<div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:translate-y-[-8px]">
<div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 transition-colors group-hover:text-primary-container/20">01</div>
<h3 className="font-bold text-xl mb-4 text-primary">Select Your Program</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Explore our diverse range of undergraduate and postgraduate courses across multiple disciplines.
                        </p>
</div>
{/*  Step 02  */}
<div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:translate-y-[-8px]">
<div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 transition-colors group-hover:text-primary-container/20">02</div>
<h3 className="font-bold text-xl mb-4 text-primary">Document Submission</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Upload your transcripts, statement of purpose, and letters of recommendation through our secure portal.
                        </p>
</div>
{/*  Step 03  */}
<div className="group bg-surface-container-lowest p-10 rounded-xl transition-all hover:translate-y-[-8px]">
<div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 transition-colors group-hover:text-primary-container/20">03</div>
<h3 className="font-bold text-xl mb-4 text-primary">Interview &amp; Offer</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Connect with our faculty for a personal interview and receive your official offer letter.
                        </p>
</div>
</div>
{/*  Process Image Anchor  */}
<div className="mt-20 rounded-2xl overflow-hidden h-[400px] shadow-sm">
<img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="group of diverse university students smiling and walking across a green sunlit campus plaza with brick buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADtiqBl9p3DNfS58p7t3BfLdkJcWP0DvhhgEUikTaiKgmfVpheYK5YiApgjnUS2HQeYohTU30cO76MI_HEr22Y1UJKvFWwGSReGyTBY8POY1WcBs9dfnY293z2d2_-DitZhO0AvpQsEQhiyK0BQiJDeWOrW8dS-0dH_Pct_Jaxwgoda_6zyTmuKOAV8r_GJkfKBE7pIc_Yo0sMDO-4SZoH_nYWrGIEykv24Of1dQTo_otBgHL5CVMhOyY2dIBXoUyym1kpSt-yTV4"/>
</div>
</div>
</section>
{/*  Support Systems (Bento Grid Style)  */}
<section className="py-24 px-8 bg-surface">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl font-bold text-primary mb-4">Supporting Your Ambition</h2>
<p className="text-on-surface-variant">Financial resources and global support for every student.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/*  Scholarships  */}
<div className="md:col-span-8 bg-primary-container text-on-primary rounded-xl p-12 flex flex-col justify-between group overflow-hidden relative">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl mb-6 text-primary-fixed">military_tech</span>
<h3 className="font-headline text-3xl font-bold mb-4">Merit-Based Scholarships</h3>
<p className="text-on-primary-container max-w-md text-lg leading-relaxed">
                                We reward excellence. High-achieving students are eligible for up to 80% tuition waivers based on previous academic performance.
                            </p>
</div>
<div className="relative z-10 pt-8">
<a className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all" href="#">
                                Explore Scholarship Tiers <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
<div className="absolute right-[-10%] bottom-[-10%] w-2/3 h-2/3 opacity-20 group-hover:scale-110 transition-transform duration-700">
<img className="w-full h-full object-cover rounded-full" data-alt="close up of a pen resting on a scholarly document with warm soft lighting and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Oy01PyEjiBam5HHAi906rfCyT_euTrh5VON-rrSVmVmMTk_AOzAPcNhKqNVONUwUo-eYCYsUr4INnzm3Fp7tySO2LgF1ezfJXVDuhjDEKly4qhfUTZtv2k6GlwRuoqUeqdTeRCKAclvEqrcWkMw-KJzaJxVz8BHKYETo2jPhmkVT8epekBaRqbXqvD6e3xl7B4gyX6VG-pNeVBUgje5E9Bl_CKqec3zVSCnRgHpoomQply3HNhJfR-XHZPZuxgPY5lS8cY7Vb-4"/>
</div>
</div>
{/*  Financial Aid  */}
<div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-6 text-primary">account_balance_wallet</span>
<h3 className="font-bold text-2xl mb-4 text-primary">Financial Aid</h3>
<p className="text-on-surface-variant leading-relaxed">
                                Tailored financial planning and grant options to ensure your education remains accessible.
                            </p>
</div>
<button className="w-full py-4 text-primary font-bold border-b-2 border-primary/10 hover:border-primary transition-all text-left flex justify-between items-center">
                            Calculate Aid <span className="material-symbols-outlined">calculate</span>
</button>
</div>
{/*  International Support  */}
<div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between border border-outline-variant/20 shadow-sm">
<div>
<span className="material-symbols-outlined text-4xl mb-6 text-primary">public</span>
<h3 className="font-bold text-2xl mb-4 text-primary">International Support</h3>
<p className="text-on-surface-variant leading-relaxed">
                                Visa assistance, cultural orientation, and dedicated housing support for our global student body.
                            </p>
</div>
<a className="text-primary font-bold inline-flex items-center gap-2 mt-6" href="#">
                            Global Admissions Office <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
{/*  Important Dates (Small Card)  */}
<div className="md:col-span-7 bg-tertiary text-on-tertiary rounded-xl p-10 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="bg-tertiary-container p-4 rounded-xl">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl">event_upcoming</span>
</div>
<div>
<h3 className="font-bold text-xl mb-1">Fall Intake 2024</h3>
<p className="text-on-tertiary/70">Application deadline: August 15th</p>
</div>
</div>
<button className="bg-on-tertiary text-tertiary px-6 py-3 rounded-lg font-bold text-sm">Check Dates</button>
</div>
</div>
</div>
</section>
{/*  Newsletter / CTA  */}
<section className="py-24 px-8">
<div className="max-w-screen-xl mx-auto bg-surface-container-lowest rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>
<h2 className="font-headline text-4xl md:text-5xl font-bold text-primary relative z-10">Stay Informed.</h2>
<p className="text-on-surface-variant max-w-xl mx-auto relative z-10 text-lg">
                    Receive the latest updates on admissions workshops, campus tours, and early application deadlines directly in your inbox.
                </p>
<form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative z-10">
<input className="flex-grow px-6 py-4 rounded-lg bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Enter your email address" type="email"/>
<button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all">Subscribe</button>
</form>
</div>
</section>
</main>
{/*  Footer  */}
<style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-nav {
            background: rgba(247, 249, 251, 0.7);
            backdrop-filter: blur(20px);
        }`}</style>
    </>
  );
}










