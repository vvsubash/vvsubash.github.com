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

const pageRef = ref<HTMLElement | null>(null)

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
    <npcPageNav />
    <npcPageHero />
    <npcPageMarquee />
    <npcPageAbout />
    <npcPageSkills />
    <npcPageWork />
    <npcPageProjects />
    <npcPageCommunity />
    <npcPageContact />
    <npcPageFooter />
  </div>
</template>

<style>
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
</style>
