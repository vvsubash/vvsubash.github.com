<template>
  <section id="about" aria-labelledby="about-h" class="about">
    <div aria-hidden="true" class="about__blob" />
    <div class="section-wrap">
      <div data-reveal class="about__label-wrap">
        <span class="section-label section-label--red">01 — WHO</span>
        <h2 id="about-h" class="about__heading">
          I make interfaces<br>that <span class="about__feel">feel</span> as good<br>as they <span class="about__perform">perform.</span>
        </h2>
      </div>

      <div class="about__grid">
        <div data-reveal class="about__copy">
          <p class="about__lead">I'm a developer who fell in love for the <strong class="hl--marker">game</strong> —not just solving users problems but delighting them is my <strong class="hl--marker">addiction</strong></p>
          <p class="about__body">I think in <strong>systems</strong>, not screens. Give me a messy product and I'll hand you a design system, 30+ reusable primitives, and a team that ships features 40% faster because the foundation just works.</p>
          <p class="about__body">I obsess over the unglamorous stuff that users actually feel: <strong>smooth 60fps interactions</strong>, and bundle sizes that respect a phone on a slow network.</p>
        </div>
        <div class="about__cards">
          <div data-reveal class="about__quote-card">
            <p class="about__quote">"ship it, then make it sing"</p>
            <p class="about__quote-sub">My north star: pragmatic shipping <em>and</em> craft. The two aren't enemies.</p>
          </div>
          <div data-reveal class="about__stat-card">
            <div class="about__stat">
              <div class="about__stat-num about__stat-num--blue">30+</div>
              <div class="about__stat-label">Components shipped</div>
            </div>
            <div class="about__stat">
              <div class="about__stat-num about__stat-num--red">40%</div>
              <div class="about__stat-label">Faster delivery</div>
            </div>
          </div>
          <span aria-hidden="true" class="about__aside">products, not pages! ↘</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about {
  position: relative;
  background: var(--color-newsprint);
  overflow: hidden;
}
.about__blob {
  position: absolute;
  right: -40px; top: 40px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-blueprint) 26%, transparent 28%);
  background-size: 16px 16px;
  opacity: .5;
  pointer-events: none;
}
.about__label-wrap { display: inline-block; transform: translateY(var(--ty,0px)) rotate(-2deg); }
.about__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(36px,7vw,92px);
  line-height: .9;
  letter-spacing: -1px;
}
.about__feel    { color: var(--color-blueprint); -webkit-text-stroke: 2px var(--color-ink); }
.about__perform { background: var(--color-marker); padding: 0 8px; box-shadow: 4px 4px 0 var(--color-ink); }
.about__grid {
  display: grid;
  gap: clamp(20px,4vw,56px);
  margin-top: 48px;
  align-items: start;
}
@media (min-width: 768px) {
  .about__grid { grid-template-columns: 1.4fr 1fr; }
}
.about__lead { font-size: clamp(17px,1.7vw,21px); line-height: 1.6; font-weight: 500; margin: 0 0 18px; }
.about__body { font-size: clamp(15px,1.4vw,18px); line-height: 1.7; margin: 0 0 16px; color: #312b22; }
.about__cards { position: relative; display: grid; gap: 18px; }
.about__quote-card {
  transform: translateY(var(--ty,0px)) rotate(2deg);
  background: var(--color-ink);
  color: var(--color-newsprint);
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-blueprint);
  padding: 22px;
}
.about__quote { margin: 0; font-family: var(--font-hand); font-size: 24px; color: var(--color-marker); line-height: 1; }
.about__quote-sub { margin: 10px 0 0; font-size: 14px; line-height: 1.5; color: var(--color-dim); }
.about__stat-card {
  transform: translateY(var(--ty,0px)) rotate(-2deg);
  background: var(--color-paper);
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-pow-red);
  padding: 20px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}
.about__stat-num       { font-family: var(--font-display); font-size: 38px; line-height: 1; }
.about__stat-num--blue { color: var(--color-blueprint); }
.about__stat-num--red  { color: var(--color-pow-red); }
.about__stat-label     { font-size: 12px; font-weight: 700; text-transform: uppercase; }
.about__aside {
  position: absolute;
  right: -6px; top: -30px;
  font-family: var(--font-hand);
  font-size: 26px;
  color: var(--color-pow-red);
  transform: rotate(8deg);
}
</style>
