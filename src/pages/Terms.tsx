import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | B.M. Sreenivasiah UNIVERSITY (B.M. Sreenivasiah UNIVERSITY)";
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "light";
  }, []);

  return (
    <>

{/*  TopNavBar  */}
<main className="pt-32 pb-24">
{/*  Hero Header  */}
{/*  Content Section: Editorial Layout  */}
<section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
{/*  Sticky Navigation / Scholar's Drawer Side  */}
<aside className="lg:col-span-3">
<div className="sticky top-32 space-y-6">
<nav className="flex flex-col space-y-4 border-l border-outline-variant/30 pl-6">
<a className="text-primary font-bold transition-all hover:translate-x-1" href="#acceptance">Acceptance of Terms</a>
<a className="text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#conduct">User Conduct</a>
<a className="text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#intellectual">Intellectual Property</a>
<a className="text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#liability">Limitation of Liability</a>
<a className="text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#governance">Governance &amp; Law</a>
</nav>
<div className="p-6 bg-surface-container-low rounded-xl">
<h4 className="font-headline text-lg text-primary mb-2">Need Clarification?</h4>
<p className="text-sm text-on-surface-variant mb-4">For legal inquiries regarding academic policy, contact our Office of General Counsel.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2" href="#">
                            Contact Counsel
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</aside>
{/*  Main Text Column  */}
<div className="lg:col-span-8 lg:col-start-5 space-y-20">
{/*  Section 1  */}
<article className="scroll-mt-32" id="acceptance">
<h2 className="font-headline text-3xl text-primary mb-8">01. Acceptance of Terms</h2>
<div className="space-y-6 text-lg text-on-surface/80 leading-relaxed font-body">
<p>By accessing the digital infrastructure, research repositories, and campus networks of B.M. Sreenivasiah UNIVERSITY (B.M. Sreenivasiah UNIVERSITY), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and the University.</p>
<p>If you are accessing these services on behalf of a research partner, corporate entity, or academic institution, you represent that you have the authority to bind such entity to these terms.</p>
</div>
</article>
{/*  Section 2  */}
<article className="scroll-mt-32" id="conduct">
<h2 className="font-headline text-3xl text-primary mb-8">02. User Conduct &amp; Academic Integrity</h2>
<div className="space-y-6 text-lg text-on-surface/80 leading-relaxed font-body">
<p>B.M. Sreenivasiah UNIVERSITY maintains a standard of excellence. Users are strictly prohibited from:</p>
<ul className="space-y-4">
<li className="flex gap-4">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="check_circle">check_circle</span>
<span>Circumventing academic authentication systems or laboratory access protocols.</span>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="check_circle">check_circle</span>
<span>Engaging in data mining or automated scraping of the University’s proprietary research archives without written consent.</span>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="check_circle">check_circle</span>
<span>Distributing harmful code within the internal B.M. Sreenivasiah UNIVERSITY Neural Network or Campus Intranet.</span>
</li>
</ul>
</div>
</article>
{/*  Visual Break: Featured Quote  */}
<div className="py-12 px-12 bg-primary-container rounded-xl text-on-primary-fixed relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-6xl opacity-20 absolute -top-4 -left-4" data-icon="format_quote">format_quote</span>
<blockquote className="font-headline text-2xl italic leading-snug">
                            "The pursuit of knowledge requires a foundation of mutual respect and structured governance. Our digital terms ensure that the sanctity of research remains inviolable."
                        </blockquote>
<cite className="block mt-6 font-label uppercase tracking-widest text-xs opacity-70">— Office of the Chancellor</cite>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
</div>
{/*  Section 3  */}
<article className="scroll-mt-32" id="intellectual">
<h2 className="font-headline text-3xl text-primary mb-8">03. Intellectual Property Rights</h2>
<div className="space-y-6 text-lg text-on-surface/80 leading-relaxed font-body">
<p>All content hosted on B.M. Sreenivasiah UNIVERSITY platforms, including but not limited to course materials, research datasets, lecture recordings, and software developed within University labs, is the exclusive property of B.M. Sreenivasiah UNIVERSITY or its licensed contributors.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
<div className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
<h3 className="font-headline text-xl text-primary mb-4">University Assets</h3>
<p className="text-sm text-on-surface-variant">Logos, trademarks, and seal are protected under international copyright law. Unauthorized usage for commercial gain is strictly prohibited.</p>
</div>
<div className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
<h3 className="font-headline text-xl text-primary mb-4">Scholar Submissions</h3>
<p className="text-sm text-on-surface-variant">Students retain moral rights to their original works but grant B.M. Sreenivasiah UNIVERSITY a non-exclusive license for institutional archiving and academic display.</p>
</div>
</div>
</div>
</article>
{/*  Section 4  */}
<article className="scroll-mt-32" id="liability">
<h2 className="font-headline text-3xl text-primary mb-8">04. Limitation of Liability</h2>
<div className="space-y-6 text-lg text-on-surface/80 leading-relaxed font-body">
<p>The University provides its digital services on an "as is" and "as available" basis. B.M. Sreenivasiah UNIVERSITY does not warrant that the functions contained in the materials will be uninterrupted or error-free.</p>
<p className="p-6 bg-error-container/30 border-l-4 border-error text-on-error-container rounded-r-lg italic">
                            In no event shall B.M. Sreenivasiah UNIVERSITY be liable for any incidental, indirect, or consequential damages arising out of the use or inability to use the University's digital infrastructure.
                        </p>
</div>
</article>
{/*  CTA Section  */}
<section className="mt-24 pt-24 border-t border-outline-variant/30 text-center">
<h2 className="font-headline text-4xl text-primary mb-6">Commitment to Excellence</h2>
<p className="max-w-2xl mx-auto text-on-surface-variant mb-10">By continuing to use our systems, you uphold the legacy of B.M. Sreenivasiah UNIVERSITY and its mission to foster global innovation through disciplined inquiry.</p>
<div className="flex justify-center gap-4">
<button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label uppercase tracking-widest text-sm hover:shadow-xl transition-all">Download PDF</button>
<button className="bg-surface-container-high text-primary px-10 py-4 rounded-lg font-label uppercase tracking-widest text-sm transition-all hover:bg-surface-container-highest">Print Version</button>
</div>
</section>
</div>
</section>
</main>
{/*  Footer  */}

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-margin {
            margin-left: clamp(1rem, 15vw, 20rem);
        }`}</style>
    </>
  );
}



