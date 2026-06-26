import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Sticker from './Sticker.vue'

const meta = {
  title: 'Components/Sticker',
  component: Sticker,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['white', 'yellow', 'red'],
    },
    rotate: { control: { type: 'range', min: -20, max: 20, step: 1 } },
  },
  args: { color: 'white', rotate: -6 },
} satisfies Meta<typeof Sticker>

export default meta
type Story = StoryObj<typeof meta>

export const AllColors: Story = {
  name: 'All Colors',
  render: () => ({
    components: { Sticker },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:48px;background:#15120E">
        <Sticker color="white" :rotate="-8">60 FPS</Sticker>
        <Sticker color="yellow" :rotate="6">WCAG 2.1</Sticker>
        <Sticker color="red" :rotate="-4">OPEN SOURCE</Sticker>
      </div>
    `,
  }),
}

export const OnLight: Story = {
  name: 'On Light',
  render: () => ({
    components: { Sticker },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:48px;background:#F3ECDC">
        <Sticker color="white" :rotate="-8">60 FPS</Sticker>
        <Sticker color="yellow" :rotate="6">WCAG 2.1</Sticker>
        <Sticker color="red" :rotate="-4">OPEN SOURCE</Sticker>
      </div>
    `,
  }),
}
