import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | B.M. Sreenivasiah UNIVERSITY (B.M. Sreenivasiah UNIVERSITY)";
    document.body.className = "bg-surface text-on-surface";
    document.documentElement.className = "light";
  }, []);

  return (
    <>

{/*  TopNavBar  */}
<main className="pt-32 pb-24">
{/*  Hero Header  */}
{/*  Editorial Content Layout  */}
<section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
{/*  Side Navigation (Scholar's Drawer Style)  */}
<aside className="lg:col-span-3">
<div className="sticky top-32 space-y-2 p-6 bg-surface-container-low rounded-xl backdrop-blur-sm border-l-4 border-primary">
<h4 className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 px-2">On this page</h4>
<a className="block px-2 py-2 text-primary font-bold border-b-2 border-primary w-fit text-sm" href="#collection">Information Collection</a>
<a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#usage">Data Usage</a>
<a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#cookies">Cookies Policy</a>
<a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#security">Data Security</a>
<a className="block px-2 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm" href="#rights">Your Rights</a>
</div>
</aside>
{/*  Main Policy Document  */}
<div className="lg:col-span-8 space-y-24">
{/*  Section 1: Information Collection  */}
<div className="scroll-mt-32" id="collection">
<div className="flex items-center gap-4 mb-6">
<span className="text-4xl font-headline text-outline-variant italic">01.</span>
<h2 className="text-3xl font-headline text-primary">Information Collection</h2>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow prose prose-slate max-w-none">
<p className="text-lg leading-relaxed text-on-surface-variant mb-6">
                            We collect information necessary to facilitate academic excellence and administrative operations. This includes personal identifiers provided during admissions, faculty recruitment, and institutional research.
                        </p>
<div className="grid md:grid-cols-2 gap-8 mt-10">
<div className="p-6 bg-surface-container-low rounded-lg">
<h3 className="font-headline text-xl text-primary mb-3">Direct Disclosures</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Name, contact details, academic transcripts, and professional history submitted through our secure portal.</p>
</div>
<div className="p-6 bg-surface-container-low rounded-lg">
<h3 className="font-headline text-xl text-primary mb-3">Automated Telemetry</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">IP addresses, browser types, and academic portal interaction data to optimize the digital campus experience.</p>
</div>
</div>
</div>
</div>
{/*  Section 2: Data Usage  */}
<div className="scroll-mt-32" id="usage">
<div className="flex items-center gap-4 mb-6">
<span className="text-4xl font-headline text-outline-variant italic">02.</span>
<h2 className="text-3xl font-headline text-primary">Data Usage</h2>
</div>
<div className="space-y-8">
<p className="text-xl font-body text-on-surface-variant leading-relaxed">
                            B.M. Sreenivasiah UNIVERSITY utilizes your data solely to support the university's mission of educational leadership and community service.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-primary p-8 rounded-xl text-on-primary">
<span className="material-symbols-outlined text-4xl mb-4">school</span>
<h4 className="font-headline text-lg mb-2">Academic Record</h4>
<p className="text-sm opacity-80">Maintaining verified credentials and progress tracking for all students.</p>
</div>
<div className="bg-surface-container-high p-8 rounded-xl text-primary">
<span className="material-symbols-outlined text-4xl mb-4">hub</span>
<h4 className="font-headline text-lg mb-2">Campus Services</h4>
<p className="text-sm text-on-surface-variant">Accessing library resources, laboratory bookings, and athletic facilities.</p>
</div>
<div className="bg-surface-container-high p-8 rounded-xl text-primary">
<span className="material-symbols-outlined text-4xl mb-4">campaign</span>
<h4 className="font-headline text-lg mb-2">Communications</h4>
<p className="text-sm text-on-surface-variant">Important institutional updates, emergency alerts, and alumni networking.</p>
</div>
</div>
</div>
</div>
{/*  Section 3: Cookies Policy  */}
<div className="scroll-mt-32" id="cookies">
<div className="flex items-center gap-4 mb-6">
<span className="text-4xl font-headline text-outline-variant italic">03.</span>
<h2 className="text-3xl font-headline text-primary">Cookies Policy</h2>
</div>
<div className="bg-surface-container-lowest border-l-8 border-tertiary-container p-10 rounded-xl editorial-shadow">
<p className="text-lg leading-relaxed text-on-surface-variant mb-6 italic">
                            "Our digital corridors use small data files called cookies to remember your preferences and ensure a seamless transition between research sessions."
                        </p>
<div className="space-y-4">
<div className="flex justify-between items-center py-4 border-b border-outline-variant/20">
<span className="font-semibold text-primary">Strictly Necessary Cookies</span>
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Required</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-outline-variant/20">
<span className="font-semibold text-primary">Performance &amp; Analytics</span>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Optional</span>
</div>
<div className="flex justify-between items-center py-4">
<span className="font-semibold text-primary">Personalization Preferences</span>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Optional</span>
</div>
</div>
</div>
</div>
{/*  Section 4: Data Security  */}
<div className="scroll-mt-32" id="security">
<div className="flex items-center gap-4 mb-6">
<span className="text-4xl font-headline text-outline-variant italic">04.</span>
<h2 className="text-3xl font-headline text-primary">Data Security</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                                We employ military-grade encryption and rigorous access controls. Our infrastructure is audited quarterly to ensure compliance with global data protection regulations (GDPR, CCPA).
                            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="text-sm font-medium">End-to-end encryption for all academic records.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">lock</span>
<span className="text-sm font-medium">Multi-factor authentication required for portal access.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">visibility_off</span>
<span className="text-sm font-medium">Anonymized data for university-wide research statistics.</span>
</li>
</ul>
</div>
<div className="relative h-64 rounded-xl overflow-hidden shadow-2xl">
<img alt="Data Security Visual" className="w-full h-full object-cover" data-alt="abstract close-up of a high-tech computer server with blue and cyan circuit lights in a dark room representing cybersecurity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcf3XKWlREgfwIOIStdjc2UakKdSCw9Xlv4zqZsGuONO6UjU_MtgI-f7sTHufR4LjK94dpF6wBCMQDI2BiB_lvjjEKgN0fELumjFA1G7v7lxtN9xS-x6zaLVpG_yyr5-W_6ImHXwmwIqwGPxmoIh9FrOAPRDJgW9MrqiPxNDidY0AvhLug1rNl10KEo1kEjpDCjgSZPF803-40cOFVhsudu7Y7MB9m0FHekQYakkGrfUHhurGBa-w67MsXp3OOWKv4hD2enq1XRAk"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
</div>
</div>
</div>
{/*  Section 5: Rights  */}
<div className="scroll-mt-32" id="rights">
<div className="flex items-center gap-4 mb-6">
<span className="text-4xl font-headline text-outline-variant italic">05.</span>
<h2 className="text-3xl font-headline text-primary">Your Rights</h2>
</div>
<div className="p-10 rounded-xl bg-surface-container-lowest editorial-shadow">
<p className="text-on-surface-variant leading-relaxed mb-8">
                            As a member of the B.M. Sreenivasiah UNIVERSITY community, you retain the right to access, rectify, or request the deletion of your personal data. To exercise these rights, please contact our Data Protection Office.
                        </p>
<a className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:gap-4 transition-all" href="mailto:privacy@B.M. Sreenivasiah UNIVERSITY.edu">
                            Contact Data Protection Office <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  Signature Editorial Card  */}
<section className="max-w-screen-xl mx-auto px-8 mt-32">
<div className="relative bg-primary-container rounded-xl overflow-hidden p-12 md:p-24 text-center">
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-headline text-on-primary-container mb-6">Trust Through Transparency</h2>
<p className="text-on-primary-container/80 text-lg mb-10">
                        Our commitment to your privacy is as foundational as our commitment to your education. 
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-surface-bright text-primary px-8 py-3 rounded-xl font-bold">Download Full Policy (PDF)</button>
<button className="bg-primary/30 border border-on-primary-container/30 text-on-primary-container px-8 py-3 rounded-xl font-bold backdrop-blur-sm">View Compliance Reports</button>
</div>
</div>
{/*  Decorative element  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -mr-32 -mt-32 opacity-20"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full -ml-48 -mb-48 opacity-10"></div>
</div>
</section>
</main>
{/*  Footer  */}

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .editorial-shadow {
            box-shadow: 0 32px 64px -12px rgba(25, 28, 30, 0.04);
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #f7f9fb;
            color: #191c1e;
        }
        h1, h2, h3, .serif {
            font-family: 'Noto Serif', serif;
        }`}</style>
    </>
  );
}



