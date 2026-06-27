<template>
  <section id="work" aria-labelledby="work-h" class="work">
    <div aria-hidden="true" class="work__blob" />
    <div class="section-wrap">
      <div data-reveal>
        <span class="section-label section-label--yellow">03 — THE TRACK RECORD</span>
        <h2 id="work-h" class="work__heading">Where I've shipped</h2>
      </div>
      <div class="work-list">

        <article data-reveal class="work-card work-card--light" style="transform:rotate(-1deg)">
          <span aria-hidden="true" class="work-card__badge">NOW</span>
          <div class="work-card__inner">
            <div class="work-card__head">
              <h3 class="work-card__company">Shareplay<span class="work-card__company--accent">.tv</span></h3>
              <span class="work-card__period work-card__period--dark">MAR 2024 — APR 2026</span>
            </div>
            <p class="work-card__role work-card__role--blue">Senior Fullstack Developer</p>
            <p class="work-card__desc">Owned the front-end foundation of a live game-streaming platform — built the design system, then engineered the real-time guts: simultaneous video, chat, and presence over WebSockets, tuned to stay smooth on mid-range phones.</p>
            <ul class="work-card__tags">
              <li class="tag tag--dark">⚙ Design System from scratch</li>
              <li class="tag tag--yellow">30+ reusable components</li>
              <li class="tag tag--red">↑ 40% faster delivery</li>
              <li class="tag tag--white">WebSockets real-time</li>
              <li class="tag tag--white">Mobile video optimization</li>
              <li class="tag tag--white">WCAG 2.1 AA</li>
            </ul>
          </div>
        </article>

        <article data-reveal class="work-card work-card--dark" style="transform:rotate(1deg)">
          <div class="work-card__inner">
            <div class="work-card__head">
              <h3 class="work-card__company work-card__company--light">Fuel <span class="work-card__company--yellow">Buddy</span></h3>
              <span class="work-card__period work-card__period--yellow">JAN 2023 — JUN 2023</span>
            </div>
            <p class="work-card__role work-card__role--yellow">Frontend Developer</p>
            <p class="work-card__desc work-card__desc--dim">Built a customer-facing fuel-delivery app from an empty repo — Vue + Pinia on the front, a GraphQL/Hasura layer over PostgreSQL underneath, with live delivery tracking on a map and a fully responsive architecture.</p>
            <ul class="work-card__tags">
              <li class="tag tag--blue">Built from scratch</li>
              <li class="tag tag--newsprint">Vue + Pinia</li>
              <li class="tag tag--newsprint">GraphQL + Hasura</li>
              <li class="tag tag--newsprint">Live tracking + Maps</li>
              <li class="tag tag--newsprint">GraphQL Codegen</li>
            </ul>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<style>
.work {
  position: relative;
  background: var(--color-blueprint);
  border-bottom: 6px solid var(--color-ink);
  overflow: hidden;
}
.work__blob {
  position: absolute;
  left: -50px; bottom: -30px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background-image: radial-gradient(var(--color-marker) 30%, transparent 32%);
  background-size: 18px 18px;
  opacity: .5;
  pointer-events: none;
}
.work__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(40px,7vw,94px);
  line-height: .9;
  color: var(--color-newsprint);
  text-shadow: 4px 4px 0 var(--color-ink);
}
.work-list { display: grid; gap: clamp(24px,4vw,40px); margin-top: 48px; }
.work-card { border: 5px solid var(--color-ink); box-shadow: 12px 12px 0 var(--color-ink); position: relative; }
.work-card--light { background: var(--color-newsprint); }
.work-card--dark  { background: var(--color-ink); color: var(--color-newsprint); box-shadow: 12px 12px 0 var(--color-pow-red); }
.work-card__badge {
  position: absolute;
  top: -18px; left: -14px;
  font-family: var(--font-display);
  font-size: 14px;
  background: var(--color-pow-red);
  color: var(--color-paper);
  padding: 6px 12px;
  border: 3px solid var(--color-ink);
  transform: rotate(-6deg);
  z-index: 2;
}
.work-card__inner { padding: clamp(22px,3vw,34px); }
.work-card__head  { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px; }
.work-card__company {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(30px,4.6vw,56px);
  line-height: .95;
  text-transform: uppercase;
}
.work-card__company--accent  { color: var(--color-pow-red); }
.work-card__company--light   { color: var(--color-newsprint); }
.work-card__company--yellow  { color: var(--color-marker); }
.work-card__period           { font-family: var(--font-mono); font-weight: 700; font-size: 14px; padding: 6px 10px; }
.work-card__period--dark     { background: var(--color-ink);    color: var(--color-marker); }
.work-card__period--yellow   { background: var(--color-marker); color: var(--color-ink); }
.work-card__role             { margin: 6px 0 0; font-family: var(--font-heading); font-size: 15px; text-transform: uppercase; letter-spacing: .5px; }
.work-card__role--blue       { color: var(--color-blueprint); }
.work-card__role--yellow     { color: var(--color-marker); }
.work-card__desc             { margin: 14px 0 0; font-size: clamp(15px,1.4vw,18px); line-height: 1.6; max-width: 62ch; }
.work-card__desc--dim        { color: var(--color-dim); }
.work-card__tags             { list-style: none; margin: 18px 0 0; padding: 0 0 26px; display: flex; flex-wrap: wrap; gap: 10px; }
.tag             { font-family: var(--font-mono); font-weight: 700; font-size: 12.5px; padding: 8px 12px; border: 2px solid; }
.tag--dark       { background: var(--color-ink);       color: var(--color-paper);   border-color: var(--color-ink); }
.tag--yellow     { background: var(--color-marker);    color: var(--color-ink);     border-color: var(--color-ink); }
.tag--red        { background: var(--color-pow-red);   color: var(--color-paper);   border-color: var(--color-ink); }
.tag--white      { background: var(--color-paper);     color: var(--color-ink);     border-color: var(--color-ink); }
.tag--blue       { background: var(--color-blueprint); color: var(--color-paper);   border-color: var(--color-paper); }
.tag--newsprint  { background: var(--color-newsprint); color: var(--color-ink);     border-color: var(--color-paper); }
</style>
