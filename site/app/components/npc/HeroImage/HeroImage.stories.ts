import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import HeroImage from './HeroImage.vue'

const PLACEHOLDER = 'https://placehold.co/1448x1086/f3ecdc/15120e?text=HERO'

const meta = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  args: {
    src: PLACEHOLDER,
    alt: 'Portrait used in the hero.',
    figCaption: 'FIG.01',
    sticker: '60 FPS',
    stickerRotate: -12,
  },
} satisfies Meta<typeof HeroImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { HeroImage },
    setup: () => ({ args }),
    template: `
      <div style="background:#1B4DDB;padding:clamp(28px,4vw,48px);max-width:540px">
        <HeroImage v-bind="args" />
      </div>
    `,
  }),
}

export const WithoutSticker: Story = {
  name: 'Without Sticker',
  render: () => ({
    components: { HeroImage },
    template: `
      <div style="background:#1B4DDB;padding:clamp(28px,4vw,48px);max-width:540px">
        <HeroImage
          src="${PLACEHOLDER}"
          alt="Hero portrait"
          fig-caption="FIG.02"
        />
      </div>
    `,
  }),
}

export const InContext: Story = {
  name: 'In Hero Context (two-column)',
  render: () => ({
    components: { HeroImage },
    template: `
      <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:28px;align-items:center;background:#1B4DDB;border:4px solid #15120E;box-shadow:7px 7px 0 #15120E;padding:clamp(28px,4vw,48px)">
        <HeroImage
          src="${PLACEHOLDER}"
          alt="Hero portrait"
          fig-caption="FIG.01"
          sticker="60 FPS"
          :sticker-rotate="-12"
        />
        <ul style="list-style:none;margin:0;padding:0;display:grid;gap:10px;color:#F3ECDC;font-size:14px;line-height:1.5">
          <li style="display:flex;gap:8px"><span style="color:#FFD300;font-family:'Anton',sans-serif">→</span> Offset color backplates (yellow + red), rotated</li>
          <li style="display:flex;gap:8px"><span style="color:#FFD300;font-family:'Anton',sans-serif">→</span> 5px ink border + hard drop-shadow</li>
          <li style="display:flex;gap:8px"><span style="color:#FFD300;font-family:'Anton',sans-serif">→</span> Mono FIG.xx caption tab</li>
          <li style="display:flex;gap:8px"><span style="color:#FFD300;font-family:'Anton',sans-serif">→</span> Orbiting Anton stickers that wiggle on hover</li>
        </ul>
      </div>
    `,
  }),
}
