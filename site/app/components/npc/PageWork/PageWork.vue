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
