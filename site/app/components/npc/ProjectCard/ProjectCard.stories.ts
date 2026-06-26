import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import ProjectCard from './ProjectCard.vue'

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  args: {
    label: 'PROJECT 01',
    title: 'Case Study Card',
    problem: 'Problem → Approach → Outcome blocks, mono labels in Marker Yellow.',
    outcome: 'Tech chips footer + a textured "screen" pane on the right.',
    chips: ['WebSockets', 'A11y player', 'Vue', 'Nuxt'],
    status: 'live',
    fps: '60 FPS',
    progress: 62,
  },
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WIP: Story = {
  args: {
    label: 'PROJECT 02',
    title: 'Work In Progress',
    problem: 'Building a real-time collaborative tool for distributed teams.',
    outcome: 'Currently in beta — shipped core sync engine, working on presence.',
    chips: ['WebRTC', 'TypeScript', 'Hono'],
    status: 'wip',
    progress: 35,
  },
}

export const HighProgress: Story = {
  name: 'High Progress',
  args: {
    label: 'PROJECT 03',
    title: 'Design System',
    problem: 'No shared token layer — every team rebuilds the same components.',
    outcome: 'Single source of truth across 4 products, 30+ components shipped.',
    chips: ['Vue', 'Storybook', 'CSS custom properties'],
    status: 'live',
    progress: 92,
  },
}
