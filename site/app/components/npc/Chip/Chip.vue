<script setup lang="ts">
type Variant = 'default' | 'highlighted' | 'active'

interface Props {
  variant?: Variant
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <span class="chip" :class="`chip--${variant}`">
    <slot />
  </span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12.5px;
  line-height: 1;
  padding: 5px 9px;
  border: 2px solid var(--color-ink);
  box-shadow: 2px 2px 0 var(--color-ink);
  white-space: nowrap;
}

.chip--default {
  background: var(--color-paper);
  color: var(--color-ink);
}

.chip--highlighted {
  background: var(--color-marker);
  color: var(--color-ink);
}

.chip--active {
  background: var(--color-blueprint);
  color: var(--color-paper);
}
</style>
