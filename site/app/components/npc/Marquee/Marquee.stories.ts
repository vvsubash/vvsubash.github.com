import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Marquee from './Marquee.vue'

const meta = {
  title: 'Components/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  args: {
    items: ['COLOR', 'TYPE', 'BUTTONS', 'PILLS', 'CARDS', 'STICKERS'],
    separator: '✸',
    duration: 22,
  },
} satisfies Meta<typeof Marquee>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Slow: Story = {
  args: {
    items: ['DESIGN', 'CODE', 'SHIP'],
    duration: 40,
  },
}

export const OnBlue: Story = {
  name: 'On Blueprint Blue',
  args: {
    items: ['SHIP IT', 'THEN MAKE IT SING', 'FAST'],
    bg: '#1B4DDB',
    color: '#FFD300',
    separator: '✦',
    duration: 16,
  },
}

export const OnRed: Story = {
  name: 'On Pow Red',
  args: {
    items: ['60 FPS', 'WCAG 2.1', 'OPEN SOURCE', 'FAST'],
    bg: '#E8331C',
    color: '#ffffff',
    separator: '✸',
    duration: 18,
  },
}
