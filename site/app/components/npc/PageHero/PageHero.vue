<template>
  <header class="hero">
    <div aria-hidden="true" class="hero__blob hero__blob--dots" />
    <div aria-hidden="true" class="hero__blob hero__blob--circle" />
    <div aria-hidden="true" class="hero__blob hero__blob--dot-white" />

    <div class="hero__inner">
      <div class="hero__text">
        <span class="hero__eyebrow">HEY, I'M —</span>
        <h1 class="hero__name">VENKATA<br>SUBASH</h1>
        <p class="hero__role">Senior Software Developer</p>
        <p class="hero__desc">
          Building <em class="hl--pow">fast</em>, scalable,
          <em class="hl--ink">delightful</em> web products — from design systems to real-time platforms.
        </p>
        <div class="hero__ctas">
          <a href="#projects" class="hero__btn hero__btn--primary">View Projects →</a>
          <a href="#contact" class="hero__btn hero__btn--secondary">Download Resume ↓</a>
        </div>
        <div class="hero__badges">
          <span class="hero__badge hero__badge--dark" style="transform:rotate(-3deg)">4+ YEARS</span>
          <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">TYPESCRIPT</span>
          <span class="hero__badge hero__badge--yellow" style="transform:rotate(-2deg)">VUE</span>
          <span class="hero__badge hero__badge--red" style="transform:rotate(3deg)">REACT</span>
          <span class="hero__badge hero__badge--white" style="transform:rotate(-1deg)">A11Y</span>
        </div>
      </div>

      <div class="hero__portrait">
        <div aria-hidden="true" class="hero__plate hero__plate--yellow" />
        <div aria-hidden="true" class="hero__plate hero__plate--red" />
        <figure class="hero__frame">
          <img
            src="/hero-collage.png"
            width="1448" height="1086"
            alt="Comic-collage portrait of Venkata Subash surrounded by halftones and stickers."
            class="hero__photo"
            loading="eager"
            fetchpriority="high"
          />
          <div aria-hidden="true" class="hero__grad" />
          <figcaption class="hero__caption">FIG.01 — THE BUILDER</figcaption>
        </figure>
        <span aria-hidden="true" class="hero__stk hero__stk--fps">60 FPS</span>
        <span aria-hidden="true" class="hero__stk hero__stk--wcag">WCAG 2.1</span>
        <span aria-hidden="true" class="hero__stk hero__stk--gql">GRAPHQL</span>
        <span aria-hidden="true" class="hero__stk hero__stk--os">OPEN SOURCE</span>
      </div>
    </div>

    <div class="hero__mobile-body">
      <p class="hero__desc">
        Building <em class="hl--pow">fast</em>, scalable,
        <em class="hl--ink">delightful</em> web products — from design systems to real-time platforms.
      </p>
      <div class="hero__ctas">
        <a href="#projects" class="hero__btn hero__btn--primary">View Projects →</a>
        <a href="#contact" class="hero__btn hero__btn--secondary">Download Resume ↓</a>
      </div>
      <div class="hero__badges">
        <span class="hero__badge hero__badge--dark" style="transform:rotate(-3deg)">4+ YEARS</span>
        <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">TYPESCRIPT</span>
        <span class="hero__badge hero__badge--yellow" style="transform:rotate(-2deg)">VUE</span>
        <span class="hero__badge hero__badge--white" style="transform:rotate(2deg)">REACT</span>
        <span class="hero__badge hero__badge--white" style="transform:rotate(-1deg)">A11Y</span>
      </div>
    </div>
  </header>
</template>

<style>
.hero {
  position: relative;
  background: var(--color-blueprint);
  border-bottom: 6px solid var(--color-ink);
  overflow: hidden;
}
.hero__blob {
  position: absolute;
  pointer-events: none;
}
.hero__blob--dots {
  right: -60px; top: -40px;
  width: 420px; height: 420px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-ink) 28%, transparent 30%);
  background-size: 20px 20px;
  opacity: .18;
}
.hero__blob--circle {
  left: -80px; bottom: 80px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background: var(--color-marker);
  opacity: .85;
  mix-blend-mode: multiply;
}
.hero__blob--dot-white {
  left: 12%; top: 30px;
  width: 120px; height: 120px;
  background-image: radial-gradient(#fff 30%, transparent 32%);
  background-size: 12px 12px;
  opacity: .3;
}

.hero__inner { position: relative; }
.hero__portrait {
  position: relative;
  height: 70vh;
  max-height: 600px;
  min-height: 468px;
}
.hero__text {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 5;
  padding: 16px 18px 0;
}
.hero__desc,
.hero__ctas,
.hero__badges { display: none; }

.hero__mobile-body {
  position: relative;
  z-index: 2;
  padding: 26px 18px 30px;
}
.hero__mobile-body .hero__desc { display: block; }
.hero__mobile-body .hero__ctas { display: grid; gap: 11px; margin-top: 22px; }
.hero__mobile-body .hero__badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }

.hero__eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 2px;
  background: var(--color-ink);
  color: var(--color-marker);
  padding: 5px 10px;
  transform: rotate(-2deg);
  border: 2px solid var(--color-paper);
}
.hero__name {
  margin: 12px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -.5px;
  color: var(--color-newsprint);
  text-transform: uppercase;
  font-size: clamp(48px, 16vw, 68px);
  text-shadow: 3px 3px 0 var(--color-ink), 6px 6px 0 var(--color-marker);
}
.hero__role {
  margin: 14px 0 0;
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 15px;
  color: var(--color-ink);
  background: var(--color-marker);
  padding: 7px 12px;
  transform: rotate(-1deg);
  box-shadow: 4px 4px 0 var(--color-ink);
}
.hero__desc {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-newsprint);
  line-height: 1.5;
  margin: 0;
}
.hero__btn {
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 16px;
  padding: 15px;
  border: 3px solid var(--color-ink);
  box-shadow: 5px 5px 0 var(--color-ink);
  transition: transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}
.hero__btn:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 var(--color-ink); }
.hero__btn:active { transform: translate(4px,4px); box-shadow: 1px 1px 0 var(--color-ink); }
.hero__btn--primary { color: var(--color-paper); background: var(--color-pow-red); }
.hero__btn--secondary { color: var(--color-ink); background: var(--color-newsprint); }
.hero__badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 11px;
  padding: 6px 9px;
}
.hero__badge--dark   { background: var(--color-ink);     color: var(--color-paper);   border: 2px solid var(--color-marker); }
.hero__badge--white  { background: var(--color-paper);   color: var(--color-ink);     border: 2px solid var(--color-ink); }
.hero__badge--yellow { background: var(--color-marker);  color: var(--color-ink);     border: 2px solid var(--color-ink); }
.hero__badge--red    { background: var(--color-pow-red); color: var(--color-paper);   border: 2px solid var(--color-ink); }

.hero__plate { position: absolute; border: 4px solid var(--color-ink); }
.hero__plate--yellow {
  inset: 6% -4% 0 4%;
  background: var(--color-marker);
  transform: rotate(4deg);
  box-shadow: 4px 4px 0 var(--color-ink);
}
.hero__plate--red {
  inset: 2% 2% 4% -4%;
  background: var(--color-pow-red);
  transform: rotate(-3deg);
  box-shadow: -4px 4px 0 var(--color-ink);
}
.hero__frame {
  position: absolute;
  inset: 0;
  margin: 0;
  border: 4px solid var(--color-ink);
  box-shadow: 7px 7px 0 var(--color-ink);
  background: var(--color-blueprint);
  transform: rotate(-1deg);
  overflow: hidden;
}
.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 56% 34%;
}
.hero__grad {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(21,18,14,.82) 0%, rgba(21,18,14,.5) 26%, rgba(21,18,14,0) 54%);
}
.hero__caption {
  position: absolute;
  left: 8px; bottom: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 3px 7px;
}

.hero__stk {
  position: absolute;
  z-index: 4;
  font-family: var(--font-display);
  font-size: 14px;
  padding: 8px 12px;
  border: 3px solid var(--color-ink);
}
.hero__stk--fps  { top: -12px; left: -6px;    background: var(--color-paper);     color: var(--color-ink); box-shadow: 3px 3px 0 var(--color-blueprint); transform: rotate(-12deg); }
.hero__stk--wcag { bottom: -10px; right: -4px; background: var(--color-marker);    color: var(--color-ink); box-shadow: 3px 3px 0 var(--color-ink);        transform: rotate(8deg); }
.hero__stk--gql  { display: none; }
.hero__stk--os   { display: none; }

@media (min-width: 768px) {
  .hero { padding: clamp(28px,5vw,64px) clamp(16px,4vw,48px) 0; }
  .hero__inner {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: clamp(16px,3vw,40px);
    align-items: center;
    min-height: min(78vh, 720px);
    max-width: 1240px;
    margin: 0 auto;
  }
  .hero__text { position: static; padding: 0 0 48px; z-index: auto; }
  .hero__desc, .hero__ctas, .hero__badges { display: revert; }
  .hero__desc { font-size: clamp(15px,1.5vw,18px); margin: 22px 0 0; max-width: 30ch; }
  .hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
  .hero__btn  { display: inline-flex; align-items: center; padding: 15px 26px; }
  .hero__badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
  .hero__badge { font-size: 12px; padding: 7px 11px; }
  .hero__mobile-body { display: none; }
  .hero__portrait {
    position: relative;
    height: auto; max-height: none; min-height: 0;
    align-self: stretch;
    display: flex; align-items: center; justify-content: center;
  }
  .hero__frame { position: relative; inset: auto; width: 100%; transform: rotate(-1deg); }
  .hero__photo { height: auto; object-fit: initial; object-position: initial; }
  .hero__grad { display: none; }
  .hero__name { font-size: clamp(44px,8.2vw,118px); text-shadow: 5px 5px 0 var(--color-ink), 9px 9px 0 var(--color-pow-red); }
  .hero__role { font-size: clamp(16px,2.2vw,24px); }
  .hero__stk--gql { display: inline-block; bottom: -18px; left: 8%;   background: var(--color-pow-red);   color: var(--color-paper); box-shadow: 4px 4px 0 var(--color-marker); transform: rotate(6deg); }
  .hero__stk--os  { display: inline-block; bottom: 14%;  right: -22px; background: var(--color-blueprint); color: var(--color-paper); border-color: var(--color-paper); box-shadow: 4px 4px 0 var(--color-ink); transform: rotate(-7deg); font-size: 13px; }
  .hero__stk--fps  { font-size: 15px; top: -22px; left: -26px; box-shadow: 4px 4px 0 var(--color-blueprint); }
  .hero__stk--wcag { font-size: 14px; top: 32%; right: -30px; bottom: auto; transform: rotate(9deg); box-shadow: 4px 4px 0 var(--color-ink); }
}
</style>
