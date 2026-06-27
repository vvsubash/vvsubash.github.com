<script setup lang="ts">
const skills = [
  { name: 'Languages', tag: '{ }', color: '#E8331C', rot: '-1.5deg', items: ['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'] },
  { name: 'Frontend',  tag: '▤',   color: '#1B4DDB', rot: '1.5deg',  items: ['Vue', 'React', 'Nuxt'] },
  { name: 'Backend',   tag: '⇄',   color: '#15120E', rot: '-1deg',   items: ['Node.js', 'Express', 'GraphQL', 'REST', 'WebSockets', 'Prisma', 'Drizzle'] },
  { name: 'Databases', tag: '◳',   color: '#E8331C', rot: '1deg',    items: ['PostgreSQL', 'Hasura'] },
  { name: 'Tooling',   tag: '⌥',   color: '#1B4DDB', rot: '-1.5deg', items: ['Git', 'GitHub', 'CI/CD', 'Webpack', 'Vite'] },
  { name: 'Design & UX', tag: '✦', color: '#15120E', rot: '1.5deg',  items: ['Accessibility', 'Design Systems', 'Figma', 'Responsive'] },
]
</script>

<template>
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
</template>

<style>
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
.skill-card__name  { margin: 0; font-family: var(--font-heading); font-size: 17px; text-transform: uppercase; letter-spacing: .5px; }
.skill-card__chips { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-card__chip  {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12.5px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  padding: 5px 9px;
  box-shadow: 2px 2px 0 var(--color-ink);
}
</style>
