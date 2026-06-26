<script setup lang="ts">
type Color = 'white' | 'yellow' | 'red'

interface Props {
  color?: Color
  rotate?: number
}

withDefaults(defineProps<Props>(), {
  color: 'white',
  rotate: -6,
})
</script>

<template>
  <span
    class="sticker m-wiggle"
    :class="`sticker--${color}`"
    :style="{ '--rot': `${rotate}deg`, transform: `rotate(${rotate}deg)` }"
  >
    <slot />
  </span>
</template>

<style scoped>
.sticker {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 15px;
  line-height: 1;
  padding: 8px 12px;
  border: 3px solid var(--color-ink);
  cursor: default;
}

/* white bg · ink text · blue shadow */
.sticker--white {
  background: var(--color-paper);
  color: var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-blueprint);
}

/* yellow bg · ink text · ink shadow */
.sticker--yellow {
  background: var(--color-marker);
  color: var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-ink);
}

/* red bg · white text · yellow shadow */
.sticker--red {
  background: var(--color-pow-red);
  color: var(--color-paper);
  box-shadow: 4px 4px 0 var(--color-marker);
}
</style>
