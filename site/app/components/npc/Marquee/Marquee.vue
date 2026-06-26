<script setup lang="ts">
interface Props {
  items: string[]
  separator?: string
  duration?: number
  bg?: string
  color?: string
  fontSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  separator: '✸',
  duration: 22,
  bg: 'var(--color-ink)',
  color: 'var(--color-newsprint)',
  fontSize: '24px',
})

const track = computed(() =>
  props.items.map((item) => `${item} `).join(` ${props.separator} `)
)
</script>

<template>
  <div
    class="marquee"
    aria-hidden="true"
    :style="{ background: bg, '--marquee-color': color, '--marquee-font-size': fontSize }"
  >
    <div
      class="marquee__track"
      :style="{ animationDuration: `${duration}s` }"
    >
      <span class="marquee__content">{{ track }}&nbsp;{{ separator }}&nbsp;</span>
      <span class="marquee__content" aria-hidden="true">{{ track }}&nbsp;{{ separator }}&nbsp;</span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  padding: 11px 0;
  border-bottom: 5px solid var(--color-ink);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 22s linear infinite;
  font-family: var(--font-display);
  font-size: var(--marquee-font-size, 24px);
  letter-spacing: 1px;
  color: var(--marquee-color, var(--color-newsprint));
  text-transform: uppercase;
}

.marquee__content {
  white-space: nowrap;
}
</style>
