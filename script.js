'use strict';

/* ─── i18n translations ─────────────────────── */
const TRANSLATIONS = {
  en: {
    nav_home:'Home', nav_about:'About', nav_skills:'Skills',
    nav_projects:'Projects', nav_contact:'Contact', nav_cta:"Let's Talk",
    hero_badge:'About Me',
    hero_sub:'Frontend Developer & UI Designer. Crafting pixel-perfect, immersive web experiences with modern technologies.',
    hero_cta1:'View My Work', hero_cta2:'Get In Touch',
    scroll_hint:'SCROLL DOWN',
    about_tag:'About Me',
    about_heading:'Frontend Developer & UI Enthusiast',
    about_p1:"Hi, I'm Nexa Dev — a passionate frontend developer who loves crafting beautiful, responsive, and high-performance web interfaces. I specialize in turning complex ideas into stunning digital realities.",
    about_p2:'With expertise in React, Next.js, and modern CSS frameworks, I build seamless user experiences that not only look amazing but also perform flawlessly across all devices.',
    stat1:'Projects Done', stat2:'Years Exp.', stat3:'Satisfaction', stat4:'Coffee Consumed',
    badge_open:'Open to Work',
    skills_tag:'Skills', skills_title_hl:'Expertise',
    sk1_title:'React Ecosystem', sk1_desc:'Building dynamic user interfaces with React, Next.js, and modern hooks architecture.',
    sk2_title:'JavaScript & TypeScript', sk2_desc:'Writing clean, type-safe code with modern ES6+ features and TypeScript integration.',
    sk3_title:'Styling & Animation', sk3_desc:'Creating beautiful, responsive designs with Tailwind, SCSS, and smooth animations.',
    sk4_title:'Responsive Design', sk4_desc:'Building mobile-first experiences that work flawlessly across all devices.',
    sk5_title:'UI/UX Design', sk5_desc:'Designing intuitive interfaces in Figma with focus on user experience.',
    sk6_title:'3D & Graphics', sk6_desc:'Adding immersive 3D experiences with Three.js and WebGL technologies.',
    proj_tag:'Projects', proj_title_hl:'Works',
    p1_title:'Reaction Channel WhatsApp', p1_desc:'Auto-reaction bot for WhatsApp channels with custom emoji responses, scheduled reactions, and analytics dashboard.',
    p2_title:'NEXA Lobby Generator', p2_desc:'Free Fire lobby generator with HD image export, custom nickname styling, and MLBB support. Features real-time preview.',
    p3_title:'All Media Downloader', p3_desc:'Universal social media downloader supporting TikTok, Instagram, YouTube, and Twitter. Features HD quality and batch download.',
    p4_title:'NEXA IQC Generator', p4_desc:'iPhone Quote Card generator with customizable templates, font styling, and instant download. Features server health monitoring.',
    contact_tag:'Contact',
    contact_title:'Let\'s Build Something <span>Amazing</span>',
    contact_h2:'Have a project in mind?',
    contact_p:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    ci_email:'Email', ci_loc:'Location', ci_resp:'Response Time', ci_resp_val:'Within 24 hours',
    quick_contact:'Quick Contact', avail_status:'Contact me',
    send_email:'Send Email',
    footer_made:'Made with', footer_coffee:'and lots of coffee', back_top:'Back to Top',
  },
  id: {
    nav_home:'Beranda', nav_about:'Tentang', nav_skills:'Keahlian',
    nav_projects:'Proyek', nav_contact:'Kontak', nav_cta:'Hubungi Saya',
    hero_badge:'Tentang Saya',
    hero_sub:'Frontend Developer & UI Designer. Membangun pengalaman web yang memukau dan responsif dengan teknologi modern.',
    hero_cta1:'Lihat Karya Saya', hero_cta2:'Hubungi Saya',
    scroll_hint:'GULIR KE BAWAH',
    about_tag:'Tentang Saya',
    about_heading:'Frontend Developer & Pecinta UI',
    about_p1:'Halo, saya Nexa Dev — seorang frontend developer yang bersemangat dalam membangun antarmuka web yang indah, responsif, dan berperforma tinggi. Saya mengkhususkan diri dalam mengubah ide kompleks menjadi realitas digital yang memukau.',
    about_p2:'Dengan keahlian di React, Next.js, dan framework CSS modern, saya membangun pengalaman pengguna yang mulus, tampak luar biasa, dan bekerja sempurna di semua perangkat.',
    stat1:'Proyek Selesai', stat2:'Tahun Pengalaman', stat3:'Kepuasan', stat4:'Kopi Diminum',
    badge_open:'Siap Bekerja',
    skills_tag:'Keahlian', skills_title_hl:'Keahlianku',
    sk1_title:'Ekosistem React', sk1_desc:'Membangun antarmuka pengguna dinamis dengan React, Next.js, dan arsitektur hooks modern.',
    sk2_title:'JavaScript & TypeScript', sk2_desc:'Menulis kode bersih dan type-safe dengan fitur ES6+ modern dan integrasi TypeScript.',
    sk3_title:'Styling & Animasi', sk3_desc:'Membuat desain responsif yang indah dengan Tailwind, SCSS, dan animasi halus.',
    sk4_title:'Desain Responsif', sk4_desc:'Membangun pengalaman mobile-first yang bekerja sempurna di semua perangkat.',
    sk5_title:'Desain UI/UX', sk5_desc:'Merancang antarmuka intuitif di Figma dengan fokus pada pengalaman pengguna.',
    sk6_title:'3D & Grafis', sk6_desc:'Menambahkan pengalaman 3D yang imersif dengan Three.js dan teknologi WebGL.',
    proj_tag:'Proyek', proj_title_hl:'Karya',
    p1_title:'Reaksi Channel WhatsApp', p1_desc:'Bot auto-reaksi untuk channel WhatsApp dengan respons emoji kustom, reaksi terjadwal, dan dashboard analitik.',
    p2_title:'Generator Lobby NEXA', p2_desc:'Generator lobby Free Fire dengan ekspor gambar HD, styling nickname kustom, dan dukungan MLBB. Fitur pratinjau real-time.',
    p3_title:'Pengunduh Media Universal', p3_desc:'Pengunduh media sosial universal mendukung TikTok, Instagram, YouTube, dan Twitter. Fitur kualitas HD dan unduh batch.',
    p4_title:'Generator IQC NEXA', p4_desc:'Generator Quote Card iPhone dengan template yang dapat dikustomisasi, styling font, dan unduh instan. Fitur pemantauan kesehatan server.',
    contact_tag:'Kontak',
    contact_title:'Mari Bangun Sesuatu yang <span>Luar Biasa</span>',
    contact_h2:'Punya proyek yang ingin dikerjakan?',
    contact_p:'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.',
    ci_email:'Email', ci_loc:'Lokasi', ci_resp:'Waktu Respons', ci_resp_val:'Dalam 24 jam',
    quick_contact:'Kontak Cepat', avail_status:'Hubungi Saya',
    send_email:'Kirim Email',
    footer_made:'Dibuat dengan', footer_coffee:'dan banyak kopi', back_top:'Kembali ke Atas',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('langLabel').textContent = lang === 'en' ? 'ID' : 'EN';
  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'id' : 'en');
});

applyLang(currentLang);

/* ─── Mobile menu ───────────────────────── */
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ─── Navbar scroll — throttled ─────────── */
const nav = document.getElementById('nav');
let lastScroll = 0, scrollTicking = false;

function onScroll() {
  lastScroll = window.scrollY;
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', lastScroll > 50);
      updateActiveNav(lastScroll);
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ─── Active nav link ────────────────────── */
const sections    = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

function updateActiveNav(scrollY) {
  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 220) current = s.id;
  });
  navLinksAll.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* ─── Scroll reveal — IntersectionObserver ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');

    // Animate skill bars
    if (el.classList.contains('skill-card')) {
      const fill  = el.querySelector('.skill-level-fill');
      const level = el.dataset.level;
      if (fill && level) {
        requestAnimationFrame(() => {
          setTimeout(() => { fill.style.width = level + '%'; }, 80);
        });
      }
    }
    revealObserver.unobserve(el);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ─── Smooth scroll ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ─── Easter egg ─────────────────────────── */
console.log('%c⚡ NEXA DEV','color:#7DF9C8;font-size:2rem;font-weight:bold;font-family:monospace;');
console.log('%cFrontend Developer Portfolio','color:#A78BFA;font-size:1rem;font-family:monospace;');
