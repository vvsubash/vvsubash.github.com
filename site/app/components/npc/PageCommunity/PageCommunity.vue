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

<style>
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
.os-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; margin-top: 28px; }
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
.os-card:hover         { transform: translate(-2px,-2px); }
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
.certs-grid { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 26px; }
.cert-card {
  width: clamp(140px, calc(50% - 8px), 172px);
  border: 4px solid var(--color-ink);
  box-shadow: 5px 5px 0 var(--color-ink);
  padding: 16px;
  position: relative;
  transition: transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-spring);
}
.cert-card:hover   { transform: translate(-2px,-3px) rotate(0deg) !important; box-shadow: 8px 9px 0 var(--color-ink); }
.cert-card__dot    { position: absolute; top: 8px; right: 8px; width: 22px; height: 22px; border-radius: 50%; opacity: .25; }
.cert-card__org    { font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: 1px; opacity: .8; }
.cert-card__name   { font-family: var(--font-display); font-size: 21px; line-height: .95; text-transform: uppercase; margin-top: 8px; }
.cert-card__earned { margin-top: 12px; display: inline-block; font-family: var(--font-mono); font-size: 10px; font-weight: 700; border: 2px solid currentColor; padding: 3px 7px; }
</style>
