<template>
  <div aria-hidden="true" class="marquee-strip">
    <div class="marquee-strip__track">
      <span class="marquee-strip__content">DESIGN SYSTEMS&nbsp;<span class="mc mc--y">✸</span>&nbsp;REAL-TIME STREAMING&nbsp;<span class="mc mc--r">✸</span>&nbsp;PERFORMANCE&nbsp;<span class="mc mc--b">✸</span>&nbsp;ACCESSIBILITY&nbsp;<span class="mc mc--y">✸</span>&nbsp;FRONTEND ARCHITECTURE&nbsp;<span class="mc mc--r">✸</span>&nbsp;</span>
      <span class="marquee-strip__content" aria-hidden="true">DESIGN SYSTEMS&nbsp;<span class="mc mc--y">✸</span>&nbsp;REAL-TIME STREAMING&nbsp;<span class="mc mc--r">✸</span>&nbsp;PERFORMANCE&nbsp;<span class="mc mc--b">✸</span>&nbsp;ACCESSIBILITY&nbsp;<span class="mc mc--y">✸</span>&nbsp;FRONTEND ARCHITECTURE&nbsp;<span class="mc mc--r">✸</span>&nbsp;</span>
    </div>
  </div>
</template>

<style>
.marquee-strip {
  background: var(--color-ink);
  border-bottom: 5px solid var(--color-ink);
  overflow: hidden;
  padding: 12px 0;
}
.marquee-strip__track {
  display: flex;
  width: max-content;
  animation: pf-marquee 22s linear infinite;
  font-family: var(--font-display);
  font-size: clamp(18px,2.5vw,26px);
  letter-spacing: 1px;
  color: var(--color-newsprint);
  text-transform: uppercase;
}
.marquee-strip__content { white-space: nowrap; }
.mc--y { color: var(--color-marker); }
.mc--r { color: var(--color-pow-red); }
.mc--b { color: var(--color-blueprint); -webkit-text-stroke: 1px var(--color-paper); }
</style>
