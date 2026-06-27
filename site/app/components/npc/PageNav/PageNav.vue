<script setup lang="ts">
const menuOpen = ref(false)
const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav aria-label="Primary" class="nav" id="top">
    <a href="#top" class="nav-logo" @click="menuOpen = false">
      <span aria-hidden="true" class="nav-logo__icon">V</span>
      <span class="nav-logo__name">SUBASH<span class="nav-logo__dot">.dev</span></span>
    </a>
    <div class="nav-links">
      <a v-for="l in navLinks" :key="l.href" :href="l.href" class="nav-links__item">{{ l.label }}</a>
      <a href="#contact" class="nav-links__cta">Say hi →</a>
    </div>
    <button type="button" :aria-expanded="menuOpen" aria-label="Toggle menu" class="nav-burger" @click="menuOpen = !menuOpen">
      <span aria-hidden="true" class="nav-burger__icon">{{ menuOpen ? '✕' : '≡' }}</span>
    </button>
  </nav>
  <div role="dialog" aria-label="Menu" class="nav-drawer" :class="{ 'nav-drawer--open': menuOpen }">
    <ul class="nav-drawer__list">
      <li v-for="l in navLinks" :key="l.href">
        <a :href="l.href" class="nav-drawer__link" @click="menuOpen = false">
          <span>{{ l.label }}</span><span aria-hidden="true" class="nav-drawer__arrow">→</span>
        </a>
      </li>
    </ul>
  </div>
</template>
