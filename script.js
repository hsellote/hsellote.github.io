/* Hazel Sellote — portfolio app shell */

const PROJECTS = [
  {
    id: 'component-pantry', shot: 'assets/work-component-pantry.png', name: 'Component Pantry', mode: 'Team', years: '2023 — Now',
    role: 'Senior UI/UX Designer', shotHint: 'Component Pantry docs',
    url: 'https://nctv-strapi.onrender.com/overview/overview-installation', host: 'nctv-strapi.onrender.com',
    tags: ['Design systems', 'SaaS'],
    summary: 'The shared component library behind N-Compass TV\u2019s products \u2014 a team effort between me and the junior designer I mentor, building the 44 components in Figma while teaching them UI/UX, then developed by the front-end team into @ntv360/component-pantry, an installable Angular and Tailwind package with public docs.',
    did: [
      'Built the components in Figma as a team with the junior designer I mentor \u2014 states, variants and sizes, coaching them through the UI/UX reasoning behind each decision.',
      'Handed the library to the front-end team, who developed it into an installable Angular + Tailwind package.',
      'Set the colour roles and usage rules the documentation publishes alongside each component.',
      'Kept the Figma source and the shipped components in step as the system grew to v0.7.9.'
    ],
    stats: [['44', 'Components'], ['v0.7.9', 'Published'], ['Angular 21+', 'Peer requirement']]
  },
  {
    id: 'ntv360', shot: 'assets/work-ntv360.png', name: 'NTV360', mode: 'Team', years: '2023 — Now',
    role: 'Senior UI/UX Designer', shotHint: 'NTV360 sign-in',
    tags: ['SaaS', 'User research', 'Design systems', 'AI integration'],
    summary: 'End-to-end design for a web-based SaaS ecosystem: research, user flows, wireframes, and a component library the team ships from.',
    did: [
      'Ran discovery and stakeholder interviews, then translated business requirements into flows and journeys.',
      'Designed the full web app surface — dashboards, scheduling, reporting — from wireframe to hi-fi.',
      'Built and maintain the shared component library engineering ships from.',
      'Used Claude-assisted exploration to cut concept-to-prototype time in half.'
    ],
    stats: [['50%', 'Faster to prototype'], ['1', 'Shared library'], ['3 yrs', 'Ownership']]
  },
  {
    id: 'handvaerker', shot: 'assets/work-handvaerker-dk.png', name: 'Håndværker PH', mode: 'Solo', years: '2021 — 2023',
    role: 'UI/UX, Web & Graphics Designer', shotHint: 'Håndværker PH screens',
    tags: ['Web app', 'Mobile', 'Motion'],
    summary: 'A web and mobile suite for a trades marketplace — wireframes through high-fidelity prototypes, paired with the campaign graphics that launched it.',
    did: [
      'Designed matching web and mobile experiences for booking and managing trade jobs.',
      'Took every release from wireframe to interactive prototype solo.',
      'Produced the launch campaign graphics and motion pieces alongside the product work.'
    ],
    stats: [['2', 'Platforms'], ['Solo', 'Design team'], ['2 yrs', 'Engagement']]
  },
  {
    id: 'minbolig', shot: 'assets/work-minbolig.png', name: 'Min Bolig & MB Pro', mode: 'Client', years: 'Live app',
    role: 'UI/UX Designer', shotHint: 'Min Bolig and MB Pro screens',
    url: 'https://mbpro.haandvaerker.dk/', host: 'mbpro.haandvaerker.dk',
    tags: ['Mobile', 'Web app', 'SaaS', 'User flows'],
    summary: "Both sides of Håndværker.dk's renovation platform — the homeowner app for planning a project and putting it out to tender, and the MB Pro workspace where tradespeople answer with offers and run the job.",
    did: [
      'Designed the homeowner dashboard: consumption, climate rating, property value, and the files and messages tied to the address.',
      'Built the project flow end to end — trade picker, scoped brief, budget estimate and contract type.',
      'Designed the tender journey across both sides so every stage says what happens next, from job received through offers in to contract signed.',
      'Designed the MB Pro partner workspace — sign-in, dashboard and job management — and kept its patterns consistent with the consumer marketplace.'
    ],
    stats: [['2', 'Sides of the market'], ['50', 'Screens designed'], ['DK', 'Market']]
  },
  {
    id: 'partnerlogin', shot: 'assets/work-partnerlogin.png', name: 'Håndværker Partner Login', mode: 'Client', years: 'Live app',
    role: 'UI/UX Designer', shotHint: 'iOS partner app screens',
    url: 'https://apps.apple.com/nl/app/h%C3%A5ndv%C3%A6rker-dk-partnerlogin/id1529848721?l=en-GB',
    host: 'App Store · iOS',
    tags: ['Mobile', 'Web app', 'Motion'],
    summary: 'The iOS companion to the partner portal — tradespeople take their leads and job updates with them on site.',
    did: [
      'Designed the mobile partner experience for iOS, from login through lead and job detail.',
      'Sized every touch target and flow for one-handed use on a job site.',
      "Carried the portal's patterns across to mobile so partners switch devices without relearning."
    ],
    stats: [['iOS', 'Platform'], ['On site', 'Use context'], ['DK', 'Market']]
  },
  {
    id: 'doyoga', shot: 'assets/work-doyoga.png', name: 'DoYoga', mode: 'Client', years: 'Live site',
    role: 'UI/UX & Web Designer', shotHint: 'DoYoga studio site',
    url: 'https://doyoga.dk/', host: 'doyoga.dk',
    tags: ['Web app', 'Mobile', 'Motion'],
    summary: 'A Copenhagen yoga studio booking site — class schedule, membership pricing, yoga types and teacher profiles, with iOS and Android apps beside it.',
    did: [
      'Structured the browse-to-book path: yoga type, schedule, pricing, then free trial sign-up.',
      "Gave teachers and member testimonials real presence so the studio's warmth carries online.",
      'Kept the free-trial and membership calls to action visible without crowding the class content.'
    ],
    stats: [['7', 'Yoga types'], ['2013', 'Studio since'], ['iOS + Android', 'Companion apps']]
  },
  {
    id: 'move', shot: 'assets/work-move.png', name: 'Move Mobility', mode: 'Client', years: 'Live site',
    role: 'UI/UX & Web Designer', shotHint: 'Move Mobility storefront',
    url: 'https://movemobility.com.au/', host: 'movemobility.com.au',
    tags: ['E-commerce', 'Web app', 'Design systems'],
    summary: 'A large NDIS and DVA registered mobility-equipment store for the Australian market — deep catalogue navigation across wheelchairs, beds, pressure care and complex rehab.',
    did: [
      'Structured a shop-by-category and shop-by-condition system so clinicians and families can reach the right equipment fast.',
      'Designed catalogue, product and quote-request flows for a very wide product range.',
      'Kept hire, funding-support and clinical-services journeys legible next to the retail path.'
    ],
    stats: [['11', 'Top categories'], ['NDIS', 'Registered supplier'], ['AU', 'Market']]
  },
  {
    id: 'smyls', shot: 'assets/work-smyls.png', name: 'SMYLS', mode: 'Team', years: '2020 — 2021',
    role: 'UI/UX Designer · TeraVault', shotHint: 'SMYLS billing platform',
    url: 'https://www.smyls.ca/', host: 'smyls.ca',
    tags: ['Web app', 'SaaS', 'User flows'],
    summary: 'Billing software for Canadian physicians — it captures the uninsured services, block billing and third-party invoices that usually go unbilled, and is PIPEDA/PHIPA compliant. Designed from proof of concept through to a commercialised release.',
    did: [
      "Designed the interface for both the desktop app and the Blazor client web app as the project's UI/UX designer.",
      'Worked inside an agile team — interim product manager, dev lead, BSA and QA — across eighteen sprints.',
      'Kept a dense clinical workflow legible as scope grew from PoC to MVP to commercial release.'
    ],
    stats: [['9 mo', 'PoC to launch'], ['18', 'Agile sprints'], ['v1.18', 'Shipped version']]
  },
  {
    id: 'langschwander', shot: 'assets/work-langschwander.png', name: 'Lang \u0026 Schwander', mode: 'Client', years: 'Live site',
    role: 'UI/UX \u0026 Web Designer', shotHint: 'Lang \u0026 Schwander site',
    url: 'https://www.langschwander.com/', host: 'langschwander.com',
    tags: ['Web app', 'UI/UX'],
    summary: 'Site for a boutique hotel interior design firm \u2014 custom hospitality furniture and FF\u0026E for clients across the US, Caribbean and LATAM, led by a full-bleed video hero.',
    stats: [['3', 'Service lines'], ['EN / ES', 'Bilingual'], ['US \u00b7 Caribbean \u00b7 LATAM', 'Markets']]
  },
  {
    id: 'ascend', shot: 'assets/work-ascend.png', name: 'Ascend Corporate', mode: 'Client', years: 'Live site',
    role: 'UI/UX & Web Designer', shotHint: 'Ascend Corporate site',
    url: 'https://www.ascend.com.au/', host: 'ascend.com.au',
    tags: ['Web app', 'User flows', 'Design systems'],
    summary: 'A business-brokerage platform for West Australia — buyers search and shortlist businesses for sale while sellers move through appraisal and listing.',
    did: [
      'Designed the two-sided journey: buyer search and shortlist, seller appraisal and listing.',
      'Made the state-and-category listing search the front door, with a three-step search → review → buy narrative.',
      'Kept trust signals — testimonials, broker credentials, NDA step — inside the enquiry path.'
    ],
    stats: [['13', 'Business categories'], ['2-sided', 'Marketplace'], ['Perth', 'Market']]
  },
  {
    id: 'vertical', shot: 'assets/work-vertical.png', name: 'Vertical Difficult Access', mode: 'Client', years: 'Live site',
    role: 'UI/UX & Web Designer', shotHint: 'Vertical DAS site',
    url: 'https://verticaldifficultaccess.com/', host: 'verticaldifficultaccess.com',
    tags: ['Web app', 'E-commerce', 'Motion'],
    summary: 'Site for a Cebu-based rope-access company — high-rise cleaning, sealant, wind-turbine blade repair and rescue training, alongside a Petzl equipment shop.',
    did: [
      'Built a service-led structure that leads with the work — high-rise cleaning, inspection, tree care, disinfection.',
      'Paired the services with a product catalogue for their Petzl safety gear.',
      'Gave news, competitions and team activity a place so credentials read as proof, not filler.'
    ],
    stats: [['6', 'Service lines'], ['Cebu', 'Based in'], ['20k sq.m', 'MCIA glass']]
  },
  {
    id: 'specialtyrestaurants', name: 'Specialty Restaurants', mode: 'Client', years: 'Live site',
    role: 'UI/UX \u0026 Web Designer', shotHint: 'Specialty Restaurants site',
    url: 'https://www.specialtyrestaurants.com/', host: 'specialtyrestaurants.com',
    tags: ['Web app', 'UI/UX'],
    summary: 'Site for a family-owned US hospitality group founded in 1958 \u2014 17 award-winning restaurants and event venues, each sold on its waterfront, skyline or airport view.',
    stats: [['17', 'Restaurants'], ['1958', 'Founded'], ['65+ yrs', 'Events experience']]
  }
  // Hawaiian Planner — hidden for now. To restore: uncomment this entry,
  // add a comma after the DoYoga entry above, and set the two case-file
  // counts back to 11 (NAV 'work' count below, and the hero stat in index.html).
//   {
//     id: 'hawaiian', shot: 'assets/work-hawaiian.png', name: 'Hawaiian Planner', mode: 'Team', years: 'Live app',
//     role: 'UI/UX Designer', shotHint: 'Hawaiian Planner trip builder',
//     url: 'https://hawaiianplanner.com/', host: 'hawaiianplanner.com',
//     tags: ['Web app', 'SaaS', 'User flows'],
//     summary: 'A trip-planning web app for Hawaii — travellers build an itinerary from activities, hotels, flights, cars and restaurants across the islands, then track the whole trip in one place.',
//     did: [
//       'Designed the guided interview that turns island, dates and party size into a working plan.',
//       'Unified five discovery surfaces — activities, hotels, flights, cars, restaurants — under one browsing pattern.',
//       'Designed accounts, saved trips and the final itinerary view so a plan survives across sessions.'
//     ],
//     stats: [['5', 'Discovery surfaces'], ['4', 'Islands covered'], ['Itinerary', 'Core output']]
//   }
];

/* Talks, conferences and seminars attended — newest first. */
const TALKS = [
  {
    id: 'uxai2026', shot: 'assets/talks/uxai2026.png', name: 'UX+AI Conference 2026',
    kind: 'Attendance', date: 'September 6, 2026', org: 'UX+',
    venue: 'SMX Convention Center, Mall of Asia Complex, Pasay City',
    summary: 'Certificate of attendance \u2014 UX+AI Conference 2026, held 6 September 2026 at the SMX Convention Center, Mall of Asia Complex, Pasay City.'
  },
  {
    id: 'devfest2025', shot: 'assets/talks/devfest2025.png', name: 'DevFest Cebu 2025',
    kind: 'Appreciation', date: 'November 30, 2025', org: 'Google Developer Groups Cebu',
    venue: 'Golden Peak Hotel and Suites, Cebu',
    summary: 'Certificate of appreciation for participation in DevFest Cebu, run by Google Developer Groups Cebu on 30 November 2025 at the Golden Peak Hotel and Suites.'
  },
  {
    id: 'uxresearch101', shot: 'assets/talks/uxresearch101.png', name: 'UX Research 101',
    kind: 'Participation', date: 'March 15, 2025', org: 'CebUXD',
    venue: 'The Company Cebu, Mandaue',
    summary: 'Certificate of participation \u2014 \u201cUX Research 101: A Crash Course In Understanding Users\u201d, a CebUXD session on 15 March 2025 at The Company Cebu Mandaue.'
  },
  {
    id: 'uxplus2024', shot: 'assets/talks/uxplus2024.png', name: 'UX+ Conference 2024',
    kind: 'Attendance', date: 'August 18, 2024', org: 'UX+',
    venue: 'SMX Convention Center, Mall of Asia Complex, Pasay City',
    summary: 'Certificate of attendance \u2014 UX+ Conference 2024, held 18 August 2024 at the SMX Convention Center, Pasay City, covering adaptability, AI in design workflows and career navigation.'
  },
  {
    id: 'graphika2024', shot: 'assets/talks/graphika2024.jpg', name: 'Graphika Manila 2024',
    kind: 'Attendance', date: 'February 17 \u0026 18, 2024', org: 'Graphika Manila',
    venue: 'SMX Convention Center, Mall of Asia Complex, Pasay City',
    summary: 'Certificate of attendance \u2014 Graphika Manila 2024, the conference on creativity, held 17\u201318 February 2024 at the SMX Convention Center, Mall of Asia Complex, Pasay City.'
  }
];

const NAV = [
  { id: 'overview', label: 'Overview', num: '01', count: '' },
  { id: 'work', label: 'Selected work', num: '02', count: '12' },
  { id: 'personal', label: 'Personal Works', num: '03', count: '14' },
  { id: 'about', label: 'About', num: '04', count: '' },
  { id: 'experience', label: 'Experience', num: '05', count: '09' },
  { id: 'talks', label: 'UX Design & Events', num: '06', count: '05' },
  { id: 'contact', label: 'Contact', num: '07', count: '' }
];

/* Personal projects — concepts and studies from behance.net/hazelnut11. */
const PERSONAL = [
  {
    id: 'qahoi', shot: 'assets/personal-qahoi.png', name: 'Qahoi Cebu', mode: 'Concept', years: '2020',
    layout: 'grid',
    role: 'Personal work', shotHint: 'Qahoi Cebu concept',
    url: 'https://www.behance.net/gallery/90760669/Mobile-App-for-Qahoi-Cebu', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/qahoi/01.png', 'assets/personal/qahoi/02.png', 'assets/personal/qahoi/03.png', 'assets/personal/qahoi/04.png'],
    tags: ['Branding', 'UI/UX', 'Mobile'],
    summary: "Mobile app and brand concept for Qahoi, a Cebu furniture shop — wordmark, palette and app screens under the line “furnish your space”."
  },
  {
    id: 'marialuisa', shot: 'assets/personal-marialuisa.png', name: 'Maria Luisa Properties', mode: 'Concept', years: '2020',
    role: 'Personal work', shotHint: 'Maria Luisa Properties concept',
    url: 'https://www.behance.net/gallery/90505563/Maria-Luisa-Concept-Design', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/marialuisa/01.png', 'assets/personal/marialuisa/02.gif'],
    tags: ['UI/UX', 'Web design'],
    summary: "Site concept for a Cebu property estate — a full-bleed hero with the wordmark set over the house, leading into the listings."
  },
  {
    id: 'tygie', shot: 'assets/personal-tygie.jpg', name: 'Tygie PH', mode: 'Concept', years: '2020',
    role: 'Personal work', shotHint: 'Tygie PH concept',
    url: 'https://www.behance.net/gallery/90114693/TYGIE-PH-REDESIGN-CONCEPT', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/tygie/01.jpg', 'assets/personal/tygie/02.jpg', 'assets/personal/tygie/03.jpg', 'assets/personal/tygie/04.jpg', 'assets/personal/tygie/05.jpg', 'assets/personal/tygie/06.jpg'],
    tags: ['Branding', 'UI/UX', 'Web design'],
    summary: "Redesign concept for Tygie, a modern Filipiniana wear label — script logotype and a red-led brand direction."
  },
  {
    id: 'hersheys', shot: 'assets/personal-hersheys.jpg', name: 'Hershey’s', mode: 'Concept', years: '2018',
    role: 'Personal work', shotHint: 'Hershey’s concept',
    url: 'https://www.behance.net/gallery/72522633/HERSHEYS-WEB-DESIGN-CONCEPT', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/hersheys/01.jpg'],
    tags: ['UI/UX', 'Web design', 'Illustration'],
    summary: "Web design concept for Hershey’s — a dessert-led landing page built around s’mores photography, with a numbered about section."
  },
  {
    id: 'penshoppe', shot: 'assets/personal-penshoppe.jpg', name: 'Penshoppe', mode: 'Concept', years: '2018',
    role: 'Personal work', shotHint: 'Penshoppe concept',
    url: 'https://www.behance.net/gallery/72522553/PENSHOPPE-WEB-DESIGN-CONCEPT', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/penshoppe/01.jpg'],
    tags: ['UI/UX', 'Web design', 'Illustration'],
    summary: "Web design concept for the Philippine apparel brand — a diamond lookbook carousel over a muted campaign grid, followed by testimonials."
  },
  {
    id: 'bluemagic', shot: 'assets/personal-bluemagic.jpg', name: 'Blue Magic', mode: 'Concept', years: '2018',
    role: 'Personal work', shotHint: 'Blue Magic concept',
    url: 'https://www.behance.net/gallery/72522453/BLUE-MAGIC-WEB-DESIGN-CONCEPT', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/bluemagic/01.jpg'],
    tags: ['UI/UX', 'Web design', 'Illustration'],
    summary: "Web design concept for Blue Magic — a soft, illustrated landing page carried by the teddy-bear campaign art."
  },
  {
    id: 'nickautomatic', shot: 'assets/personal-nickautomatic.jpg', name: 'Nick Automatic', mode: 'Concept', years: '2018',
    role: 'Personal work', shotHint: 'Nick Automatic concept',
    url: 'https://www.behance.net/gallery/72522257/NICK-AUTOMATIC-WEB-DESIGN-CONCEPT', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/nickautomatic/01.jpg'],
    tags: ['UI/UX', 'Web design', 'Graphic design'],
    summary: "Web design concept for the streetwear label — a “handmade world domination” hero set over tattoo-style artwork."
  },
  {
    id: 'adidas', shot: 'assets/personal-adidas.jpg', name: 'Adidas', mode: 'Concept', years: '2018',
    role: 'Personal work', shotHint: 'Adidas concept',
    url: 'https://www.behance.net/gallery/62618941/Adidas-Concept-Design', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/adidas/01.jpg'],
    tags: ['Web design'],
    summary: "Web design concept for Adidas — a type-and-product hero where the shoe cuts through stacked display lettering."
  },
  {
    id: 'businessbuyer', shot: 'assets/personal-businessbuyer.jpg', name: 'BusinessBuyer', mode: 'Concept', years: '2017',
    role: 'Personal work', shotHint: 'BusinessBuyer concept',
    url: 'https://www.behance.net/gallery/49179235/BusinessBuyer', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/businessbuyer/01.jpg'],
    tags: ['Web design', 'UI/UX'],
    summary: "Brand and UI direction for BusinessBuyer — logo, palette and typography set against the product screens."
  },
  {
    id: 'businessbuyerhome', shot: 'assets/personal-businessbuyerhome.jpg', name: 'BusinessBuyer Homepage', mode: 'Concept', years: '2017',
    role: 'Personal work', shotHint: 'BusinessBuyer Homepage concept',
    url: 'https://www.behance.net/gallery/48485375/BusinessBuyer_Homepage-Concept-Design', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/businessbuyerhome/01.jpg'],
    tags: ['Web design'],
    summary: "Homepage concept for BusinessBuyer — a search, review and order narrative over a grid of businesses for sale."
  },
  {
    id: 'portfolio', shot: 'assets/personal-portfolio.jpg', name: 'Home Design Portfolio', mode: 'Concept', years: '2017',
    role: 'Personal work', shotHint: 'Home Design Portfolio concept',
    url: 'https://www.behance.net/gallery/47940853/Portfolio', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/portfolio/01.jpg'],
    tags: ['Web design'],
    summary: "Site design for an interior-design studio — a dark room-photography hero with search, over a gallery of finished spaces."
  },
  {
    id: 'enclave', shot: 'assets/personal-enclave.jpg', name: 'Enclave East Perth', mode: 'Concept', years: '2017',
    role: 'Personal work', shotHint: 'Enclave East Perth concept',
    url: 'https://www.behance.net/gallery/48487935/Enclave-Splash-Page-Design-Concept', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/enclave/01.jpg', 'assets/personal/enclave/02.jpg', 'assets/personal/enclave/03.jpg'],
    tags: ['Web design'],
    summary: "Splash page for an apartment development — mailing-list capture beside a location map and price-list downloads."
  },
  {
    id: 'nyekarma', shot: 'assets/personal-nyekarma.jpeg', name: 'Nye Karma', mode: 'Concept', years: '2016',
    role: 'Personal work', shotHint: 'Nye Karma concept',
    url: 'https://www.behance.net/gallery/44741869/Nye-Karma-Homepage-Design', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/nyekarma/01.jpg'],
    tags: ['Web design'],
    summary: "Homepage design for a hair-care brand — a left-hand nav against an editorial hero and a product row."
  },
  {
    id: 'homepage', shot: 'assets/personal-homepage.jpeg', name: 'Yuken Mari Homepage', mode: 'Concept', years: '2016',
    role: 'Personal work', shotHint: 'Yuken Mari Homepage concept',
    url: 'https://www.behance.net/gallery/44741409/Homepage-Design', host: 'behance.net', linkLabel: 'View on Behance ↗',
    shots: ['assets/personal/homepage/01.jpg'],
    tags: ['Web design'],
    summary: "Homepage concept for a resort brand — a calm sea hero with a booking prompt over a three-up services grid."
  }
];

const FILTERS = ['All', 'SaaS', 'Web app', 'E-commerce', 'Mobile', 'Design systems'];
const WORDS = ['intuitive', 'scalable', 'high-impact'];

const $ = (s, r) => (r || document).querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let view = 'overview';
let tag = 'All';
let cmdIndex = 0;
let cmds = [];

/* ---------- navigation ---------- */

function renderNav() {
  const nav = $('#nav');
  nav.innerHTML = '';
  NAV.forEach((n) => {
    const b = el('button', 'nav__item' + (view === n.id ? ' is-on' : ''));
    b.type = 'button';
    b.innerHTML = '<span class="nav__num">' + n.num + '</span><span class="nav__label">' + n.label + '</span><span class="nav__count">' + n.count + '</span>';
    b.addEventListener('click', () => go(n.id));
    nav.appendChild(b);
  });
}

function renderRail(activeId) {
  const rail = $('#rail');
  $('#railCount').textContent = PROJECTS.length;
  rail.innerHTML = '';
  PROJECTS.forEach((p) => {
    const b = el('button', 'rail__item' + (activeId === p.id ? ' is-on' : ''));
    b.type = 'button';
    b.innerHTML = '<span class="rail__dot"></span><span class="rail__label">' + esc(p.name) + '</span>';
    b.addEventListener('click', () => { go('work'); openCase(p.id); });
    rail.appendChild(b);
  });
}

function go(id) {
  view = id;
  document.querySelectorAll('.view').forEach((s) => { s.hidden = s.dataset.view !== id; });
  const n = NAV.find((x) => x.id === id) || NAV[0];
  $('#viewLabel').textContent = n.label;
  $('#viewCount').textContent = String(NAV.indexOf(n) + 1).padStart(2, '0') + ' / 0' + NAV.length;
  $('#canvas').scrollTop = 0;
  renderNav();
  closePalette();
}

/* ---------- work ---------- */

function renderFilters() {
  const wrap = $('#filters');
  wrap.innerHTML = '';
  FILTERS.forEach((f) => {
    const b = el('button', 'filter' + (tag === f ? ' is-on' : ''), f);
    b.type = 'button';
    b.addEventListener('click', () => { tag = f; renderFilters(); renderWork(); });
    wrap.appendChild(b);
  });
}

function shotMarkup(p) {
  return p.shot
    ? '<img src="' + p.shot + '" alt="' + esc(p.name) + '" />'
    : '<span class="case__ph">' + esc(p.shotHint) + '</span>';
}

/* A shot that fails to load leaves a broken-image box, which looks worse than
   no image at all. Swap it for the same placeholder a shot-less project gets.
   Replacement rather than hiding: .case__shot img sets display:block, which
   wins over the [hidden] attribute. */
function attachShotFallback(scope, p) {
  const img = scope.querySelector('.case__shot img');
  if (!img) return;
  img.addEventListener('error', () => {
    const ph = el('span', 'case__ph', esc(p.shotHint || p.name));
    if (img.parentNode) img.replaceWith(ph);
  }, { once: true });
}

function caseCard(p, onOpen) {
  const c = el('button', 'case');
  c.type = 'button';
  c.innerHTML =
    '<figure class="case__shot">' + shotMarkup(p) + '</figure>' +
    '<div class="case__row"><h3>' + esc(p.name) + '</h3><span class="case__mode">' + p.mode + '</span></div>' +
    '<p class="case__sum">' + esc(p.summary) + '</p>' +
    '<div class="tags">' + p.tags.map((t) => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' +
    '<div class="case__foot"><span>' + esc(p.years) + '</span><span class="case__open">Open ↗</span></div>';
  attachShotFallback(c, p);
  c.addEventListener('click', () => (onOpen || openCase)(p.id));
  return c;
}

function renderWork() {
  const list = PROJECTS.filter((p) => tag === 'All' || p.tags.indexOf(tag) > -1);
  $('#workCount').textContent = list.length + ' of ' + PROJECTS.length + ' shown';
  const grid = $('#work');
  grid.innerHTML = '';
  list.forEach((p) => grid.appendChild(caseCard(p)));
}

function renderPersonal() {
  const grid = $('#personal');
  $('#personalCount').textContent = PERSONAL.length ? PERSONAL.length + ' shown' : '';
  grid.innerHTML = '';
  if (!PERSONAL.length) {
    grid.appendChild(el('div', 'card work__empty',
      '<div class="mono side__label">In progress</div>' +
      '<p class="lead">Side projects, experiments and personal builds will live here.</p>'));
    return;
  }
  PERSONAL.forEach((p) => grid.appendChild(caseCard(p, openPreview)));
}

/* ---------- case-file pane ---------- */

function openCase(id) {
  const p = PROJECTS.concat(PERSONAL).find((x) => x.id === id);
  if (!p) return;
  $('#paneName').textContent = p.name;
  $('#paneBody').innerHTML =
    '<figure class="pane__shot">' + shotMarkup(p) + '</figure>' +
    '<div><div class="pane__role">' + esc(p.role) + '</div>' +
    '<h2 class="pane__title">' + esc(p.name) + '</h2>' +
    '<p class="pane__sum">' + esc(p.summary) + '</p></div>' +
    '<div class="tags">' + p.tags.map((t) => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' +
    (p.did && p.did.length
      ? '<div class="did"><div class="mono side__label">What I did</div><div class="did__list">' +
          p.did.map((d) => '<div class="did__item"><span>—</span><span>' + esc(d) + '</span></div>').join('') +
        '</div></div>'
      : '') +
    (p.stats && p.stats.length
      ? '<div class="kpis">' + p.stats.map((s) => '<div class="kpi"><div class="kpi__v">' + esc(s[0]) + '</div><div class="kpi__k">' + esc(s[1]) + '</div></div>').join('') + '</div>'
      : '') +
    (p.url ? '<a class="pane__link" href="' + p.url + '" target="_blank" rel="noopener"><span class="mono">' + esc(p.host) + '</span><b>' + esc(p.linkLabel || 'Visit live site ↗') + '</b></a>' : '') +
    '<a class="pane__ask" href="mailto:soriahazel16@gmail.com">Ask me about this project</a>';
  $('#pane').hidden = false;
  $('#hint').textContent = 'Esc closes the case study';
  renderRail(id);
}

function toggleRail() {
  const rail = $('#rail');
  const open = rail.hidden;
  rail.hidden = !open;
  $('#railGroup').classList.toggle('is-collapsed', !open);
  $('#railToggle').setAttribute('aria-expanded', String(open));
}

function closeCase() {
  $('#pane').hidden = true;
  $('#hint').textContent = 'Press ⌘K to jump anywhere';
  renderRail(null);
}

function renderTalks() {
  const grid = $('#talks');
  grid.innerHTML = '';
  TALKS.forEach((t) => {
    const c = el('button', 'case');
    c.type = 'button';
    c.innerHTML =
      '<figure class="case__shot case__shot--fit"><img src="' + t.shot + '" alt="' + esc(t.name) + ' certificate" loading="lazy" /></figure>' +
      '<div class="case__row"><h3>' + esc(t.name) + '</h3><span class="case__mode">' + esc(t.kind) + '</span></div>' +
      '<p class="case__sum">' + esc(t.org) + ' \u00b7 ' + esc(t.venue) + '</p>' +
      '<div class="case__foot"><span>' + esc(t.date) + '</span><span class="case__open">View \u2197</span></div>';
    c.addEventListener('click', () => openPreview(t.id));
    grid.appendChild(c);
  });
}

/* ---------- theme ---------- */

function setTheme(mode, persist) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
  $('#themeIcon').textContent = mode === 'dark' ? '\u2600' : '\u263e';
  $('#themeToggle').setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  if (persist) { try { localStorage.setItem('hz-theme', mode); } catch (e) {} }
}

function toggleTheme() {
  setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark', true);
}

/* ---------- personal work preview ---------- */

let previewIndex = -1;
let previewList = PERSONAL;

function openPreview(id) {
  const list = PERSONAL.some((x) => x.id === id) ? PERSONAL : TALKS;
  const i = list.findIndex((x) => x.id === id);
  if (i < 0) return;
  previewList = list;
  previewIndex = i;
  const p = list[i];
  const shots = p.shots && p.shots.length ? p.shots : (p.shot ? [p.shot] : []);
  $('#previewName').textContent = p.name;
  $('#previewMeta').textContent = p.years ? p.years + ' \u00b7 ' + p.mode : p.date;
  $('#previewCount').textContent = (i + 1) + ' of ' + list.length;
  $('#previewBody').innerHTML =
    '<p class="preview__sum">' + esc(p.summary) + '</p>' +
    '<div class="preview__shots' + (p.layout === 'grid' ? ' preview__shots--grid' : '') + '">' +
      shots.map((src, n) =>
        '<img class="preview__img" src="' + src + '" alt="' + esc(p.name) + ' \u2014 ' + (n + 1) + '"' +
        (n ? ' loading="lazy"' : '') + ' />').join('') +
    '</div>';
  $('#previewLink').innerHTML = p.url
    ? '<a href="' + p.url + '" target="_blank" rel="noopener">Also on ' + esc(p.host) + ' \u2197</a>'
    : '';
  $('#previewBody').scrollTop = 0;
  $('#preview').hidden = false;
  $('#hint').textContent = 'Esc closes the preview';
}

function closePreview() {
  $('#preview').hidden = true;
  previewIndex = -1;
  $('#hint').textContent = 'Press \u2318K to jump anywhere';
}

function stepPreview(d) {
  if (previewIndex < 0) return;
  openPreview(previewList[(previewIndex + d + previewList.length) % previewList.length].id);
}

/* ---------- command palette ---------- */

function buildCommands(q) {
  const all = NAV.map((n) => ({ kind: 'Section', label: n.label, run: () => go(n.id) }))
    .concat(PROJECTS.map((p) => ({ kind: 'Case study', label: p.name, run: () => { go('work'); openCase(p.id); } })))
    .concat([
      { kind: 'Action', label: 'Email Hazel', run: () => { window.location.href = 'mailto:soriahazel16@gmail.com'; } },
      { kind: 'Action', label: 'Open LinkedIn', run: () => window.open('https://www.linkedin.com/in/hazel-sellote-7252653bb/', '_blank') },
      { kind: 'Action', label: 'Switch theme', run: () => { toggleTheme(); closePalette(); } }
    ]);
  const s = q.trim().toLowerCase();
  return s ? all.filter((c) => (c.label + ' ' + c.kind).toLowerCase().indexOf(s) > -1) : all;
}

function renderPalette() {
  const list = $('#paletteList');
  list.innerHTML = '';
  cmds.forEach((c, i) => {
    const b = el('button', 'cmd' + (i === cmdIndex ? ' is-on' : ''));
    b.type = 'button';
    b.innerHTML = '<span class="cmd__kind">' + c.kind + '</span><span class="cmd__label">' + esc(c.label) + '</span><span class="cmd__key">↵</span>';
    b.addEventListener('click', c.run);
    list.appendChild(b);
  });
}

function openPalette() {
  cmdIndex = 0;
  cmds = buildCommands('');
  renderPalette();
  $('#palette').hidden = false;
  const input = $('#paletteInput');
  input.value = '';
  input.focus();
}

function closePalette() { $('#palette').hidden = true; }

/* ---------- cute matcha cursor + pastel sprinkles ---------- */

function mountCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const layer = el('div');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden';
  const cup = el('div');
  cup.style.cssText = 'position:absolute;top:0;left:0;width:38px;height:38px;will-change:transform;transition:transform .12s ease-out';
  cup.innerHTML = '<svg viewBox="0 0 56 56" width="38" height="38">' +
    '<ellipse cx="28" cy="50" rx="13" ry="2.8" fill="#1B2415" opacity=".12"/>' +
    '<path d="M14 46C12 30 18 16 40 10c4 20-6 33-24 36z" fill="#9CC97A" stroke="#3F5C2E" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M38 12C26 20 19 31 15.6 44.6" stroke="#3F5C2E" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '<g stroke="#4E7A34" stroke-width="1.5" stroke-linecap="round" fill="none">' +
    '<path d="M22.4 26.6c3.4.3 6.6-.3 9.4-1.8"/><path d="M18.6 34.4c3.6.3 7-.4 10-2"/><path d="M28.8 20c2.6.5 5.2.3 7.6-.6"/></g>' +
    '<circle cx="21.6" cy="38.6" r="1.6" fill="#2F4A22"/><circle cx="28.4" cy="34.6" r="1.6" fill="#2F4A22"/>' +
    '<path d="M23.6 41.4c1.3.6 2.7.2 3.6-.9" stroke="#2F4A22" stroke-width="1.5" stroke-linecap="round" fill="none"/>' +
    '<ellipse cx="17.8" cy="40.4" rx="2" ry="1.3" fill="#F2A0A0" opacity=".5" transform="rotate(-35 17.8 40.4)"/>' +
    '<ellipse cx="31.6" cy="30.4" rx="2" ry="1.3" fill="#F2A0A0" opacity=".5" transform="rotate(-35 31.6 30.4)"/>' +
    '<path d="M43.4 8.6c-1.4 1.4-3 2.4-4.8 3.2" stroke="#4E7A34" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '</svg>';
  layer.appendChild(cup);
  document.body.appendChild(layer);

  const SHAPES = ['flower', 'circle', 'star', 'square'];
  const COLORS = ['#FFB3C7', '#FFD9A0', '#FFF3A3', '#B8E3C0', '#A8D8F0', '#C9B6F5', '#FFC2E2', '#B6EADA'];

  const sprinkle = (shape, c) => {
    if (shape === 'circle') return '<circle cx="6" cy="6" r="4.4" fill="' + c + '"/>';
    if (shape === 'square') return '<rect x="2" y="2" width="8" height="8" rx="1.8" fill="' + c + '"/>';
    if (shape === 'star') return '<path d="M6 .6l1.35 3.75L11.2 6 7.35 7.65 6 11.4 4.65 7.65.8 6l3.85-1.65z" fill="' + c + '"/>';
    let p = '';
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      p += '<circle cx="' + (6 + Math.cos(a) * 2.7).toFixed(2) + '" cy="' + (6 + Math.sin(a) * 2.7).toFixed(2) + '" r="2.3" fill="' + c + '"/>';
    }
    return p + '<circle cx="6" cy="6" r="1.6" fill="#FFF3A3"/>';
  };

  let mx = window.innerWidth / 2, my = window.innerHeight / 2, cx = mx, cy = my, last = 0;

  const spawn = (x, y) => {
    const n = el('div');
    const size = 10 + Math.random() * 9;
    n.style.cssText = 'position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + size + 'px;height:' + size + 'px;margin:-' + size / 2 + 'px 0 0 -' + size / 2 + 'px';
    n.innerHTML = '<svg viewBox="0 0 12 12" width="100%" height="100%">' +
      sprinkle(SHAPES[(Math.random() * SHAPES.length) | 0], COLORS[(Math.random() * COLORS.length) | 0]) + '</svg>';
    layer.appendChild(n);
    const dx = (Math.random() - 0.5) * 46, dy = 26 + Math.random() * 40;
    n.animate([
      { transform: 'translate(0,0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + ((Math.random() - 0.5) * 260).toFixed(0) + 'deg) scale(.35)', opacity: 0 }
    ], { duration: 780 + Math.random() * 320, easing: 'cubic-bezier(.25,.6,.3,1)' }).onfinish = () => n.remove();
  };

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    const now = performance.now();
    if (now - last > 70) { last = now; spawn(mx, my); }
  });

  (function frame() {
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    const tilt = Math.max(-14, Math.min(14, (mx - cx) * 0.9));
    cup.style.transform = 'translate(' + (cx - 11) + 'px,' + (cy - 9) + 'px) rotate(' + tilt.toFixed(1) + 'deg)';
    requestAnimationFrame(frame);
  })();
}

/* ---------- boot ---------- */

function tickClock() {
  $('#clock').textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderRail(null);
  renderFilters();
  renderWork();
  renderPersonal();
  renderTalks();
  go('overview');
  tickClock();
  setInterval(tickClock, 10000);

  let w = 0;
  setInterval(() => { w = (w + 1) % WORDS.length; $('#rotator').textContent = WORDS[w]; }, 2600);

  setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light', false);
  $('#themeToggle').addEventListener('click', toggleTheme);

  $('#paletteOpen').addEventListener('click', openPalette);
  $('#railToggle').addEventListener('click', toggleRail);
  document.querySelectorAll('[data-close]').forEach((n) => n.addEventListener('click', closeCase));
  document.querySelectorAll('[data-close-palette]').forEach((n) => n.addEventListener('click', closePalette));
  document.querySelectorAll('[data-close-preview]').forEach((n) => n.addEventListener('click', closePreview));
  $('#previewPrev').addEventListener('click', () => stepPreview(-1));
  $('#previewNext').addEventListener('click', () => stepPreview(1));

  $('#paletteInput').addEventListener('input', (e) => {
    cmds = buildCommands(e.target.value);
    cmdIndex = 0;
    renderPalette();
  });

  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if ((e.metaKey || e.ctrlKey) && k === 'k') {
      e.preventDefault();
      $('#palette').hidden ? openPalette() : closePalette();
      return;
    }
    if (e.key === 'Escape') { closePalette(); closeCase(); closePreview(); return; }
    if (!$('#preview').hidden && $('#palette').hidden) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); stepPreview(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); stepPreview(1); }
    }
    if (!$('#palette').hidden) {
      if (e.key === 'ArrowDown') { e.preventDefault(); cmdIndex = Math.min(cmdIndex + 1, cmds.length - 1); renderPalette(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); cmdIndex = Math.max(cmdIndex - 1, 0); renderPalette(); }
      if (e.key === 'Enter' && cmds[cmdIndex]) { e.preventDefault(); cmds[cmdIndex].run(); }
    }
  });

  mountCursor();
});
