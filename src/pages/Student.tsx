import { useEffect } from "react";

export default function Student() {
  useEffect(() => {
    document.title = "Student Hub | B.M. Sreenivasiah UNIVERSITY";
    document.body.className = "bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container";
    document.documentElement.className = "light";
  }, []);

  return (
    <>

{/*  Top Navigation Bar  */}
<main className="pt-20">
{/*  Hero Section  */}
<section className="relative h-[870px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Cinematic university campus scene" className="w-full h-full object-cover" data-alt="cinematic wide shot of university students walking across a grand sun-drenched historic campus courtyard with lush greenery and modern glass architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3fUJYqmIpL5VS5oL_dPrqP6uu_Udc76qREGCj9XspdSOrP7P8TZJqfdEL8RGXOipoXYSY1f-GTyFjQFLiNEnRrHL1wuTYGUQyHP8fwkBgysZvd6CoHKj9_h7QOdZNLw5IPYx2-u5G8QbphlVu9qKQwnOGr3-oBlpIYZJHlX6e-tRBK4xr1voS9hhzJVJdWgHKueyYY9ZUCMYih3QSKQBSdFg5lH9XBOsUC8ajDujnqlG7dbcnrL26pOLpUxAtm6uD9UXb3jqAItE"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className="inline-block label-md text-on-primary-container bg-primary-container px-3 py-1 rounded-sm mb-6 uppercase tracking-[0.2em] text-xs font-bold">The Student Hub</span>
<h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight tracking-tight">The Student Hub</h1>
<p className="text-xl md:text-2xl font-body text-on-primary-container font-light leading-relaxed mb-10">
                        Your Life Beyond the Lecture. Explore the pulse of B.M. Sreenivasiah UNIVERSITY where community, creativity, and ambition converge.
                    </p>
<div className="flex gap-4">
<button className="bg-on-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-fixed transition-all shadow-lg">Explore Campus Life</button>
<button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all">Join a Club</button>
</div>
</div>
</div>
</section>
{/*  Quick Links (Secondary but Clean)  */}
<section className="bg-surface-container-low py-12">
<div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<a className="flex items-center gap-2 font-semibold text-primary" href="#"><span className="material-symbols-outlined">school</span> Learning Management</a>
<a className="flex items-center gap-2 font-semibold text-primary" href="#"><span className="material-symbols-outlined">library_books</span> Digital Library</a>
<a className="flex items-center gap-2 font-semibold text-primary" href="#"><span className="material-symbols-outlined">event_note</span> Exam Schedule</a>
<a className="flex items-center gap-2 font-semibold text-primary" href="#"><span className="material-symbols-outlined">payments</span> Financial Portal</a>
<a className="flex items-center gap-2 font-semibold text-primary" href="#"><span className="material-symbols-outlined">mail</span> Student Webmail</a>
</div>
</section>
{/*  Student Organizations  */}
<section className="py-24 max-w-7xl mx-auto px-8">
<div className="mb-16">
<span className="label-md text-primary/60 uppercase tracking-[0.1em] text-xs font-bold block mb-2">Engagement</span>
<h2 className="text-4xl font-serif text-primary">Student Organizations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Org 1  */}
<div className="group bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-outline-variant/10">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6 block">account_balance</span>
<h3 className="text-2xl font-serif mb-4 text-primary">Student Government</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Advocate for change, lead initiatives, and represent the student body in university governance.</p>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            Learn more <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="absolute -right-8 -bottom-8 opacity-[0.03] scale-150 text-9xl group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined text-[120px]">account_balance</span>
</div>
</div>
{/*  Org 2  */}
<div className="group bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-outline-variant/10">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6 block">biotech</span>
<h3 className="text-2xl font-serif mb-4 text-primary">Academic Clubs</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Deepen your knowledge with 40+ discipline-focused groups from robotics to philosophical debate.</p>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            View Directory <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="absolute -right-8 -bottom-8 opacity-[0.03] scale-150 text-9xl group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined text-[120px]">biotech</span>
</div>
</div>
{/*  Org 3  */}
<div className="group bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-outline-variant/10">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6 block">diversity_3</span>
<h3 className="text-2xl font-serif mb-4 text-primary">Special Interest Groups</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Find your tribe in hobbyist circles, cultural associations, and social impact collectives.</p>
<a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            Join Community <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="absolute -right-8 -bottom-8 opacity-[0.03] scale-150 text-9xl group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined text-[120px]">diversity_3</span>
</div>
</div>
</div>
</section>
{/*  Campus Events (Bento Style)  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-8">
<div className="flex justify-between items-end mb-16">
<div>
<span className="label-md text-primary/60 uppercase tracking-[0.1em] text-xs font-bold block mb-2">Calendar</span>
<h2 className="text-4xl font-serif text-primary">Upcoming Experiences</h2>
</div>
<button className="text-primary font-bold underline underline-offset-8 decoration-2 hover:text-on-primary-container transition-colors">View All Events</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group rounded-xl overflow-hidden shadow-lg">
<img alt="Cultural Festival" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="vibrant outdoor university cultural festival at night with colorful lights, diverse students dancing, and food stalls in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDMyZIK14VIMf9mQxXG8gtJtZRAvHbxqpLQk5KGxAuN87rI4QUXiSdC-D19IhOVXPe91fuZseBp14_h75SMBNxCZLLuKfUarX4AvQbW8m6fjWKUB14i8MvQHdVbS4dgR6kEgYx43-ZJgmmPEC5cQjnclLDgZ4CMpe7T_yShDXPunY36V4_5Doepu0oZ45rl5zCxRPUY20GCticqk6LM3Z_rhly8vhTrTIGbQHe_mN8wM99H4eU3_X9ZaJjKHT9hSRGq2Xg3GarjQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 p-8">
<span className="bg-on-tertiary-container text-white text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block uppercase tracking-wider">Major Event</span>
<h3 className="text-3xl font-serif text-white mb-2">Spring Cultural Festival</h3>
<p className="text-white/80 font-body">April 12-15 • Main Campus Lawn</p>
</div>
</div>
<div className="md:col-span-2 relative group rounded-xl overflow-hidden shadow-lg">
<img alt="Hackathon" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="focused university students working on laptops in a high-tech modern laboratory setting with neon accent lighting for a hackathon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSk9bA_1PF1Wl3jnpbE8pBxa8o9XzKmAKlI_TLLRxCjvUGsMl9IcCnAEo4MqiImLeqt9p_MRmL7qtovlJR5ZMA0nrg6rz1lZ5Of85oB8L4ZD6xev5ZGN2uHr3Qo5ZZMvl6HB6WL_2zmV4F1PbBXLLG9bZlHFk-F5tbeCk68SH36YVY9kl1fLUdgrlGmwW7jBBKaNKq6EHnge0yrwekyB4icqGOTP00XcyTIV5Tu4RPYZaFhawXR4pv48HMV-vSxfdGdUJh46Df9rA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="text-xl font-serif text-white mb-1">Innovation Hackathon</h3>
<p className="text-white/80 text-sm font-body">March 28 • STEM Building</p>
</div>
</div>
<div className="md:col-span-1 relative group rounded-xl overflow-hidden shadow-lg">
<img alt="Guest Speaker" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="professional speaker on a stage with a large screen in background addressing an audience of university students in a large auditorium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJyYrZiXOS2UJk-kBJ6EnLVqO_TtCyVR4b6-aGjEG5eG31mfd_Gm2NcEQQ9wlWwi9gbmozzWyADHfO87LfVKqqSGqvWyD4ocXTBZB0zxwMX9zXu7Qn44fSa_nil7wdaxAiz-kqdAnOLV_XzQK7QHAoP5R5FL0_S3yzoZt7YQ5_AHs9XyuIpcVI0ta3W_xaporLiRtH2KPLU9J2f9724S4jXbgaHLNGdT0lqsFMTBTU9eqRxcyMqWBmCTx4__woDDXFE7ctglcXtfo"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="text-lg font-serif text-white">Guest Speaker Series</h3>
<p className="text-white/80 text-sm font-body">Next: April 02</p>
</div>
</div>
<div className="md:col-span-1 relative group rounded-xl overflow-hidden shadow-lg bg-primary-container flex flex-col justify-center items-center text-center p-6 border-2 border-dashed border-on-primary-container/30">
<span className="material-symbols-outlined text-on-primary-container text-4xl mb-4">add_circle</span>
<h3 className="text-white font-serif">Propose an Event</h3>
<p className="text-on-primary-container text-sm mt-2">Bring your vision to the student community.</p>
</div>
</div>
</div>
</section>
{/*  Wellness & Life  */}
<section className="py-24">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="pt-12">
<img alt="Yoga Session" className="w-full aspect-[3/4] object-cover rounded-full mb-4 shadow-xl" data-alt="diverse group of students practicing mindfulness and yoga in a serene sun-lit campus park setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYLwTcDYw6ItGhT5frkFvAG6EDq1cFG7D-YYK0s3ewwb1SONcb30NiVI8JuJgnoD9jsvHs3FA3X_BUgB4u6OR9ko5WhjaVm52kj3UclGdy5Rp7jYmi-MzMby0BVq4pMjV3nyVzegm_wQjfCT5iIw1JZCPj_Fl0ZCzGxg_Nqbq12P5x6Hk1cu2AZ47t2hZDPphtmGjmynKuY9EBs2vxzZ-clmZetTF5WvljwdwyD-Ce_9Csiw1p4T8L-SPDPssnfb96NmkW4rPMBv0"/>
<img alt="Gym" className="w-full aspect-square object-cover rounded-full shadow-lg" data-alt="modern campus fitness center with state of the art equipment and students exercising in a bright airy space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJcaxy7Md93jn5e97fUa2K-om84PlldzotBLxamzK7BhaoZ-w6XsuPHd3vkQAqMpM_Ewz8TgDC8rLgOYrW06_AnuWZnn1EaC4qmgCYWKSd4agmlCepdO55O6ccZ1fdKZqkz_-sIuGKbW2ENEzUcMJC68Imyr96Evd74kp-KFgnUp1DDOb7CAac99yH2TOUW34qqipm-bKB2U_XU1ma7uecJrCiXMw0ViyLF0SxPQ2rCHqqJBkiTcn2-ksy7bxKCsY-Dki-TdzCIvk"/>
</div>
<div>
<img alt="Dining" className="w-full aspect-square object-cover rounded-full mb-4 shadow-lg" data-alt="university dining hall with communal tables and students eating healthy gourmet meals together in a modern open space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9EhpWvD1cmomyX2hnJEtTIkLAQWzS-YqCgyHqd30svEsZPOZucSFFrgt1eH1_QrIz-eIYANLPbaBPQZnGG1b4TWT_-lGUqrnW1lxTeMY4LVrXw8k4xV6j7BrYMXqR7Ony9hNVatELxiScCi5e61WGVv5qMlvUKfc2TbofZxB397WaOahsG1Wd9ihKK-LNJ5YGlMRU7aD-9epJXvmfw1zOed9erQwuzZGjTPc4u70g74DORH94rxbpFfEURGkFgRJGvRV358mpLC8"/>
<img alt="Global Commons" className="w-full aspect-[3/4] object-cover rounded-full shadow-xl" data-alt="students from different backgrounds laughing and chatting in a stylish campus lounge with global flag decorations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwpP0TbetHU59VP9CbvkBIBLFkDbPzv7UXgx4zuOYWpbtiCJffGisnXxYRK-6M-XvZZQTg-MtuzP2fiJXBDWYeiVK3G8r-vbXc5jGa-lpZK_adn0LcFq1BwI_03VrdgeOycxBPVXwpxUTF8Cquaw7T3nznuCf9GrxJMBVdrfwN2oGS6pT-bU6_t-7DZkiktEfdF4bR-7v8fNoK_ycWuG4bgygc8w4zlFzbgKYVr2iBmA1SSIPRcMrgrPOM0dPitpMM9nKf0MCUSBk"/>
</div>
</div>
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary-container/20 rounded-full blur-3xl"></div>
</div>
<div>
<span className="label-md text-primary/60 uppercase tracking-[0.1em] text-xs font-bold block mb-2">Holistic Growth</span>
<h2 className="text-5xl font-serif text-primary mb-8 leading-tight">Wellness &amp; Life at B.M. Sreenivasiah UNIVERSITY</h2>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                        We believe that academic excellence is fueled by a balanced lifestyle. From state-of-the-art recreation centers to mindful quiet spaces, your well-being is our priority.
                    </p>
<div className="space-y-6">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary">spa</span>
</div>
<div>
<h4 className="font-bold text-lg text-primary">Mind-Body Wellness</h4>
<p className="text-on-surface-variant">24/7 counseling, guided meditation, and holistic health workshops.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary">restaurant</span>
</div>
<div>
<h4 className="font-bold text-lg text-primary">The Global Commons</h4>
<p className="text-on-surface-variant">A world-class culinary experience featuring cuisines from every continent.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary">fitness_center</span>
</div>
<div>
<h4 className="font-bold text-lg text-primary">Elite Recreation</h4>
<p className="text-on-surface-variant">Olympic-sized pool, rock climbing, and professional-grade sports courts.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Student Voice  */}
<section className="bg-primary text-white py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7">
<span className="material-symbols-outlined text-7xl text-on-primary-container mb-8">format_quote</span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                            "Coming to B.M. Sreenivasiah UNIVERSITY, I expected a great education. What I found was a family of innovators who pushed me to lead beyond the classroom."
                        </h2>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-on-primary-container">
<img alt="Student Avatar" className="w-full h-full object-cover" data-alt="portrait of a smiling confident female student with braided hair in a smart casual outfit on a university campus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXmtggLC-tJcxH3C1ocohl_3rJVzEuMak7144Qq_ubyvb2i4KJzEth3hIOzvY0hHlIv8_1421tiUiR7wqDELSYLyUL88z7Qcwv0z8IMuF0kWz1lTxpRzClji00W2xsvenZpP8Lcg4UD9meCRzA8rqqRStUmbaa-2tDDUtYWUnvR0Iyai7GR7q8BrEVXd53MKQg3tX6HKLyVRjwsbs_4UVoVYSRfnleDQQKswMGYqrFuZA8-nuElPSDAAZcnSOwBSfG9Y7MNTHRzZM"/>
</div>
<div>
<p className="font-bold text-xl">Ananya Sharma</p>
<p className="text-on-primary-container">B.Tech Artificial Intelligence, Class of 2025</p>
</div>
</div>
</div>
<div className="lg:col-span-5 hidden lg:block">
<div className="relative">
<img alt="Students Collaborating" className="rounded-xl shadow-2xl rotate-2" data-alt="group of three diverse university students laughing and studying together with textbooks and coffee in a modern campus lounge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwdpiTPiSfLw156bPOQAWEl3EOtGxB20auy2i1cs1SBmI5nDFEH3o80gkgbMsGjwIqFXSTBQwragUwFAw-9YlLbRUL6hTB8-wS8C-2yvSXZSXjD_pJaiDLdK-M3qWFigMI7MEmdUjH2YDR46o84qozRfVzb0Vsdyw9fujKHIEntKzldztfriMH-SXbOhSp2OdhcavMvGzj2q8uJH7xUb8j0N6HMOJcwvIF4UhvRtt083rW2VIL1jHtFvLrNgin_1ephd73bTtR0KY"/>
<div className="absolute -top-6 -right-6 bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-lg shadow-lg -rotate-3">
<p className="text-3xl font-serif font-bold">150+</p>
<p className="text-xs font-bold uppercase tracking-widest">Active Communities</p>
</div>
</div>
</div>
</div>
</div>
{/*  Background Decorative Elements  */}
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
</section>
</main>
{/*  Footer  */}

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Noto Serif', serif; }
        .glass-nav { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }`}</style>
    </>
  );
}



