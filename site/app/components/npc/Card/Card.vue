<script setup lang="ts">
type Variant = 'newsprint' | 'paper' | 'yellow' | 'ink'
type Shadow = 'ink' | 'red' | 'blue' | 'yellow'

interface Props {
  variant?: Variant
  shadow?: Shadow
  lift?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'paper',
  shadow: 'ink',
  lift: false,
})
</script>

<template>
  <div
    class="card"
    :class="[`card--${variant}`, `card--shadow-${shadow}`, { 'card--lift': lift }]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  --shadow-color: var(--color-ink);
  border: 4px solid var(--color-ink);
  padding: clamp(20px, 3vw, 32px);
  box-shadow: 7px 7px 0 var(--shadow-color);
  transition:
    transform var(--duration-base) var(--ease-spring),
    box-shadow var(--duration-base) var(--ease-spring);
}

/* Variants — background + text color */
.card--newsprint { background: var(--color-newsprint); color: var(--color-ink); }
.card--paper     { background: var(--color-paper);     color: var(--color-ink); }
.card--yellow    { background: var(--color-marker);    color: var(--color-ink); }
.card--ink       { background: var(--color-ink);       color: var(--color-newsprint); }

/* Shadow token overrides */
.card--shadow-ink    { --shadow-color: var(--color-ink); }
.card--shadow-red    { --shadow-color: var(--color-pow-red); }
.card--shadow-blue   { --shadow-color: var(--color-blueprint); }
.card--shadow-yellow { --shadow-color: var(--color-marker); }

/* Hover lift */
.card--lift:hover {
  transform: translate(-4px, -5px);
  box-shadow: 11px 13px 0 var(--shadow-color);
}
</style>
