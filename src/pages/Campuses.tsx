import { useEffect } from "react";

export default function Campuses() {
  useEffect(() => {
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "";
  }, []);

  return (
    <>

{/*  TopNavBar  */}

{/*  Hero Section  */}
{/*  Main Content Section: Grid Layout  */}
<section className="campuses-page px-8 pb-32 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
{/*  Item 1  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS College of Engineering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern red brick university building with classical clock tower at sunset, prestigious academic atmosphere with clean landscaping" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNSi-_u16Yob42aX9VYYrQIce_p6Twk2YgA5MSmJBVUIyT0SXT5L0_q99T2HpqQB23R6yYOcPDxZtcxd40L9McLB-ew73Po41HcoXHYfjAdZYk26U0C6gsBZSS-_eUmt2eYrv6ZFB2MwxPWaisJ2y36KCOH5ZPwRzso25fXKdLMmEMvCQy0Z5vw3NbK0pMGZ4s7khwodEzkMvOEvZCC8qGFKQwg-J5deaV7rR3ryhaNRelg1Q7mhb9gXTkusa4FqXOcgSdYCp474"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS College of Engineering (BMSCE)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">The first private sector initiative in engineering education in India, fostering innovation and technical excellence since 1946.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 2  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS College of Law" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Stately neoclassical law school building with large stone columns and manicured lawns under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Wk67y02rz9VZLiNEftiQB2kyV8eNSnRuABTnlsi0R-bqmBqV0IUiSO8iEe3kUlsKqAnF2rsz1e5gUMXt-VhgTZ7vB2uoMaRgrgCo2iE_cH3yNWwsOpw7UF_4yqzyAgSywfTLwEd602VH4ETsSN4_9QTdJ_LiA-3TUveEy4YmxFISgROwBVsIZNPxckBOEzaX40Dl2lZSWvJlGRDmU9l4d7GVUFQFLkiPAN2DawVAUI9Yv9D2EfOI6mGxJ9uJTI3RIfLAjJAxhEI"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS College of Law (BMSCL)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Providing premier legal education through a blend of traditional values and modern legal practices for over 50 years.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 3  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS P U College for Women" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Contemporary college campus building with large glass windows reflecting trees, vibrant academic garden setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvOoPQL0qmcaVSlvr6Vq3gzM1bD_nJlcm0nuUvE0feNm3z7CiJYZoC7HZtZyb4PmPGYUindKfzQu8x0KtKMikcNgVd0Old-SutZLGavG0FaV3zScrMbbroAJNF0vPcsDyJKs9u3GLvI6kk6AgkpUgjfS5a3be7SVa3fBLgSie6kV8LVh6du_Zjmlg7shgEamEsPdCgp3LVLfGiPBseiNf6qzMQ4oUTEMHqPVAkgU0-0QgHX42eAJoO9R2wWwjxwgizjrp2D8F83U"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS P U College for Women (BMSPUCW)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Dedicated to empowering young women through a holistic pre-university curriculum and supportive learning environment.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 4  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS College for Women" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Elegant ivory stone university courtyard with arched walkways and lush central garden in soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFfmLtOFwedJTywgX2qb6W2gCvYGPQE4gYoqNkIL_rFTdDYWbeo5x16st70xKDN2ip8FxwA7nn0EsJFyOZWAcvwSTXVJKa9_2ctpxH14R_tVQbSKHpCkezQO7x5j5V8KDe9zIlTpx-WnwAj91fUB5rLkI2DHRKI_2Mkczupgc3wiaIEP4-u3OyNx6TQMFZmJsDFWcfVWiiL6yi94ASjIeRPjr1XrqmDl0Bcu--kfDIZ18jLZxePhnKNlt8V8uVwpvVJg3ZKqVqul8"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS College for Women (BMSCW)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">A pioneer in women's higher education, offering diverse undergraduate programs with a focus on leadership.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 5  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS Institute of Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Sleek glass and steel technological research facility with solar panels and high-tech minimalist exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq0w_4XNq1oCFvYs0kgYfGEafpPuWGH2-tza8JrsiXuNOKOQKFhEgl1xv6Xcb-ux6nLVN2bXVfuQVZqJuFwa1mJSDQhD6WhrTv2gct2gw3LF5I2i_GjszYTwsz4MpztF3UiTvvOuRR6OFic2UPo9-Xz28kDSd4ICpMluNP46fcqKeK7gzvaKff8X832Rl8YfGBF1b-bAjVJYwKLWYqtRgUvz-w6N09Zg9CK5FkXQ8F1M5cQTRcCFkGRa5eaQgGJn2EYm8PMVYVkeY"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS Institute of Technology (BMSIT)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">A premier research-led institute focused on emerging technologies and interdisciplinary engineering solutions.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 6  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS School of Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Architecturally striking concrete building with dramatic geometric shapes and light play on textured surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD31lPhtGzHQQQyzAk2eX2OuuiGdYA_tND1cc9TcptLS2ch8fePZDK8h6T_vZbW1CFTIG3qCsukpQ98UJBWN2aEj8tzOxwgdo0uuHDdWsSLExBgWaqcxojQqOjMgoAdzRL41qIzDbs7AplOZpRJwdPorikNuJNCPqTRmAwZp3k1yxX9SNBAM5uv-KxIixtJn0tH2G-6INvN3cQlMsqjABgifbAJ4sWTfm_oSfzQm4QvvlsI_Hk47rcaechoPNzKhGWdayYaTSjlqRQ"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS School of Architecture (BMSSA)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Cultivating creative visionaries through a studio-centric approach to sustainable design and urban planning.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 7  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS Evening College of Arts and Commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Warmly lit university building at twilight with glowing windows and silhouettes of students in the library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzlbr9zTWXb4P_nVRvhPrO7fpT-U5DdMRUWNJvaAaWNnKMAn4u7iySVoXUG7cXHfLFWFkFOwpbErFbaxP3jykET_VycXhs36D23qvK8olHnuNsCCilbUu6Kw8AZZzOS7Hd0Ap3PHLGu5JmMfSvYbtpE9bZzMUQNUP4S2YLI8Xl10-ibWCQ-krFZwvS1wUBoF3uwPOBift3RChGJjaj_Z_8BSq77ye7jk5zWr7Zc0H3WvyrKre1txwXyjBUpSFKXwmmGkgPaDK9iqg"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS Evening College (BMSCEAC)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Enabling lifelong learning for working professionals through flexible evening programs in arts and commerce.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 8  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS College of Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist design studio interior with high ceilings, drafting tables, and large windows overlooking a campus park" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE34DC25j5mFFDMLrHIfJqA3eBv3tfSal3TKh1m9IYlu19tQo_UuTSIhMDUiI14Bdsda2xk9P5u4Llg5kQ05-3othHngADpxPzhWv-oFtzdQ_k7E2DUvoqSiJsWLaLlnx3WdjXthYSyfuFMguBVy68KNLK1uGsYi-fwCPZrZEzZWf6oZEPW36FylUsCKXipXlX5AvM--4GOqKSqu0ByU4emmbQ5h_hOY__XZdVrzIaIoxG6sUXkbeJdykU6f33A4uYrGyPyFgN7M0"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS College of Architecture (BMSCA)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Merging technical proficiency with artistic expression to shape the built environment of the future.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 9  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS College of Commerce and Management" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Corporate-style academic building with reflective glass facade and professional stone plaza in bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1ktaX6ueOEGwWY_mhRgiiWcjfyTih7SNZeJdLAET9iMQXYTJUckvN-DxKwbtkO51YdiIZpW_Eb4lzlbGJde4rkzNkyoMNufNEAx-0E2COprxpQJk5WTluhoKwCUJPyyc0vGSubUwxfig30Q9QD1Caa8pij5kqZVtHMdvim3NjHdodvu_IkrPPnG20UlP_uCONT8JkRtXjPWwFbYoc_o1Jl9ivCGYhLWFs0hUo7TCm-mpjtZCnHuNvluI8ow5WpYbZCR9b75ktq8"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS College of Commerce (BMSCCM)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Developing global business leaders through an industry-aligned curriculum and strategic mentorship.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/*  The Final Row: 2 Items Centered  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-4xl mx-auto mt-20">
{/*  Item 10  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="BMS Academy for Professional Courses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Sleek modern training center with glass partitions and contemporary furniture in a bright, professional setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyzY-aKuCvbxsjliUoAui9lIcghawx21r0dGe-ngZY4i9FrRgPUSjECUy2BpP_yE5UWJkfkCH6BbdlhQNbNTIM5NMK2fSATylOqy_XaArk2lTz55WlVW2zr3MgtmJ4roLNyaJOdZeVAijU7EcCe-_88D2ARXnaRPLVdBScYB_abc76usx-TDVzude2JAnN0IHGSeNqYXjwpiY2-1AKJA44bgr8gbJCQeEwDHboB2Z6iWsDVUI1ONi4czeEWvpA2Zp4v6ZHi5rKJ_0"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">BMS Academy for Professional Courses (BMSAPC)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">Bridge the gap between academic theory and industry practice with specialized professional certification programs.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Item 11  */}
<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-8 ring-offset-8 ring-1 ring-outline-variant/20 transition-all duration-500 group-hover:ring-primary/30 group-hover:ring-offset-4">
<img alt="B.M. Sreenivasiah UNIVERSITY" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Grand aerial view of a sprawling university campus with historic brick buildings and modern facilities integrated into greenery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZeNKSBYz-h9I9FuVQeRVGi_RejGCQnZ_qnkhV6CUP5zkQog7RLAb6MCkSksuJwpVD3GmS_Rp6onm34LY_ia7oNEyp_gSI_BF-G7T5jIDmL7vWoVmlOwOEzgeusIpW3LhtEhY7lLb4-M9scBhtOTnFLF8ZTmGStvNd2YQoWmpKo_mrvVAil2MHnk5vECk5YwJudM5XOW6SmWThh9uwQmE5v0Uc6lPkpKtVVgQAY8wAYK6kp9es8tvF5EiedMzFjDj2FUj2LrCCBE"/>
</div>
<h3 className="font-headline text-2xl text-primary mb-3">B.M. Sreenivasiah UNIVERSITY (B.M. Sreenivasiah UNIVERSITY)</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4">The flagship multidisciplinary institution offering advanced post-graduate and doctoral research across diverse domains.</p>
<button className="font-label text-xs uppercase tracking-widest font-bold text-primary group-hover:text-on-primary-container transition-colors flex items-center gap-2">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
{/*  Map Section: Tonal Transition  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-screen-2xl mx-auto px-8 flex flex-col items-center">
<h2 className="font-headline text-4xl text-primary text-center mb-12">Visit Our Main Campus</h2>
<div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
<img className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" data-alt="Stylized map showing a prestigious university campus located in a lush green urban area with nearby landmarks" data-location="Bengaluru, India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfBMESycJZoemqkwQTmyA-jqsPHvSzgmZt7MFzN7FXKHNg1tewPbI96WypukKSJ21q5QV62uPqxdJHXLlKdfWpOktNsAyYMCnYEH52HR1_8ayTr6gpoivhFHcAy4eBmwTja-epWdWzEQzjjIGYe8muOPB9Pfv0REE5p2I1mmUShx-bQKN-nXn2Ld8ey_qm5agyxHYOjN82eEoFuw8hiqhwBqdaPpvqrPsGpG75OOnSmtvgdBx6gR1eeJEPCd3gWZuLyha13H7w3bE"/>
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



