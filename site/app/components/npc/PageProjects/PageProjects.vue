<template>
  <section id="projects" aria-labelledby="proj-h" class="projects">
    <div class="section-wrap">
      <div data-reveal class="projects__header">
        <span class="section-label section-label--blue">04 — CASE STUDIES</span>
        <h2 id="proj-h" class="projects__heading">Featured <span class="projects__heading--red">work</span></h2>
        <p class="projects__sub">Not a list of repos — three problems, and how I engineered my way out of them.</p>
      </div>

      <article data-reveal class="proj-card proj-card--streaming">
        <div class="proj-card__grid">
          <div class="proj-card__body proj-card__body--light">
            <span class="proj-card__label proj-card__label--red">PROJECT 01</span>
            <h3 class="proj-card__title">Game Streaming Platform</h3>
            <div class="proj-card__blocks">
              <div><span class="proj-card__key proj-card__key--yellow">PROBLEM</span><p class="proj-card__text proj-card__text--dim">Viewers expect Twitch-grade latency. Multiple live video tiles + a firehose chat were melting low-end devices.</p></div>
              <div><span class="proj-card__key proj-card__key--yellow">APPROACH</span><p class="proj-card__text proj-card__text--dim">A WebSocket presence + chat layer with backpressure, plus a virtualized render path so only visible tiles decode.</p></div>
              <div><span class="proj-card__key proj-card__key--yellow">OUTCOME</span><p class="proj-card__text proj-card__text--dim">Steady 60fps with several streams live on mid-range phones, and an accessible, keyboard-driven player.</p></div>
            </div>
          </div>
          <div aria-hidden="true" class="proj-card__screen proj-card__screen--stream">
            <span class="proj-screen__badge proj-screen__badge--live">● LIVE</span>
            <span class="proj-screen__badge proj-screen__badge--fps">60 FPS</span>
            <span class="proj-screen__play">▶</span>
            <span class="proj-screen__ws">ws://stream · backpressure · vsync</span>
            <div class="proj-screen__progress">
              <div class="proj-screen__fill" style="width:62%" />
            </div>
          </div>
        </div>
        <div class="proj-card__chips">
          <span class="proj-chip">WebSockets</span>
          <span class="proj-chip">Video pipeline</span>
          <span class="proj-chip">Virtualization</span>
          <span class="proj-chip">A11y player</span>
        </div>
      </article>

      <article data-reveal class="proj-card proj-card--fuel">
        <div class="proj-card__grid proj-card__grid--reverse">
          <div aria-hidden="true" class="proj-card__screen proj-card__screen--map">
            <svg viewBox="0 0 300 260" width="100%" height="100%" style="position:absolute;inset:0" aria-hidden="true">
              <path d="M30 230 C90 180 80 120 150 110 S250 70 270 30" fill="none" stroke="#1B4DDB" stroke-width="6" stroke-dasharray="2 12" stroke-linecap="round"/>
              <circle cx="30" cy="230" r="9" fill="#E8331C" stroke="#15120E" stroke-width="3"/>
              <circle cx="150" cy="110" r="7" fill="#fff" stroke="#15120E" stroke-width="3"/>
              <circle cx="270" cy="30" r="10" fill="#15120E" stroke="#fff" stroke-width="3"/>
            </svg>
            <span class="proj-screen__badge proj-screen__badge--coord">17.6868° N, 83.2185° E</span>
            <span class="proj-screen__badge proj-screen__badge--eta">ETA 8 MIN</span>
          </div>
          <div class="proj-card__body">
            <span class="proj-card__label proj-card__label--blue">PROJECT 02</span>
            <h3 class="proj-card__title proj-card__title--dark">Fuel Tracking Platform</h3>
            <div class="proj-card__blocks">
              <div><span class="proj-card__key proj-card__key--red">REALTIME</span><p class="proj-card__text">GraphQL subscriptions push driver location live — no polling, no stale dots on the map.</p></div>
              <div><span class="proj-card__key proj-card__key--red">ARCHITECTURE</span><p class="proj-card__text">Hasura over PostgreSQL with codegen'd types end-to-end, so the client and schema never drift.</p></div>
              <div><span class="proj-card__key proj-card__key--red">STATE</span><p class="proj-card__text">Pinia stores keep map, order and auth state scalable and predictable across the app.</p></div>
            </div>
            <div class="proj-card__chips">
              <span class="proj-chip proj-chip--dark">GraphQL subs</span>
              <span class="proj-chip proj-chip--dark">Map integration</span>
              <span class="proj-chip proj-chip--dark">Pinia</span>
            </div>
          </div>
        </div>
      </article>

      <article data-reveal class="proj-card proj-card--ds">
        <div class="proj-card__grid">
          <div class="proj-card__body proj-card__body--light">
            <span class="proj-card__label proj-card__label--yellow">PROJECT 03</span>
            <h3 class="proj-card__title">The Design System</h3>
            <p class="proj-card__desc-long">One source of truth: tokens for color, type and spacing; 30+ accessible primitives; a theme architecture that themes the whole app from a handful of variables. The reason the team ships 40% faster.</p>
            <div class="proj-card__chips">
              <span class="proj-chip proj-chip--newsprint">Tokens</span>
              <span class="proj-chip proj-chip--newsprint">Primitives</span>
              <span class="proj-chip proj-chip--newsprint">Theming</span>
              <span class="proj-chip proj-chip--newsprint">Docs</span>
            </div>
          </div>
          <div aria-hidden="true" class="proj-card__screen proj-card__screen--ds">
            <div class="ds-preview__swatches">
              <span class="ds-preview__swatch" style="background:#E8331C" />
              <span class="ds-preview__swatch" style="background:#1B4DDB" />
              <span class="ds-preview__swatch" style="background:#FFD300" />
              <span class="ds-preview__swatch" style="background:#15120E" />
            </div>
            <div class="ds-preview__type">
              <div class="ds-preview__abc">Aa Bb Cc</div>
              <div class="ds-preview__scale">type / scale / 1.25</div>
            </div>
            <div class="ds-preview__space">
              <span class="ds-preview__dot" style="width:8px;height:8px" />
              <span class="ds-preview__dot" style="width:16px;height:16px" />
              <span class="ds-preview__dot" style="width:24px;height:24px" />
              <span class="ds-preview__dot" style="width:32px;height:32px" />
              <span class="ds-preview__spacelabel">space · 4 8 12 16</span>
            </div>
            <div class="ds-preview__components">
              <span class="ds-preview__chip ds-preview__chip--dark">Button</span>
              <span class="ds-preview__chip ds-preview__chip--light">Input</span>
              <span class="ds-preview__chip ds-preview__chip--light">Modal</span>
            </div>
          </div>
        </div>
      </article>

    </div>
  </section>
</template>

<style>
.projects { background: var(--color-newsprint); }
.projects__header { text-align: center; margin-bottom: 0; }
.projects__heading {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(40px,7vw,98px);
  line-height: .88;
  letter-spacing: -1px;
}
.projects__heading--red { color: var(--color-pow-red); }
.projects__sub { margin: 14px auto 0; max-width: 52ch; font-size: 16px; font-weight: 500; color: #312b22; }

.proj-card { margin-top: clamp(32px,4vw,54px); border: 5px solid var(--color-ink); overflow: hidden; }
.proj-card--streaming { background: var(--color-ink);       box-shadow: 12px 12px 0 var(--color-blueprint); }
.proj-card--fuel      { background: var(--color-paper);     box-shadow: 12px 12px 0 var(--color-pow-red); }
.proj-card--ds        { background: var(--color-blueprint); box-shadow: 12px 12px 0 var(--color-ink); }

.proj-card__grid { display: grid; grid-template-columns: 1fr; }
@media (min-width: 640px) {
  .proj-card--streaming .proj-card__grid { grid-template-columns: 1.1fr 1fr; }
  .proj-card--ds        .proj-card__grid { grid-template-columns: 1.1fr 1fr; }
  .proj-card--fuel      .proj-card__grid { grid-template-columns: 1fr 1.1fr; }
}

.proj-card__body { padding: clamp(22px,3vw,40px); color: var(--color-newsprint); }
.proj-card__body--light { color: var(--color-newsprint); }
.proj-card__label { display: inline-block; font-family: var(--font-display); font-size: 13px; padding: 5px 10px; }
.proj-card__label--red    { background: var(--color-pow-red);   color: var(--color-paper); }
.proj-card__label--blue   { background: var(--color-blueprint); color: var(--color-paper); }
.proj-card__label--yellow { background: var(--color-marker);    color: var(--color-ink); }
.proj-card__title {
  margin: 14px 0 0;
  font-family: var(--font-display);
  font-size: clamp(28px,3.6vw,46px);
  line-height: .95;
  text-transform: uppercase;
}
.proj-card__title--dark  { color: var(--color-ink); }
.proj-card__blocks       { display: grid; gap: 14px; margin-top: 20px; }
.proj-card__key          { font-family: var(--font-mono); font-weight: 700; font-size: 12px; }
.proj-card__key--yellow  { color: var(--color-marker); }
.proj-card__key--red     { color: var(--color-pow-red); }
.proj-card__text         { margin: 4px 0 0; font-size: 14.5px; line-height: 1.55; color: #312b22; }
.proj-card__text--dim    { color: var(--color-dim); }
.proj-card__desc-long    { margin: 18px 0 0; font-size: 15px; line-height: 1.6; color: #e7eaff; max-width: 46ch; }
.proj-card__chips        { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 clamp(22px,3vw,40px) 26px; }
.proj-chip               { font-family: var(--font-mono); font-weight: 700; font-size: 12px; background: var(--color-newsprint); color: var(--color-ink); padding: 6px 10px; }
.proj-chip--dark         { background: var(--color-ink);       color: var(--color-paper); }
.proj-chip--newsprint    { background: var(--color-newsprint); color: var(--color-ink); }

.proj-card__screen { position: relative; min-height: 200px; }
@media (min-width: 640px) { .proj-card__screen { min-height: 280px; } }

.proj-card__screen--stream {
  background: var(--color-blueprint);
  border-top: 5px solid var(--color-ink);
  background-image:
    repeating-linear-gradient(0deg, rgba(0,0,0,.25) 0 2px, transparent 2px 5px),
    radial-gradient(var(--color-paper) 18%, transparent 20%);
  background-size: 100% 5px, 16px 16px;
  display: flex; align-items: center; justify-content: center;
}
@media (min-width: 640px) {
  .proj-card__screen--stream { border-top: none; border-left: 5px solid var(--color-ink); }
}

.proj-screen__badge            { position: absolute; font-family: var(--font-mono); font-weight: 700; font-size: 11px; padding: 4px 8px; }
.proj-screen__badge--live      { top: 14px;    left: 14px;   background: var(--color-pow-red); color: var(--color-paper); }
.proj-screen__badge--fps       { top: 14px;    right: 14px;  background: var(--color-ink);     color: var(--color-marker); }
.proj-screen__badge--coord     { top: 12px;    left: 12px;   background: var(--color-ink);     color: var(--color-marker); }
.proj-screen__badge--eta       { bottom: 12px; right: 12px;  background: var(--color-pow-red); color: var(--color-paper); }
.proj-screen__play             { font-family: var(--font-display); font-size: 42px; color: var(--color-paper); text-shadow: 3px 3px 0 var(--color-ink); }
.proj-screen__ws               { position: absolute; bottom: 36px; left: 14px; font-family: var(--font-mono); font-size: 10px; color: var(--color-paper); opacity: .8; }
.proj-screen__progress         { position: absolute; left: 14px; right: 14px; bottom: 14px; height: 8px; background: var(--color-ink); border: 2px solid var(--color-paper); }
.proj-screen__fill             { height: 100%; background: var(--color-pow-red); }

.proj-card__screen--map {
  background: var(--color-marker);
  border-bottom: 5px solid var(--color-ink);
  background-image:
    linear-gradient(var(--color-ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-ink) 1px, transparent 1px);
  background-size: 28px 28px;
  background-position: center;
}
@media (min-width: 640px) {
  .proj-card__screen--map { border-bottom: none; border-right: 5px solid var(--color-ink); }
}

.proj-card__screen--ds {
  background: var(--color-newsprint);
  border-top: 5px solid var(--color-ink);
  padding: 22px;
  display: grid; gap: 12px; align-content: start;
}
@media (min-width: 640px) {
  .proj-card__screen--ds { border-top: none; border-left: 5px solid var(--color-ink); }
}

.ds-preview__swatches    { display: flex; gap: 8px; }
.ds-preview__swatch      { flex: 1; height: 34px; border: 3px solid var(--color-ink); }
.ds-preview__type        { background: var(--color-paper); border: 3px solid var(--color-ink); padding: 10px; }
.ds-preview__abc         { font-family: var(--font-display); font-size: 22px; line-height: 1; }
.ds-preview__scale       { font-family: var(--font-mono); font-size: 10px; margin-top: 2px; }
.ds-preview__space       { display: flex; gap: 8px; align-items: flex-end; }
.ds-preview__dot         { background: var(--color-ink); display: inline-block; }
.ds-preview__spacelabel  { font-family: var(--font-mono); font-size: 10px; }
.ds-preview__components  { display: flex; gap: 8px; flex-wrap: wrap; }
.ds-preview__chip        { font-family: var(--font-mono); font-size: 11px; font-weight: 700; padding: 6px 10px; border: 2px solid var(--color-ink); }
.ds-preview__chip--dark  { background: var(--color-ink);   color: var(--color-paper); }
.ds-preview__chip--light { background: var(--color-paper); color: var(--color-ink); }
</style>
