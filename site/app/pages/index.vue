<script setup lang="ts">
useHead({
  title: 'Veeramachaneni Venkata Subash — Senior Fullstack Developer',
  meta: [
    { name: 'description', content: 'Senior Fullstack Developer building fast, scalable, delightful web products. Design systems, frontend architecture, performance and accessibility.' },
    { property: 'og:title', content: 'V. Venkata Subash — Senior Fullstack Developer' },
    { property: 'og:description', content: 'Building fast, scalable, delightful web products. Design systems, real-time streaming, performance & accessibility.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/hero-collage.png' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Caveat:wght@600;700&family=Space+Mono:wght@400;700&display=swap' },
  ],
})

const menuOpen = ref(false)
const pageRef = ref<HTMLElement | null>(null)

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  { name: 'Languages', tag: '{ }', color: '#E8331C', rot: '-1.5deg', items: ['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'] },
  { name: 'Frontend',  tag: '▤',   color: '#1B4DDB', rot: '1.5deg',  items: ['Vue', 'React', 'Nuxt'] },
  { name: 'Backend',   tag: '⇄',   color: '#15120E', rot: '-1deg',   items: ['Node.js', 'Express', 'GraphQL', 'REST', 'WebSockets', 'Prisma', 'Drizzle'] },
  { name: 'Databases', tag: '◳',   color: '#E8331C', rot: '1deg',    items: ['PostgreSQL', 'Hasura'] },
  { name: 'Tooling',   tag: '⌥',   color: '#1B4DDB', rot: '-1.5deg', items: ['Git', 'GitHub', 'CI/CD', 'Webpack', 'Vite'] },
  { name: 'Design & UX', tag: '✦', color: '#15120E', rot: '1.5deg',  items: ['Accessibility', 'Design Systems', 'Figma', 'Responsive'] },
]

const certs = [
  { name: 'DP-900',          org: 'MICROSOFT',   bg: '#1B4DDB', fg: '#FFFFFF', rot: '-3deg' },
  { name: 'Responsive Web',  org: 'FREECODECAMP', bg: '#F3ECDC', fg: '#15120E', rot: '2deg' },
  { name: 'SQL',             org: 'HACKERRANK',  bg: '#E8331C', fg: '#FFFFFF', rot: '-2deg' },
  { name: 'SQL',             org: 'CODECADEMY',  bg: '#FFD300', fg: '#15120E', rot: '3deg' },
  { name: 'Vue',             org: 'CODECADEMY',  bg: '#F3ECDC', fg: '#15120E', rot: '-1.5deg' },
]

onMounted(() => {
  const root = pageRef.value
  if (!root) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const items = root.querySelectorAll('[data-reveal]')
  items.forEach(el => {
    const e = el as HTMLElement
    e.style.setProperty('--ty', '34px')
    e.style.opacity = '0'
    e.style.transition = 'opacity .55s cubic-bezier(.2,.9,.3,1.15), transform .65s cubic-bezier(.2,.9,.3,1.15)'
  })

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target as HTMLElement
        el.style.setProperty('--ty', '0px')
        el.style.opacity = '1'
        io.unobserve(el)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  items.forEach(el => io.observe(el))
})
</script>

<template>
  <div ref="pageRef" class="pf">

    <!-- ===== NAV ===== -->
    <nav aria-label="Primary" class="nav" id="top">
      <a href="#top" class="nav-logo" @click="menuOpen = false">
        <span aria-hidden="true" class="nav-logo__icon">V</span>
        <span class="nav-logo__name">SUBASH<span class="nav-logo__dot">.dev</span></span>
      </a>

      <!-- Desktop links -->
      <div class="nav-links">
        <a v-for="l in navLinks" :key="l.href" :href="l.href" class="nav-links__item">{{ l.label }}</a>
        <a href="#contact" class="nav-links__cta">Say hi →</a>
      </div>

      <!-- Mobile burger -->
      <button type="button" :aria-expanded="menuOpen" aria-label="Toggle menu" class="nav-burger" @click="menuOpen = !menuOpen">
        <span aria-hidden="true" class="nav-burger__icon">{{ menuOpen ? '✕' : '≡' }}</span>
      </button>
    </nav>

    <!-- Mobile slide-down drawer -->
    <div role="dialog" aria-label="Menu" class="nav-drawer" :class="{ 'nav-drawer--open': menuOpen }">
      <ul class="nav-drawer__list">
        <li v-for="l in navLinks" :key="l.href">
          <a :href="l.href" class="nav-drawer__link" @click="menuOpen = false">
            <span>{{ l.label }}</span><span aria-hidden="true" class="nav-drawer__arrow">→</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- ===== HERO ===== -->
    <header class="hero">
      <!-- Decorative blobs -->
      <div aria-hidden="true" class="hero__blob hero__blob--dots" />
      <div aria-hidden="true" class="hero__blob hero__blob--circle" />
      <div aria-hidden="true" class="hero__blob hero__blob--dot-white" />

      <div class="hero__inner">
        <!-- LEFT: text column -->
        <div class="hero__text">
          <span class="hero__eyebrow">HEY, I'M —</span>
          <h1 class="hero__name">VENKATA<br>SUBASH</h1>
          <p class="hero__role">Senior Software Developer</p>
          <p class="hero__desc">
            Building <em class="hl--pow">fast</em>, scalable,
            <em class="hl--ink">delightful</em> web products — from design systems to real-time platforms.
          </p>
          <div class="hero__ctas">
            <a href="#projects" class="hero__btn hero__btn--primary">View Projects →</a>
            <a href="#contact" class="hero__btn hero__btn--secondary">Download Resume ↓</a>
          </div>
          <div class="hero__badges">
            <span class="hero__badge hero__badge--dark" style="transform:rotate(-3deg)">4+ YEARS</span>
            <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">TYPESCRIPT</span>
            <span class="hero__badge hero__badge--yellow" style="transform:rotate(-2deg)">VUE</span>
            <span class="hero__badge hero__badge--red" style="transform:rotate(3deg)">REACT</span>
            <span class="hero__badge hero__badge--white" style="transform:rotate(-1deg)">A11Y</span>
          </div>
        </div>

        <!-- RIGHT: portrait -->
        <div class="hero__portrait">
          <div aria-hidden="true" class="hero__plate hero__plate--yellow" />
          <div aria-hidden="true" class="hero__plate hero__plate--red" />
          <figure class="hero__frame">
            <img
              src="/hero-collage.png"
              width="1448" height="1086"
              alt="Comic-collage portrait of Venkata Subash surrounded by halftones and stickers."
              class="hero__photo"
              loading="eager"
              fetchpriority="high"
            />
            <!-- Mobile: gradient overlay so text is legible -->
            <div aria-hidden="true" class="hero__grad" />
            <figcaption class="hero__caption">FIG.01 — THE BUILDER</figcaption>
          </figure>
          <span aria-hidden="true" class="hero__stk hero__stk--fps">60 FPS</span>
          <span aria-hidden="true" class="hero__stk hero__stk--wcag">WCAG 2.1</span>
          <span aria-hidden="true" class="hero__stk hero__stk--gql">GRAPHQL</span>
          <span aria-hidden="true" class="hero__stk hero__stk--os">OPEN SOURCE</span>
        </div>
      </div>

      <!-- Mobile-only: body below the portrait -->
      <div class="hero__mobile-body">
        <p class="hero__desc">
          Building <em class="hl--pow">fast</em>, scalable,
          <em class="hl--ink">delightful</em> web products — from design systems to real-time platforms.
        </p>
        <div class="hero__ctas">
          <a href="#projects" class="hero__btn hero__btn--primary">View Projects →</a>
          <a href="#contact" class="hero__btn hero__btn--secondary">Download Resume ↓</a>
        </div>
        <div class="hero__badges">
          <span class="hero__badge hero__badge--dark" style="transform:rotate(-3deg)">4+ YEARS</span>
          <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">TYPESCRIPT</span>
          <span class="hero__badge hero__badge--yellow" style="transform:rotate(-2deg)">VUE</span>
          <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">REACT</span>
          <span class="hero__badge hero__badge--white" style="transform:rotate(-1deg)">A11Y</span>
        </div>
      </div>
    </header>

    <!-- ===== MARQUEE ===== -->
    <div aria-hidden="true" class="marquee-strip">
      <div class="marquee-strip__track">
        <span class="marquee-strip__content">DESIGN SYSTEMS&nbsp;<span class="mc mc--y">✸</span>&nbsp;REAL-TIME STREAMING&nbsp;<span class="mc mc--r">✸</span>&nbsp;PERFORMANCE&nbsp;<span class="mc mc--b">✸</span>&nbsp;ACCESSIBILITY&nbsp;<span class="mc mc--y">✸</span>&nbsp;FRONTEND ARCHITECTURE&nbsp;<span class="mc mc--r">✸</span>&nbsp;</span>
        <span class="marquee-strip__content" aria-hidden="true">DESIGN SYSTEMS&nbsp;<span class="mc mc--y">✸</span>&nbsp;REAL-TIME STREAMING&nbsp;<span class="mc mc--r">✸</span>&nbsp;PERFORMANCE&nbsp;<span class="mc mc--b">✸</span>&nbsp;ACCESSIBILITY&nbsp;<span class="mc mc--y">✸</span>&nbsp;FRONTEND ARCHITECTURE&nbsp;<span class="mc mc--r">✸</span>&nbsp;</span>
      </div>
    </div>

    <!-- ===== ABOUT ===== -->
    <section id="about" aria-labelledby="about-h" class="about">
      <div aria-hidden="true" class="about__blob" />
      <div class="section-wrap">
        <div data-reveal class="about__label-wrap">
          <span class="section-label section-label--red">01 — WHO</span>
          <h2 id="about-h" class="about__heading">
            I make interfaces<br>that <span class="about__feel">feel</span> as good<br>as they <span class="about__perform">perform.</span>
          </h2>
        </div>

        <div class="about__grid">
          <div data-reveal class="about__copy">
            <p class="about__lead">I'm a developer who fell in love for the <strong class="hl--marker">game</strong> —not just solving users problems but delighting them is my <strong class="hl--marker">addiction</strong></p>
            <p class="about__body">I think in <strong>systems</strong>, not screens. Give me a messy product and I'll hand you a design system, 30+ reusable primitives, and a team that ships features 40% faster because the foundation just works.</p>
            <p class="about__body">I obsess over the unglamorous stuff that users actually feel: <strong>smooth 60fps interactions</strong>, and bundle sizes that respect a phone on a slow network.</p>
          </div>
          <div class="about__cards">
            <div data-reveal class="about__quote-card">
              <p class="about__quote">"ship it, then make it sing"</p>
              <p class="about__quote-sub">My north star: pragmatic shipping <em>and</em> craft. The two aren't enemies.</p>
            </div>
            <div data-reveal class="about__stat-card">
              <div class="about__stat">
                <div class="about__stat-num about__stat-num--blue">30+</div>
                <div class="about__stat-label">Components shipped</div>
              </div>
              <div class="about__stat">
                <div class="about__stat-num about__stat-num--red">40%</div>
                <div class="about__stat-label">Faster delivery</div>
              </div>
            </div>
            <span aria-hidden="true" class="about__aside">products, not pages! ↘</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SKILLS ===== -->
    <section id="skills" aria-labelledby="skills-h" class="skills">
      <div aria-hidden="true" class="skills__bg-dots" />
      <div class="section-wrap">
        <div data-reveal class="skills__header">
          <span class="section-label section-label--dark">02 — THE TOOLBOX</span>
          <h2 id="skills-h" class="skills__heading">Stuff I build with</h2>
          <span class="skills__swipe">SWIPE →</span>
        </div>
        <div class="skills-grid">
          <div
            v-for="cat in skills"
            :key="cat.name"
            data-reveal
            class="skill-card"
            :style="{ transform: `rotate(${cat.rot})` }"
          >
            <div class="skill-card__header">
              <span class="skill-card__icon" :style="{ background: cat.color }">{{ cat.tag }}</span>
              <h3 class="skill-card__name">{{ cat.name }}</h3>
            </div>
            <div class="skill-card__chips">
              <span v-for="chip in cat.items" :key="chip" class="skill-card__chip">{{ chip }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== EXPERIENCE ===== -->
    <section id="work" aria-labelledby="work-h" class="work">
      <div aria-hidden="true" class="work__blob" />
      <div class="section-wrap">
        <div data-reveal>
          <span class="section-label section-label--yellow">03 — THE TRACK RECORD</span>
          <h2 id="work-h" class="work__heading">Where I've shipped</h2>
        </div>
        <div class="work-list">

          <!-- Shareplay -->
          <article data-reveal class="work-card work-card--light" style="transform:rotate(-1deg)">
            <span aria-hidden="true" class="work-card__badge">NOW</span>
            <div class="work-card__inner">
              <div class="work-card__head">
                <h3 class="work-card__company">Shareplay<span class="work-card__company--accent">.tv</span></h3>
                <span class="work-card__period work-card__period--dark">MAR 2024 — APR 2026</span>
              </div>
              <p class="work-card__role work-card__role--blue">Senior Fullstack Developer</p>
              <p class="work-card__desc">Owned the front-end foundation of a live game-streaming platform — built the design system, then engineered the real-time guts: simultaneous video, chat, and presence over WebSockets, tuned to stay smooth on mid-range phones.</p>
              <ul class="work-card__tags">
                <li class="tag tag--dark">⚙ Design System from scratch</li>
                <li class="tag tag--yellow">30+ reusable components</li>
                <li class="tag tag--red">↑ 40% faster delivery</li>
                <li class="tag tag--white">WebSockets real-time</li>
                <li class="tag tag--white">Mobile video optimization</li>
                <li class="tag tag--white">WCAG 2.1 AA</li>
              </ul>
            </div>
          </article>

          <!-- Fuel Buddy -->
          <article data-reveal class="work-card work-card--dark" style="transform:rotate(1deg)">
            <div class="work-card__inner">
              <div class="work-card__head">
                <h3 class="work-card__company work-card__company--light">Fuel <span class="work-card__company--yellow">Buddy</span></h3>
                <span class="work-card__period work-card__period--yellow">JAN 2023 — JUN 2023</span>
              </div>
              <p class="work-card__role work-card__role--yellow">Frontend Developer</p>
              <p class="work-card__desc work-card__desc--dim">Built a customer-facing fuel-delivery app from an empty repo — Vue + Pinia on the front, a GraphQL/Hasura layer over PostgreSQL underneath, with live delivery tracking on a map and a fully responsive architecture.</p>
              <ul class="work-card__tags">
                <li class="tag tag--blue">Built from scratch</li>
                <li class="tag tag--newsprint">Vue + Pinia</li>
                <li class="tag tag--newsprint">GraphQL + Hasura</li>
                <li class="tag tag--newsprint">Live tracking + Maps</li>
                <li class="tag tag--newsprint">GraphQL Codegen</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ===== PROJECTS ===== -->
    <section id="projects" aria-labelledby="proj-h" class="projects">
      <div class="section-wrap">
        <div data-reveal class="projects__header">
          <span class="section-label section-label--blue">04 — CASE STUDIES</span>
          <h2 id="proj-h" class="projects__heading">Featured <span class="projects__heading--red">work</span></h2>
          <p class="projects__sub">Not a list of repos — three problems, and how I engineered my way out of them.</p>
        </div>

        <!-- Project 1: Streaming Platform -->
        <article data-reveal class="proj-card proj-card--streaming">
          <div class="proj-card__grid">
            <div class="proj-card__body proj-card__body--light">
              <span class="proj-card__label proj-card__label--red">PROJECT 01</span>
              <h3 class="proj-card__title">Game Streaming Platform</h3>
              <div class="proj-card__blocks">
                <div><span class="proj-card__key proj-card__key--yellow">PROBLEM</span><p class="proj-card__text proj-card__text--dim">Viewers expect Twitch-grade latency. Multiple live video tiles + a firehose chat were melting low-end devices.</p></div>
                <div><span class="proj-card__key proj-card__key--yellow">APPROACH</span><p class="proj-card__text proj-card__text--dim">A WebSocket presence + chat layer with backpressure, plus a virtualized render path so only visible tiles decode.</p></div>
                <div><span class="proj-card__key proj-card__key--yellow">OUTCOME</span><p class="proj-card__text proj-card__text--dim">Steady 60fps with several streams live on mid-range phones, and an accessible, keyboard-driven player.</p></div>
              </div>
            </div>
            <!-- Screen pane -->
            <div aria-hidden="true" class="proj-card__screen proj-card__screen--stream">
              <span class="proj-screen__badge proj-screen__badge--live">● LIVE</span>
              <span class="proj-screen__badge proj-screen__badge--fps">60 FPS</span>
              <span class="proj-screen__play">▶</span>
              <span class="proj-screen__ws">ws://stream · backpressure · vsync</span>
              <div class="proj-screen__progress">
                <div class="proj-screen__fill" style="width:62%" />
              </div>
            </div>
          </div>
          <div class="proj-card__chips">
            <span class="proj-chip">WebSockets</span>
            <span class="proj-chip">Video pipeline</span>
            <span class="proj-chip">Virtualization</span>
            <span class="proj-chip">A11y player</span>
          </div>
        </article>

        <!-- Project 2: Fuel Tracking -->
        <article data-reveal class="proj-card proj-card--fuel">
          <div class="proj-card__grid proj-card__grid--reverse">
            <!-- Map pane -->
            <div aria-hidden="true" class="proj-card__screen proj-card__screen--map">
              <svg viewBox="0 0 300 260" width="100%" height="100%" style="position:absolute;inset:0" aria-hidden="true">
                <path d="M30 230 C90 180 80 120 150 110 S250 70 270 30" fill="none" stroke="#1B4DDB" stroke-width="6" stroke-dasharray="2 12" stroke-linecap="round"/>
                <circle cx="30" cy="230" r="9" fill="#E8331C" stroke="#15120E" stroke-width="3"/>
                <circle cx="150" cy="110" r="7" fill="#fff" stroke="#15120E" stroke-width="3"/>
                <circle cx="270" cy="30" r="10" fill="#15120E" stroke="#fff" stroke-width="3"/>
              </svg>
              <span class="proj-screen__badge proj-screen__badge--coord">17.6868° N, 83.2185° E</span>
              <span class="proj-screen__badge proj-screen__badge--eta">ETA 8 MIN</span>
            </div>
            <div class="proj-card__body">
              <span class="proj-card__label proj-card__label--blue">PROJECT 02</span>
              <h3 class="proj-card__title proj-card__title--dark">Fuel Tracking Platform</h3>
              <div class="proj-card__blocks">
                <div><span class="proj-card__key proj-card__key--red">REALTIME</span><p class="proj-card__text">GraphQL subscriptions push driver location live — no polling, no stale dots on the map.</p></div>
                <div><span class="proj-card__key proj-card__key--red">ARCHITECTURE</span><p class="proj-card__text">Hasura over PostgreSQL with codegen'd types end-to-end, so the client and schema never drift.</p></div>
                <div><span class="proj-card__key proj-card__key--red">STATE</span><p class="proj-card__text">Pinia stores keep map, order and auth state scalable and predictable across the app.</p></div>
              </div>
              <div class="proj-card__chips">
                <span class="proj-chip proj-chip--dark">GraphQL subs</span>
                <span class="proj-chip proj-chip--dark">Map integration</span>
                <span class="proj-chip proj-chip--dark">Pinia</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Project 3: Design System -->
        <article data-reveal class="proj-card proj-card--ds">
          <div class="proj-card__grid">
            <div class="proj-card__body proj-card__body--light">
              <span class="proj-card__label proj-card__label--yellow">PROJECT 03</span>
              <h3 class="proj-card__title">The Design System</h3>
              <p class="proj-card__desc-long">One source of truth: tokens for color, type and spacing; 30+ accessible primitives; a theme architecture that themes the whole app from a handful of variables. The reason the team ships 40% faster.</p>
              <div class="proj-card__chips">
                <span class="proj-chip proj-chip--newsprint">Tokens</span>
                <span class="proj-chip proj-chip--newsprint">Primitives</span>
                <span class="proj-chip proj-chip--newsprint">Theming</span>
                <span class="proj-chip proj-chip--newsprint">Docs</span>
              </div>
            </div>
            <!-- DS preview pane -->
            <div aria-hidden="true" class="proj-card__screen proj-card__screen--ds">
              <div class="ds-preview__swatches">
                <span class="ds-preview__swatch" style="background:#E8331C" />
                <span class="ds-preview__swatch" style="background:#1B4DDB" />
                <span class="ds-preview__swatch" style="background:#FFD300" />
                <span class="ds-preview__swatch" style="background:#15120E" />
              </div>
              <div class="ds-preview__type">
                <div class="ds-preview__abc">Aa Bb Cc</div>
                <div class="ds-preview__scale">type / scale / 1.25</div>
              </div>
              <div class="ds-preview__space">
                <span class="ds-preview__dot" style="width:8px;height:8px" />
                <span class="ds-preview__dot" style="width:16px;height:16px" />
                <span class="ds-preview__dot" style="width:24px;height:24px" />
                <span class="ds-preview__dot" style="width:32px;height:32px" />
                <span class="ds-preview__spacelabel">space · 4 8 12 16</span>
              </div>
              <div class="ds-preview__components">
                <span class="ds-preview__chip ds-preview__chip--dark">Button</span>
                <span class="ds-preview__chip ds-preview__chip--light">Input</span>
                <span class="ds-preview__chip ds-preview__chip--light">Modal</span>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- ===== OPEN SOURCE + CERTS ===== -->
    <section aria-labelledby="os-h" class="community">
      <div aria-hidden="true" class="community__blob" />
      <div class="section-wrap">

        <!-- Open Source -->
        <div>
          <div data-reveal>
            <span class="section-label section-label--yellow">05 — GIVING BACK</span>
            <h2 id="os-h" class="community__heading">Open source</h2>
          </div>
          <div class="os-grid">
            <div data-reveal class="os-card os-card--blue" style="transform:rotate(-1.5deg)">
              <div class="os-card__title">Nuxt Docs</div>
              <p class="os-card__text">Contributed documentation improvements to the Nuxt ecosystem — clearer guides for the next dev.</p>
            </div>
            <div data-reveal class="os-card os-card--red" style="transform:rotate(1.5deg)">
              <div class="os-card__title">Vue Ecosystem</div>
              <p class="os-card__text">Active in the Vue community — issues, discussions, and helping others ship.</p>
            </div>
            <div data-reveal class="os-card os-card--yellow" style="transform:rotate(-1deg)">
              <div class="os-card__title">Always Learning</div>
              <p class="os-card__text">Treat every PR as a chance to learn in public and level up the people around me.</p>
            </div>
          </div>
        </div>

        <!-- Certs -->
        <div class="certs-section">
          <div data-reveal>
            <span class="section-label section-label--red">06 — THE BADGES</span>
            <h3 class="certs-section__heading">Certifications</h3>
          </div>
          <div class="certs-grid">
            <div
              v-for="c in certs"
              :key="c.org + c.name"
              data-reveal
              class="cert-card"
              :style="{ background: c.bg, color: c.fg, transform: `rotate(${c.rot})` }"
            >
              <span aria-hidden="true" class="cert-card__dot" :style="{ background: c.fg }" />
              <div class="cert-card__org">{{ c.org }}</div>
              <div class="cert-card__name">{{ c.name }}</div>
              <div class="cert-card__earned">★ EARNED</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section id="contact" aria-labelledby="contact-h" class="contact">
      <div aria-hidden="true" class="contact__blob" />
      <span aria-hidden="true" class="contact__star">★</span>
      <div class="section-wrap contact__inner">
        <span data-reveal class="section-label section-label--dark">07 — SAY HELLO</span>
        <h2 id="contact-h" data-reveal class="contact__heading">
          Let's build<br>something <span class="contact__awesome">awesome</span>
        </h2>
        <p data-reveal class="contact__sub">Got a product that needs a front-end with taste <em>and</em> teeth? My inbox is open.</p>
        <div class="contact__ctas">
          <a href="mailto:hello@suba.sh" class="contact__btn contact__btn--primary">✉ Email me</a>
          <a href="https://suba.sh" target="_blank" rel="noopener" class="contact__btn contact__btn--secondary">↗ suba.sh</a>
        </div>
        <div class="contact__meta">
          <span class="contact__tag" style="transform:rotate(-1deg)">✦ hello@suba.sh</span>
          <span class="contact__tag" style="transform:rotate(1deg)">✦ Visakhapatnam, India</span>
          <span class="contact__tag" style="transform:rotate(-1deg)">✦ Open to work</span>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
      <span class="footer__name">V. VENKATA SUBASH<span class="footer__sep"> · </span><span class="footer__role">Senior Fullstack Developer</span></span>
      <span class="footer__copy">Hand-coded, no templates. © 2026 — Code · Design · Repeat.</span>
    </footer>

  </div>
</template>

<style>
/* ── Keyframes ─────────────────────────────────────────────────────────────── */
@keyframes pf-marquee { to { transform: translateX(-50%); } }
@keyframes pf-floaty  { 0%,100%{ transform:translateY(0) rotate(12deg) } 50%{ transform:translateY(-12px) rotate(12deg) } }

/* ── Base ──────────────────────────────────────────────────────────────────── */
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--color-newsprint);
  color: var(--color-ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
/* Newsprint grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: .06;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
::selection { background: var(--color-marker); color: var(--color-ink); }
a { color: inherit; }
:focus-visible { outline: 4px solid var(--color-blueprint); outline-offset: 3px; }
img { display: block; max-width: 100%; }
* { box-sizing: border-box; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
  html { scroll-behavior: auto; }
}

/* ── Shared ────────────────────────────────────────────────────────────────── */
.section-wrap {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(56px,8vw,110px) clamp(16px,4vw,48px);
}
.section-label {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  padding: 6px 12px;
}
.section-label--red    { background: var(--color-pow-red);   color: var(--color-paper); }
.section-label--dark   { background: var(--color-ink);       color: var(--color-marker); }
.section-label--yellow { background: var(--color-marker);    color: var(--color-ink); }
.section-label--blue   { background: var(--color-blueprint); color: var(--color-paper); }

/* ── NAV ───────────────────────────────────────────────────────────────────── */
.nav {
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px clamp(16px,4vw,48px);
  background: var(--color-ink);
  border-bottom: 4px solid var(--color-ink);
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav-logo__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: var(--color-pow-red);
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: 22px;
  border: 3px solid var(--color-paper);
  transform: rotate(-6deg);
  box-shadow: 3px 3px 0 var(--color-blueprint);
}
.nav-logo__name {
  font-family: var(--font-heading);
  color: var(--color-newsprint);
  letter-spacing: .5px;
  font-size: 15px;
}
.nav-logo__dot { color: var(--color-marker); }

/* Desktop links */
.nav-links {
  display: none;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.nav-links__item {
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  color: var(--color-newsprint);
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}
.nav-links__item:hover { color: var(--color-marker); border-color: var(--color-marker); }
.nav-links__cta {
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 13px;
  color: var(--color-ink);
  background: var(--color-marker);
  padding: 9px 16px;
  border: 3px solid var(--color-paper);
  box-shadow: 3px 3px 0 var(--color-pow-red);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}
.nav-links__cta:hover { transform: translate(-1px,-1px); box-shadow: 5px 5px 0 var(--color-pow-red); }

/* Hamburger */
.nav-burger {
  display: grid;
  place-items: center;
  width: 46px;
  height: 42px;
  background: var(--color-marker);
  color: var(--color-ink);
  border: 3px solid var(--color-paper);
  box-shadow: 3px 3px 0 var(--color-pow-red);
  cursor: pointer;
  appearance: none;
  padding: 0;
}
.nav-burger__icon { font-family: var(--font-display); font-size: 20px; line-height: 1; }

/* Drawer */
.nav-drawer {
  overflow: hidden;
  max-height: 0;
  background: var(--color-blueprint);
  border-bottom: 0px solid var(--color-ink);
  position: sticky;
  top: 66px;
  z-index: 190;
  transition: max-height .32s cubic-bezier(.2,.9,.3,1.1), border-bottom-width .32s;
}
.nav-drawer--open { max-height: 420px; border-bottom-width: 4px; }
.nav-drawer__list { list-style: none; margin: 0; padding: 14px 16px; display: grid; gap: 8px; }
.nav-drawer__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 19px;
  text-transform: uppercase;
  color: var(--color-newsprint);
  background: var(--color-ink);
  padding: 13px 16px;
  border: 3px solid var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-marker);
}
.nav-drawer__arrow { color: var(--color-marker); }

@media (min-width: 768px) {
  .nav-links { display: flex; }
  .nav-burger, .nav-drawer { display: none; }
}

/* ── HERO ──────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  background: var(--color-blueprint);
  border-bottom: 6px solid var(--color-ink);
  overflow: hidden;
}
/* Decorative blobs */
.hero__blob {
  position: absolute;
  pointer-events: none;
}
.hero__blob--dots {
  right: -60px; top: -40px;
  width: 420px; height: 420px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-ink) 28%, transparent 30%);
  background-size: 20px 20px;
  opacity: .18;
}
.hero__blob--circle {
  left: -80px; bottom: 80px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background: var(--color-marker);
  opacity: .85;
  mix-blend-mode: multiply;
}
.hero__blob--dot-white {
  left: 12%; top: 30px;
  width: 120px; height: 120px;
  background-image: radial-gradient(#fff 30%, transparent 32%);
  background-size: 12px 12px;
  opacity: .3;
}

/* Mobile: portrait stage fills screen, text overlaid on top */
.hero__inner {
  position: relative;
}
.hero__portrait {
  position: relative;
  height: 70vh;
  max-height: 600px;
  min-height: 468px;
}
.hero__text {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 5;
  padding: 16px 18px 0;
}
/* On mobile, desc/ctas/badges are hidden inside hero__text — they live in hero__mobile-body */
.hero__desc,
.hero__ctas,
.hero__badges { display: none; }

/* Mobile body below portrait */
.hero__mobile-body {
  position: relative;
  z-index: 2;
  padding: 26px 18px 30px;
}
.hero__mobile-body .hero__desc { display: block; }
.hero__mobile-body .hero__ctas { display: grid; gap: 11px; margin-top: 22px; }
.hero__mobile-body .hero__badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }

.hero__eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 2px;
  background: var(--color-ink);
  color: var(--color-marker);
  padding: 5px 10px;
  transform: rotate(-2deg);
  border: 2px solid var(--color-paper);
}
.hero__name {
  margin: 12px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -.5px;
  color: var(--color-newsprint);
  text-transform: uppercase;
  font-size: clamp(48px, 16vw, 68px);
  text-shadow: 3px 3px 0 var(--color-ink), 6px 6px 0 var(--color-marker);
}
.hero__role {
  margin: 14px 0 0;
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 15px;
  color: var(--color-ink);
  background: var(--color-marker);
  padding: 7px 12px;
  transform: rotate(-1deg);
  box-shadow: 4px 4px 0 var(--color-ink);
}
.hero__desc {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-newsprint);
  line-height: 1.5;
  margin: 0;
}
.hero__btn {
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 16px;
  padding: 15px;
  border: 3px solid var(--color-ink);
  box-shadow: 5px 5px 0 var(--color-ink);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}
.hero__btn:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--color-ink); }
.hero__btn:active { transform: translate(4px,4px); box-shadow: 1px 1px 0 var(--color-ink); }
.hero__btn--primary { color: var(--color-paper); background: var(--color-pow-red); }
.hero__btn--secondary { color: var(--color-ink); background: var(--color-newsprint); }
.hero__badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  padding: 6px 9px;
}
.hero__badge--dark   { background: var(--color-ink);       color: var(--color-paper);     border: 2px solid var(--color-marker); }
.hero__badge--white  { background: var(--color-paper);     color: var(--color-ink);       border: 2px solid var(--color-ink); }
.hero__badge--yellow { background: var(--color-marker);    color: var(--color-ink);       border: 2px solid var(--color-ink); }
.hero__badge--red    { background: var(--color-pow-red);   color: var(--color-paper);     border: 2px solid var(--color-ink); }

/* Portrait elements */
.hero__plate {
  position: absolute;
  border: 4px solid var(--color-ink);
}
.hero__plate--yellow {
  inset: 6% -4% 0 4%;
  background: var(--color-marker);
  transform: rotate(4deg);
  box-shadow: 4px 4px 0 var(--color-ink);
}
.hero__plate--red {
  inset: 2% 2% 4% -4%;
  background: var(--color-pow-red);
  transform: rotate(-3deg);
  box-shadow: -4px 4px 0 var(--color-ink);
}
.hero__frame {
  position: absolute;
  inset: 0;
  margin: 0;
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-ink);
  background: var(--color-blueprint);
  transform: rotate(-1deg);
  overflow: hidden;
}
.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 56% 34%;
}
.hero__grad {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(21,18,14,.82) 0%, rgba(21,18,14,.5) 26%, rgba(21,18,14,0) 54%);
}
.hero__caption {
  position: absolute;
  left: 8px; bottom: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 3px 7px;
}

/* Stickers */
.hero__stk {
  position: absolute;
  z-index: 4;
  font-family: var(--font-display);
  font-size: 14px;
  padding: 8px 12px;
  border: 3px solid var(--color-ink);
}
.hero__stk--fps  { top: -12px; left: -6px;   background: var(--color-paper);     color: var(--color-ink);     box-shadow: 3px 3px 0 var(--color-blueprint); transform: rotate(-12deg); }
.hero__stk--wcag { bottom: -10px; right: -4px; background: var(--color-marker);    color: var(--color-ink);     box-shadow: 3px 3px 0 var(--color-ink);        transform: rotate(8deg); }
.hero__stk--gql  { display: none; } /* shown on desktop only */
.hero__stk--os   { display: none; }

/* ── Desktop hero ────────────────────────────────────────────────── */
@media (min-width: 768px) {
  .hero {
    padding: clamp(28px,5vw,64px) clamp(16px,4vw,48px) 0;
  }
  .hero__inner {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: clamp(16px,3vw,40px);
    align-items: center;
    min-height: min(78vh, 720px);
    max-width: 1240px;
    margin: 0 auto;
  }
  .hero__text {
    position: static;
    padding: 0 0 48px;
    z-index: auto;
  }
  .hero__desc,
  .hero__ctas,
  .hero__badges { display: revert; }
  .hero__desc { font-size: clamp(15px,1.5vw,18px); margin: 22px 0 0; max-width: 30ch; }
  .hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
  .hero__btn  { display: inline-flex; align-items: center; padding: 15px 26px; }
  .hero__badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
  .hero__badge { font-size: 12px; padding: 7px 11px; }
  .hero__mobile-body { display: none; }
  .hero__portrait {
    position: relative;
    height: auto;
    max-height: none;
    min-height: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero__frame {
    position: relative;
    inset: auto;
    width: 100%;
    transform: rotate(-1deg);
  }
  .hero__photo {
    height: auto;
    object-fit: initial;
    object-position: initial;
  }
  .hero__grad { display: none; }
  .hero__name { font-size: clamp(44px,8.2vw,118px); text-shadow: 5px 5px 0 var(--color-ink), 9px 9px 0 var(--color-pow-red); }
  .hero__role { font-size: clamp(16px,2.2vw,24px); }
  .hero__stk--gql { display: inline-block; bottom: -18px; left: 8%;  background: var(--color-pow-red);   color: var(--color-paper); box-shadow: 4px 4px 0 var(--color-marker); transform: rotate(6deg); }
  .hero__stk--os  { display: inline-block; bottom: 14%; right: -22px; background: var(--color-blueprint); color: var(--color-paper); border-color: var(--color-paper); box-shadow: 4px 4px 0 var(--color-ink);    transform: rotate(-7deg); font-size: 13px; }
  .hero__stk--fps  { font-size: 15px; top: -22px; left: -26px; box-shadow: 4px 4px 0 var(--color-blueprint); }
  .hero__stk--wcag { font-size: 14px; top: 32%; right: -30px; bottom: auto; transform: rotate(9deg); box-shadow: 4px 4px 0 var(--color-ink); }
}

/* ── MARQUEE ───────────────────────────────────────────────────────────────── */
.marquee-strip {
  background: var(--color-ink);
  border-bottom: 5px solid var(--color-ink);
  overflow: hidden;
  padding: 12px 0;
}
.marquee-strip__track {
  display: flex;
  width: max-content;
  animation: pf-marquee 22s linear infinite;
  font-family: var(--font-display);
  font-size: clamp(18px,2.5vw,26px);
  letter-spacing: 1px;
  color: var(--color-newsprint);
  text-transform: uppercase;
}
.marquee-strip__content { white-space: nowrap; }
.mc--y { color: var(--color-marker); }
.mc--r { color: var(--color-pow-red); }
.mc--b { color: var(--color-blueprint); -webkit-text-stroke: 1px var(--color-paper); }

/* ── ABOUT ─────────────────────────────────────────────────────────────────── */
.about {
  position: relative;
  background: var(--color-newsprint);
  overflow: hidden;
}
.about__blob {
  position: absolute;
  right: -40px; top: 40px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-blueprint) 26%, transparent 28%);
  background-size: 16px 16px;
  opacity: .5;
  pointer-events: none;
}
.about__label-wrap { display: inline-block; transform: translateY(var(--ty,0px)) rotate(-2deg); }
.about__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(36px,7vw,92px);
  line-height: .9;
  letter-spacing: -1px;
}
.about__feel    { color: var(--color-blueprint); -webkit-text-stroke: 2px var(--color-ink); }
.about__perform { background: var(--color-marker); padding: 0 8px; box-shadow: 4px 4px 0 var(--color-ink); }
.about__grid {
  display: grid;
  gap: clamp(20px,4vw,56px);
  margin-top: 48px;
  align-items: start;
}
@media (min-width: 768px) {
  .about__grid { grid-template-columns: 1.4fr 1fr; }
}
.about__lead {
  font-size: clamp(17px,1.7vw,21px);
  line-height: 1.6;
  font-weight: 500;
  margin: 0 0 18px;
}
.about__body { font-size: clamp(15px,1.4vw,18px); line-height: 1.7; margin: 0 0 16px; color: #312b22; }
.about__cards { position: relative; display: grid; gap: 18px; }
.about__quote-card {
  transform: translateY(var(--ty,0px)) rotate(2deg);
  background: var(--color-ink);
  color: var(--color-newsprint);
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-blueprint);
  padding: 22px;
}
.about__quote { margin: 0; font-family: var(--font-hand); font-size: 24px; color: var(--color-marker); line-height: 1; }
.about__quote-sub { margin: 10px 0 0; font-size: 14px; line-height: 1.5; color: var(--color-dim); }
.about__stat-card {
  transform: translateY(var(--ty,0px)) rotate(-2deg);
  background: var(--color-paper);
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-pow-red);
  padding: 20px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}
.about__stat-num      { font-family: var(--font-display); font-size: 38px; line-height: 1; }
.about__stat-num--blue{ color: var(--color-blueprint); }
.about__stat-num--red { color: var(--color-pow-red); }
.about__stat-label    { font-size: 12px; font-weight: 700; text-transform: uppercase; }
.about__aside {
  position: absolute;
  right: -6px; top: -30px;
  font-family: var(--font-hand);
  font-size: 26px;
  color: var(--color-pow-red);
  transform: rotate(8deg);
}

/* ── SKILLS ────────────────────────────────────────────────────────────────── */
.skills {
  position: relative;
  background: var(--color-pow-red);
  border-top: 6px solid var(--color-ink);
  border-bottom: 6px solid var(--color-ink);
  overflow: hidden;
}
.skills__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--color-ink) 14%, transparent 16%);
  background-size: 26px 26px;
  opacity: .16;
  pointer-events: none;
}
.skills .section-wrap { padding-bottom: 0; }
.skills__header { transform: translateY(var(--ty,0px)); text-align: center; margin-bottom: clamp(28px,4vw,46px); padding-bottom: 0; }
.skills__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(40px,7vw,94px);
  line-height: .9;
  color: var(--color-newsprint);
  text-shadow: 4px 4px 0 var(--color-ink);
}
.skills__swipe {
  display: inline-block;
  margin-top: 10px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  background: var(--color-ink);
  color: var(--color-marker);
  padding: 4px 10px;
  transform: rotate(-1deg);
}
@media (min-width: 768px) { .skills__swipe { display: none; } }

/* Mobile: horizontal carousel */
.skills-grid {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 8px clamp(16px,4vw,48px) 32px;
  margin: 0 calc(-1 * clamp(16px,4vw,48px));
}
.skills-grid::-webkit-scrollbar { display: none; }
.skills-grid > * { flex: 0 0 82%; scroll-snap-align: center; }

@media (min-width: 768px) {
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    overflow: visible;
    padding: 0 clamp(16px,4vw,48px) clamp(56px,8vw,110px);
    margin: 0 calc(-1 * clamp(16px,4vw,48px));
    gap: clamp(16px,2.5vw,26px);
  }
  .skills-grid > * { flex: none; }
}

.skill-card {
  background: var(--color-newsprint);
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-ink);
  padding: 20px;
  transform-origin: center;
  transition: transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-spring);
}
.skill-card:hover { transform: translate(-3px,-3px) rotate(0deg) !important; box-shadow: 11px 11px 0 var(--color-ink); }
.skill-card__header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.skill-card__icon {
  width: 30px; height: 30px;
  display: grid;
  place-items: center;
  color: var(--color-paper);
  border: 3px solid var(--color-ink);
  font-family: var(--font-display);
  font-size: 15px;
  flex-shrink: 0;
}
.skill-card__name { margin: 0; font-family: var(--font-heading); font-size: 17px; text-transform: uppercase; letter-spacing: .5px; }
.skill-card__chips { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-card__chip {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12.5px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  padding: 5px 9px;
  box-shadow: 2px 2px 0 var(--color-ink);
}

/* ── EXPERIENCE ────────────────────────────────────────────────────────────── */
.work {
  position: relative;
  background: var(--color-blueprint);
  border-bottom: 6px solid var(--color-ink);
  overflow: hidden;
}
.work__blob {
  position: absolute;
  left: -50px; bottom: -30px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-marker) 30%, transparent 32%);
  background-size: 18px 18px;
  opacity: .5;
  pointer-events: none;
}
.work__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(40px,7vw,94px);
  line-height: .9;
  color: var(--color-newsprint);
  text-shadow: 4px 4px 0 var(--color-ink);
}
.work-list { display: grid; gap: clamp(24px,4vw,40px); margin-top: 48px; }
.work-card {
  border: 5px solid var(--color-ink);
  box-shadow: 12px 12px 0 var(--color-ink);
  position: relative;
}
.work-card--light { background: var(--color-newsprint); }
.work-card--dark  { background: var(--color-ink); color: var(--color-newsprint); box-shadow: 12px 12px 0 var(--color-pow-red); }
.work-card__badge {
  position: absolute;
  top: -18px; left: -14px;
  font-family: var(--font-display);
  font-size: 14px;
  background: var(--color-pow-red);
  color: var(--color-paper);
  padding: 6px 12px;
  border: 3px solid var(--color-ink);
  transform: rotate(-6deg);
  z-index: 2;
}
.work-card__inner { padding: clamp(22px,3vw,34px); }
.work-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}
.work-card__company {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(30px,4.6vw,56px);
  line-height: .95;
  text-transform: uppercase;
}
.work-card__company--accent { color: var(--color-pow-red); }
.work-card__company--light  { color: var(--color-newsprint); }
.work-card__company--yellow { color: var(--color-marker); }
.work-card__period { font-family: var(--font-mono); font-weight: 700; font-size: 14px; padding: 6px 10px; }
.work-card__period--dark   { background: var(--color-ink); color: var(--color-marker); }
.work-card__period--yellow { background: var(--color-marker); color: var(--color-ink); }
.work-card__role { margin: 6px 0 0; font-family: var(--font-heading); font-size: 15px; text-transform: uppercase; letter-spacing: .5px; }
.work-card__role--blue   { color: var(--color-blueprint); }
.work-card__role--yellow { color: var(--color-marker); }
.work-card__desc { margin: 14px 0 0; font-size: clamp(15px,1.4vw,18px); line-height: 1.6; max-width: 62ch; }
.work-card__desc--dim { color: var(--color-dim); }
.work-card__tags { list-style: none; margin: 18px 0 0; padding: 0 0 26px; display: flex; flex-wrap: wrap; gap: 10px; }
.tag { font-family: var(--font-mono); font-weight: 700; font-size: 12.5px; padding: 8px 12px; border: 2px solid; }
.tag--dark     { background: var(--color-ink);       color: var(--color-paper);     border-color: var(--color-ink); }
.tag--yellow   { background: var(--color-marker);    color: var(--color-ink);       border-color: var(--color-ink); }
.tag--red      { background: var(--color-pow-red);   color: var(--color-paper);     border-color: var(--color-ink); }
.tag--white    { background: var(--color-paper);     color: var(--color-ink);       border-color: var(--color-ink); }
.tag--blue     { background: var(--color-blueprint); color: var(--color-paper);     border-color: var(--color-paper); }
.tag--newsprint{ background: var(--color-newsprint); color: var(--color-ink);       border-color: var(--color-paper); }

/* ── PROJECTS ──────────────────────────────────────────────────────────────── */
.projects { background: var(--color-newsprint); }
.projects__header { text-align: center; margin-bottom: 0; }
.projects__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(40px,7vw,98px);
  line-height: .88;
  letter-spacing: -1px;
}
.projects__heading--red { color: var(--color-pow-red); }
.projects__sub { margin: 14px auto 0; max-width: 52ch; font-size: 16px; font-weight: 500; color: #312b22; }

.proj-card {
  margin-top: clamp(32px,4vw,54px);
  border: 5px solid var(--color-ink);
  overflow: hidden;
}
.proj-card--streaming { background: var(--color-ink); box-shadow: 12px 12px 0 var(--color-blueprint); }
.proj-card--fuel      { background: var(--color-paper); box-shadow: 12px 12px 0 var(--color-pow-red); }
.proj-card--ds        { background: var(--color-blueprint); box-shadow: 12px 12px 0 var(--color-ink); }

.proj-card__grid {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .proj-card--streaming .proj-card__grid { grid-template-columns: 1.1fr 1fr; }
  .proj-card--ds        .proj-card__grid { grid-template-columns: 1.1fr 1fr; }
  .proj-card--fuel      .proj-card__grid { grid-template-columns: 1fr 1.1fr; }
}

.proj-card__body { padding: clamp(22px,3vw,40px); color: var(--color-newsprint); }
.proj-card__body--light { color: var(--color-newsprint); }
.proj-card__label {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 13px;
  padding: 5px 10px;
}
.proj-card__label--red    { background: var(--color-pow-red); color: var(--color-paper); }
.proj-card__label--blue   { background: var(--color-blueprint); color: var(--color-paper); }
.proj-card__label--yellow { background: var(--color-marker); color: var(--color-ink); }
.proj-card__title {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-size: clamp(28px,3.6vw,46px);
  line-height: .95;
  text-transform: uppercase;
}
.proj-card__title--dark { color: var(--color-ink); }
.proj-card__blocks { display: grid; gap: 14px; margin-top: 20px; }
.proj-card__key { font-family: var(--font-mono); font-weight: 700; font-size: 12px; }
.proj-card__key--yellow { color: var(--color-marker); }
.proj-card__key--red    { color: var(--color-pow-red); }
.proj-card__text { margin: 4px 0 0; font-size: 14.5px; line-height: 1.55; color: #312b22; }
.proj-card__text--dim { color: var(--color-dim); }
.proj-card__desc-long { margin: 18px 0 0; font-size: 15px; line-height: 1.6; color: #e7eaff; max-width: 46ch; }
.proj-card__chips { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 clamp(22px,3vw,40px) 26px; }

.proj-chip {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12px;
  background: var(--color-newsprint);
  color: var(--color-ink);
  padding: 6px 10px;
}
.proj-chip--dark    { background: var(--color-ink);       color: var(--color-paper); }
.proj-chip--newsprint { background: var(--color-newsprint); color: var(--color-ink); }

/* Screen pane — streaming */
.proj-card__screen {
  position: relative;
  min-height: 200px;
}
@media (min-width: 640px) { .proj-card__screen { min-height: 280px; } }
.proj-card__screen--stream {
  background: var(--color-blueprint);
  border-top: 5px solid var(--color-ink);
  background-image:
    repeating-linear-gradient(0deg, rgba(0,0,0,.25) 0 2px, transparent 2px 5px),
    radial-gradient(var(--color-paper) 18%, transparent 20%);
  background-size: 100% 5px, 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 640px) {
  .proj-card__screen--stream { border-top: none; border-left: 5px solid var(--color-ink); }
}
.proj-screen__badge {
  position: absolute;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  padding: 4px 8px;
}
.proj-screen__badge--live  { top: 14px; left: 14px;  background: var(--color-pow-red);   color: var(--color-paper); }
.proj-screen__badge--fps   { top: 14px; right: 14px; background: var(--color-ink);       color: var(--color-marker); }
.proj-screen__badge--coord { top: 12px; left: 12px;  background: var(--color-ink);       color: var(--color-marker); }
.proj-screen__badge--eta   { bottom: 12px; right: 12px; background: var(--color-pow-red); color: var(--color-paper); }
.proj-screen__play { font-family: var(--font-display); font-size: 42px; color: var(--color-paper); text-shadow: 3px 3px 0 var(--color-ink); }
.proj-screen__ws { position: absolute; bottom: 36px; left: 14px; font-family: var(--font-mono); font-size: 10px; color: var(--color-paper); opacity: .8; }
.proj-screen__progress {
  position: absolute;
  left: 14px; right: 14px; bottom: 14px;
  height: 8px;
  background: var(--color-ink);
  border: 2px solid var(--color-paper);
}
.proj-screen__fill { height: 100%; background: var(--color-pow-red); }

/* Screen pane — map */
.proj-card__screen--map {
  background: var(--color-marker);
  border-bottom: 5px solid var(--color-ink);
  background-image:
    linear-gradient(var(--color-ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-ink) 1px, transparent 1px);
  background-size: 28px 28px;
  background-position: center;
}
@media (min-width: 640px) {
  .proj-card__screen--map { border-bottom: none; border-right: 5px solid var(--color-ink); }
}

/* Screen pane — design system */
.proj-card__screen--ds {
  background: var(--color-newsprint);
  border-top: 5px solid var(--color-ink);
  padding: 22px;
  display: grid;
  gap: 12px;
  align-content: start;
}
@media (min-width: 640px) {
  .proj-card__screen--ds { border-top: none; border-left: 5px solid var(--color-ink); }
}
.ds-preview__swatches { display: flex; gap: 8px; }
.ds-preview__swatch   { flex: 1; height: 34px; border: 3px solid var(--color-ink); }
.ds-preview__type     { background: var(--color-paper); border: 3px solid var(--color-ink); padding: 10px; }
.ds-preview__abc      { font-family: var(--font-display); font-size: 22px; line-height: 1; }
.ds-preview__scale    { font-family: var(--font-mono); font-size: 10px; margin-top: 2px; }
.ds-preview__space    { display: flex; gap: 8px; align-items: flex-end; }
.ds-preview__dot      { background: var(--color-ink); display: inline-block; }
.ds-preview__spacelabel { font-family: var(--font-mono); font-size: 10px; }
.ds-preview__components { display: flex; gap: 8px; flex-wrap: wrap; }
.ds-preview__chip {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  padding: 6px 10px;
  border: 2px solid var(--color-ink);
}
.ds-preview__chip--dark  { background: var(--color-ink); color: var(--color-paper); }
.ds-preview__chip--light { background: var(--color-paper); color: var(--color-ink); }

/* ── COMMUNITY ─────────────────────────────────────────────────────────────── */
.community {
  position: relative;
  background: var(--color-ink);
  color: var(--color-newsprint);
  border-top: 6px solid var(--color-ink);
  overflow: hidden;
}
.community__blob {
  position: absolute;
  right: -30px; top: 30px;
  width: 220px; height: 220px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-blueprint) 26%, transparent 28%);
  background-size: 16px 16px;
  opacity: .4;
  pointer-events: none;
}
.community__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(36px,6vw,80px);
  line-height: .9;
  color: var(--color-newsprint);
}
.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  margin-top: 28px;
}
.os-card {
  background: var(--color-newsprint);
  color: var(--color-ink);
  border: 4px solid var(--color-newsprint);
  padding: 20px;
  transition: transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-spring);
}
.os-card--blue   { box-shadow: 6px 6px 0 var(--color-blueprint); }
.os-card--red    { box-shadow: 6px 6px 0 var(--color-pow-red); }
.os-card--yellow { box-shadow: 6px 6px 0 var(--color-marker); }
.os-card:hover   { transform: translate(-2px,-2px); }
.os-card--blue:hover   { box-shadow: 9px 9px 0 var(--color-blueprint); }
.os-card--red:hover    { box-shadow: 9px 9px 0 var(--color-pow-red); }
.os-card--yellow:hover { box-shadow: 9px 9px 0 var(--color-marker); }
.os-card__title { font-family: var(--font-display); font-size: 20px; text-transform: uppercase; }
.os-card__text  { margin: 8px 0 0; font-size: 14px; line-height: 1.5; }

.certs-section { margin-top: 48px; }
.certs-section__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(30px,5vw,64px);
  line-height: .9;
  color: var(--color-newsprint);
}
.certs-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}
.cert-card {
  width: clamp(140px, calc(50% - 8px), 172px);
  border: 4px solid var(--color-ink);
  box-shadow: 5px 5px 0 var(--color-ink);
  padding: 16px;
  position: relative;
  transition: transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-spring);
}
.cert-card:hover { transform: translate(-2px,-3px) rotate(0deg) !important; box-shadow: 8px 9px 0 var(--color-ink); }
.cert-card__dot {
  position: absolute;
  top: 8px; right: 8px;
  width: 22px; height: 22px;
  border-radius: 50%;
  opacity: .25;
}
.cert-card__org  { font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: 1px; opacity: .8; }
.cert-card__name { font-family: var(--font-display); font-size: 21px; line-height: .95; text-transform: uppercase; margin-top: 8px; }
.cert-card__earned {
  margin-top: 12px;
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  border: 2px solid currentColor;
  padding: 3px 7px;
}

/* ── CONTACT ───────────────────────────────────────────────────────────────── */
.contact {
  position: relative;
  background: var(--color-marker);
  border-top: 6px solid var(--color-ink);
  overflow: hidden;
}
.contact__blob {
  position: absolute;
  left: -60px; top: -40px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-ink) 24%, transparent 26%);
  background-size: 22px 22px;
  opacity: .16;
  pointer-events: none;
}
.contact__star {
  position: absolute;
  right: 8%; top: 18%;
  font-family: var(--font-display);
  font-size: 34px;
  color: var(--color-pow-red);
  -webkit-text-stroke: 2px var(--color-ink);
  animation: pf-floaty 4s ease-in-out infinite;
}
.contact__inner { text-align: center; }
.contact__heading {
  margin: 16px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(44px,9vw,128px);
  line-height: .84;
  letter-spacing: -1px;
}
.contact__awesome { color: var(--color-pow-red); text-shadow: 4px 4px 0 var(--color-ink); }
.contact__sub { margin: 22px auto 0; max-width: 48ch; font-size: clamp(16px,1.6vw,20px); font-weight: 600; color: var(--color-ink); }
.contact__ctas { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 34px; }
.contact__btn {
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 17px;
  padding: 17px 30px;
  border: 3px solid var(--color-ink);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}
.contact__btn--primary { color: var(--color-marker); background: var(--color-ink); box-shadow: 7px 7px 0 var(--color-pow-red); }
.contact__btn--secondary { color: var(--color-ink); background: var(--color-paper); box-shadow: 7px 7px 0 var(--color-blueprint); }
.contact__btn--primary:hover  { transform: translate(-2px,-2px); box-shadow: 11px 11px 0 var(--color-pow-red); }
.contact__btn--secondary:hover{ transform: translate(-2px,-2px); box-shadow: 11px 11px 0 var(--color-blueprint); }
.contact__meta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 30px; }
.contact__tag {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 13px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  padding: 8px 12px;
  display: inline-block;
}

/* ── FOOTER ────────────────────────────────────────────────────────────────── */
.footer {
  background: var(--color-ink);
  color: var(--color-newsprint);
  padding: 30px clamp(16px,4vw,48px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-top: 5px solid var(--color-marker);
}
.footer__name { font-family: var(--font-heading); font-size: 15px; }
.footer__sep  { color: var(--color-marker); }
.footer__role { font-weight: 400; font-family: var(--font-mono); font-size: 12px; }
.footer__copy { font-family: var(--font-mono); font-size: 12px; color: #aaa297; }
</style>
