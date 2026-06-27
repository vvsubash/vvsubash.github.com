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
