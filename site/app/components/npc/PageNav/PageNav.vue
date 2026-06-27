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

<style>
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
</style>
