<script setup lang="ts">
interface Props {
  src: string
  alt: string
  figCaption?: string
  sticker?: string
  stickerRotate?: number
}

withDefaults(defineProps<Props>(), {
  figCaption: 'FIG.01',
  stickerRotate: -12,
})
</script>

<template>
  <div class="hero-img">
    <div class="hero-img__plate hero-img__plate--yellow" aria-hidden="true" />
    <div class="hero-img__plate hero-img__plate--red" aria-hidden="true" />

    <figure class="hero-img__frame">
      <img :src="src" :alt="alt" class="hero-img__photo" loading="lazy" />
      <figcaption v-if="figCaption" class="hero-img__caption">{{ figCaption }}</figcaption>
    </figure>

    <span
      v-if="sticker"
      class="hero-img__sticker m-wiggle"
      aria-hidden="true"
      :style="{ '--rot': `${stickerRotate}deg`, transform: `rotate(${stickerRotate}deg)` }"
    >
      {{ sticker }}
    </span>
  </div>
</template>

<style scoped>
.hero-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Yellow backplate — behind, rotated +3deg */
.hero-img__plate--yellow {
  position: absolute;
  inset: 6% -4% 0 4%;
  background: var(--color-marker);
  border: 4px solid var(--color-ink);
  transform: rotate(3deg);
}

/* Red backplate — in front of yellow, rotated -2deg */
.hero-img__plate--red {
  position: absolute;
  inset: 2% 2% 4% -4%;
  background: var(--color-pow-red);
  border: 4px solid var(--color-ink);
  transform: rotate(-2deg);
}

/* Image frame — on top, slight counter-rotation */
.hero-img__frame {
  position: relative;
  margin: 0;
  width: 100%;
  border: 5px solid var(--color-ink);
  box-shadow: 10px 10px 0 var(--color-ink);
  background: var(--color-paper);
  transform: rotate(-1deg);
}

.hero-img__photo {
  display: block;
  width: 100%;
}

.hero-img__caption {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-family: var(--font-mono);
  font-size: var(--text-2xs);
  font-weight: 700;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 4px 8px;
}

/* Orbiting sticker */
.hero-img__sticker {
  position: absolute;
  top: -18px;
  left: -18px;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  background: var(--color-paper);
  color: var(--color-ink);
  padding: 7px 11px;
  border: 3px solid var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-blueprint);
  cursor: default;
}
</style>
