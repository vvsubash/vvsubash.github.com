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
