<script setup lang="ts">
type Status = 'live' | 'wip' | 'offline'

interface Props {
  label?: string
  title: string
  problem?: string
  outcome?: string
  chips?: string[]
  status?: Status
  fps?: string
  progress?: number
}

withDefaults(defineProps<Props>(), {
  label: 'PROJECT 01',
  chips: () => [],
  status: 'live',
  fps: '60 FPS',
  progress: 62,
})
</script>

<template>
  <article class="project-card">
    <div class="project-card__grid">

      <!-- Left: text content -->
      <div class="project-card__body">
        <span class="project-card__label">{{ label }}</span>
        <h3 class="project-card__title">{{ title }}</h3>

        <div v-if="problem || outcome" class="project-card__blocks">
          <div v-if="problem" class="project-card__block">
            <span class="project-card__block-key">PROBLEM</span>
            <p class="project-card__block-text">{{ problem }}</p>
          </div>
          <div v-if="outcome" class="project-card__block">
            <span class="project-card__block-key">OUTCOME</span>
            <p class="project-card__block-text">{{ outcome }}</p>
          </div>
        </div>

        <div v-if="chips.length" class="project-card__chips">
          <span
            v-for="chip in chips"
            :key="chip"
            class="project-card__chip"
          >{{ chip }}</span>
        </div>
      </div>

      <!-- Right: "screen" pane -->
      <div class="project-card__screen" aria-hidden="true">
        <span class="project-card__badge project-card__badge--live">
          {{ status === 'live' ? '● LIVE' : status === 'wip' ? '◐ WIP' : '○ OFFLINE' }}
        </span>
        <span class="project-card__badge project-card__badge--fps">{{ fps }}</span>
        <span class="project-card__play">▶</span>
        <div class="project-card__progress">
          <div
            class="project-card__progress-fill"
            :style="{ width: `${Math.min(100, Math.max(0, progress))}%` }"
          />
        </div>
      </div>

    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--color-ink);
  border: 5px solid var(--color-ink);
  box-shadow: 12px 12px 0 var(--color-blueprint);
  overflow: hidden;
}

.project-card__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
}

@media (max-width: 640px) {
  .project-card__grid {
    grid-template-columns: 1fr;
  }
}

/* Left body */
.project-card__body {
  padding: clamp(22px, 3vw, 36px);
  color: var(--color-newsprint);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.project-card__label {
  display: inline-block;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  background: var(--color-pow-red);
  color: var(--color-paper);
  padding: 5px 10px;
  align-self: flex-start;
}

.project-card__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(26px, 3.4vw, 40px);
  line-height: var(--leading-tight);
  text-transform: uppercase;
}

.project-card__blocks {
  display: grid;
  gap: var(--space-3);
}

.project-card__block-key {
  display: block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-2xs);
  color: var(--color-marker);
  letter-spacing: var(--tracking-wider);
}

.project-card__block-text {
  margin: var(--space-1) 0 0;
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-dim);
}

.project-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: auto;
}

.project-card__chip {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-2xs);
  background: var(--color-newsprint);
  color: var(--color-ink);
  padding: 6px 10px;
}

/* Right screen pane */
.project-card__screen {
  position: relative;
  background: var(--color-blueprint);
  min-height: 240px;
  border-left: 5px solid var(--color-ink);
  background-image:
    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0 2px, transparent 2px 5px),
    radial-gradient(var(--color-paper) 18%, transparent 20%);
  background-size: 100% 5px, 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card__badge {
  position: absolute;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-3xs);
  padding: 4px 8px;
}

.project-card__badge--live {
  top: 14px;
  left: 14px;
  background: var(--color-pow-red);
  color: var(--color-paper);
}

.project-card__badge--fps {
  top: 14px;
  right: 14px;
  background: var(--color-ink);
  color: var(--color-marker);
}

.project-card__play {
  font-family: var(--font-display);
  font-size: 42px;
  color: var(--color-paper);
  text-shadow: 3px 3px 0 var(--color-ink);
}

.project-card__progress {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  height: 8px;
  background: var(--color-ink);
  border: 2px solid var(--color-paper);
}

.project-card__progress-fill {
  height: 100%;
  background: var(--color-pow-red);
}
</style>
