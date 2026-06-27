<template>
  <footer class="footer">
    <span class="footer__name">V. VENKATA SUBASH<span class="footer__sep"> · </span><span class="footer__role">Senior Fullstack Developer</span></span>
    <span class="footer__copy">Hand-coded, no templates. © 2026 — Code · Design · Repeat.</span>
  </footer>
</template>

<style>
.footer {
  background: var(--color-ink);
  color: var(--color-newsprint);
  padding: 30px clamp(16px,4vw,48px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-top: 5px solid var(--color-marker);
}
.footer__name { font-family: var(--font-heading); font-size: 15px; }
.footer__sep  { color: var(--color-marker); }
.footer__role { font-weight: 400; font-family: var(--font-mono); font-size: 12px; }
.footer__copy { font-family: var(--font-mono); font-size: 12px; color: #aaa297; }
</style>
