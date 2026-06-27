<template>
  <section id="contact" aria-labelledby="contact-h" class="contact">
    <div aria-hidden="true" class="contact__blob" />
    <span aria-hidden="true" class="contact__star">★</span>
    <div class="section-wrap contact__inner">
      <span data-reveal class="section-label section-label--dark">07 — SAY HELLO</span>
      <h2 id="contact-h" data-reveal class="contact__heading">
        Let's build<br>something <span class="contact__awesome">awesome</span>
      </h2>
      <p data-reveal class="contact__sub">Got a product that needs a front-end with taste <em>and</em> teeth? My inbox is open.</p>
      <div class="contact__ctas">
        <a href="mailto:hello@suba.sh" class="contact__btn contact__btn--primary">✉ Email me</a>
        <a href="https://suba.sh" target="_blank" rel="noopener" class="contact__btn contact__btn--secondary">↗ suba.sh</a>
      </div>
      <div class="contact__meta">
        <span class="contact__tag" style="transform:rotate(-1deg)">✦ hello@suba.sh</span>
        <span class="contact__tag" style="transform:rotate(1deg)">✦ Visakhapatnam, India</span>
        <span class="contact__tag" style="transform:rotate(-1deg)">✦ Open to work</span>
      </div>
    </div>
  </section>
</template>

<style>
.contact {
  position: relative;
  background: var(--color-marker);
  border-top: 6px solid var(--color-ink);
  overflow: hidden;
}
.contact__blob {
  position: absolute;
  left: -60px; top: -40px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-ink) 24%, transparent 26%);
  background-size: 22px 22px;
  opacity: .16;
  pointer-events: none;
}
.contact__star {
  position: absolute;
  right: 8%; top: 18%;
  font-family: var(--font-display);
  font-size: 34px;
  color: var(--color-pow-red);
  -webkit-text-stroke: 2px var(--color-ink);
  animation: pf-floaty 4s ease-in-out infinite;
}
.contact__inner { text-align: center; }
.contact__heading {
  margin: 16px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(44px,9vw,128px);
  line-height: .84;
  letter-spacing: -1px;
}
.contact__awesome { color: var(--color-pow-red); text-shadow: 4px 4px 0 var(--color-ink); }
.contact__sub     { margin: 22px auto 0; max-width: 48ch; font-size: clamp(16px,1.6vw,20px); font-weight: 600; color: var(--color-ink); }
.contact__ctas    { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 34px; }
.contact__btn {
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 17px;
  padding: 17px 30px;
  border: 3px solid var(--color-ink);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}
.contact__btn--primary          { color: var(--color-marker); background: var(--color-ink);   box-shadow: 7px 7px 0 var(--color-pow-red); }
.contact__btn--secondary        { color: var(--color-ink);    background: var(--color-paper); box-shadow: 7px 7px 0 var(--color-blueprint); }
.contact__btn--primary:hover    { transform: translate(-2px,-2px); box-shadow: 11px 11px 0 var(--color-pow-red); }
.contact__btn--secondary:hover  { transform: translate(-2px,-2px); box-shadow: 11px 11px 0 var(--color-blueprint); }
.contact__meta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 30px; }
.contact__tag  {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 13px;
  background: var(--color-paper);
  border: 2px solid var(--color-ink);
  padding: 8px 12px;
  display: inline-block;
}
</style>
