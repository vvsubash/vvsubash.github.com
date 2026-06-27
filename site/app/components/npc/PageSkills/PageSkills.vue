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
