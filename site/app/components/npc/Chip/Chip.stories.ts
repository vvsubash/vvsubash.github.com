import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Chip from './Chip.vue'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted', 'active'],
    },
  },
  args: { variant: 'default' },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Chip },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:10px;padding:32px;background:#F3ECDC">
        <Chip variant="default">TypeScript</Chip>
        <Chip variant="highlighted">Vue</Chip>
        <Chip variant="default">GraphQL</Chip>
        <Chip variant="active">WebSockets</Chip>
        <Chip variant="default">Nuxt</Chip>
        <Chip variant="default">React</Chip>
      </div>
    `,
  }),
}

export const OnDark: Story = {
  name: 'On Dark',
  render: () => ({
    components: { Chip },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:10px;padding:32px;background:#15120E">
        <Chip variant="default">TypeScript</Chip>
        <Chip variant="highlighted">Vue</Chip>
        <Chip variant="active">WebSockets</Chip>
      </div>
    `,
  }),
}
