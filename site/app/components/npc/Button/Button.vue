<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ink' | 'nav'
type Size = 'sm' | 'md'

interface Props {
  variant?: Variant
  size?: Size
  href?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})
defineSlots<
{
  'icon-left'?:() => any,
  'icon-right'?: () => any,
  default?: () => any
}
>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    :type="!href ? 'button' : undefined"
    :disabled="!href && disabled ? true : undefined"
    :aria-disabled="href && disabled ? 'true' : undefined"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--disabled': disabled }]"
  >
    <span v-if="$slots['icon-left']" class="btn__icon">
      <slot name="icon-left" />
    </span>
    <slot />
    <span v-if="$slots['icon-right']" class="btn__icon">
      <slot name="icon-right" />
    </span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-heading);
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition:
    transform var(--duration-fast) ease,
    box-shadow var(--duration-fast) ease;
}

.btn__icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

/* ---- Sizes ---- */
.btn--md {
  font-size: var(--text-base);
  padding: 15px 26px;
  border: 3px solid;
}

.btn--sm {
  font-size: var(--text-sm);
  padding: 9px 16px;
  border: 3px solid;
}

/* ---- Variants ---- */

/* Primary: red bg · ink shadow */
.btn--primary {
  background: var(--color-pow-red);
  color: var(--color-paper);
  border-color: var(--color-ink);
  box-shadow: 6px 6px 0 var(--color-ink);
}
.btn--primary:hover:not(.btn--disabled) {
  transform: translate(-2px, -2px);
  box-shadow: 9px 9px 0 var(--color-ink);
}
.btn--primary:active:not(.btn--disabled) {
  transform: translate(4px, 4px);
  box-shadow: 1px 1px 0 var(--color-ink);
}

/* Secondary: newsprint bg · ink shadow */
.btn--secondary {
  background: var(--color-newsprint);
  color: var(--color-ink);
  border-color: var(--color-ink);
  box-shadow: 6px 6px 0 var(--color-ink);
}
.btn--secondary:hover:not(.btn--disabled) {
  transform: translate(-2px, -2px);
  box-shadow: 9px 9px 0 var(--color-ink);
}
.btn--secondary:active:not(.btn--disabled) {
  transform: translate(4px, 4px);
  box-shadow: 1px 1px 0 var(--color-ink);
}

/* Ink CTA: ink bg · yellow text · red shadow */
.btn--ink {
  background: var(--color-ink);
  color: var(--color-marker);
  border-color: var(--color-ink);
  box-shadow: 6px 6px 0 var(--color-pow-red);
}
.btn--ink:hover:not(.btn--disabled) {
  transform: translate(-2px, -2px);
  box-shadow: 9px 9px 0 var(--color-pow-red);
}
.btn--ink:active:not(.btn--disabled) {
  transform: translate(4px, 4px);
  box-shadow: 1px 1px 0 var(--color-pow-red);
}

/* Nav pill: yellow bg · white border · red shadow */
.btn--nav {
  background: var(--color-marker);
  color: var(--color-ink);
  border-color: var(--color-paper);
  box-shadow: 3px 3px 0 var(--color-pow-red);
}
.btn--nav:hover:not(.btn--disabled) {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--color-pow-red);
}
.btn--nav:active:not(.btn--disabled) {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-pow-red);
}

/* ---- Disabled ---- */
.btn--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
