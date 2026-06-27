<script setup lang="ts">
const certs = [
  { name: 'DP-900',          org: 'MICROSOFT',   bg: '#1B4DDB', fg: '#FFFFFF', rot: '-3deg' },
  { name: 'Responsive Web',  org: 'FREECODECAMP', bg: '#F3ECDC', fg: '#15120E', rot: '2deg' },
  { name: 'SQL',             org: 'HACKERRANK',  bg: '#E8331C', fg: '#FFFFFF', rot: '-2deg' },
  { name: 'SQL',             org: 'CODECADEMY',  bg: '#FFD300', fg: '#15120E', rot: '3deg' },
  { name: 'Vue',             org: 'CODECADEMY',  bg: '#F3ECDC', fg: '#15120E', rot: '-1.5deg' },
]
</script>

<template>
  <section aria-labelledby="os-h" class="community">
    <div aria-hidden="true" class="community__blob" />
    <div class="section-wrap">

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
</template>
