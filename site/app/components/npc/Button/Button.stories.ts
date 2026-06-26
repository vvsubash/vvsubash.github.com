import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { ArrowRight, ArrowDown, Mail, ChevronRight, ExternalLink, Send } from '@lucide/vue'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ink', 'nav'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ── Playground (driven by Storybook controls) ─────────────────────────────────

export const Playground: Story = {
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<div style="padding:32px;background:#F3ECDC"><Button v-bind="args">Button label</Button></div>`,
  }),
}

// ── All variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary">Primary →</Button>
        <Button variant="secondary">Secondary ↓</Button>
        <Button variant="ink">Ink CTA ✉</Button>
        <Button variant="nav" size="sm">Nav pill →</Button>
      </div>
    `,
  }),
}

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary" size="md">Medium →</Button>
        <Button variant="primary" size="sm">Small →</Button>
        <Button variant="secondary" size="md">Medium ↓</Button>
        <Button variant="secondary" size="sm">Small ↓</Button>
      </div>
    `,
  }),
}

// ── With icons (Lucide) ────────────────────────────────────────────────────────

export const WithIconRight: Story = {
  name: 'With Icon Right',
  render: () => ({
    components: { Button, ArrowRight, ArrowDown, Mail, ChevronRight },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary">
          View Work
          <template #icon-right><ArrowRight :size="16" /></template>
        </Button>
        <Button variant="secondary">
          Download CV
          <template #icon-right><ArrowDown :size="16" /></template>
        </Button>
        <Button variant="ink">
          Get in Touch
          <template #icon-right><Mail :size="16" /></template>
        </Button>
        <Button variant="nav" size="sm">
          Next
          <template #icon-right><ChevronRight :size="14" /></template>
        </Button>
      </div>
    `,
  }),
}

export const WithIconLeft: Story = {
  name: 'With Icon Left',
  render: () => ({
    components: { Button, Send, ExternalLink },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary">
          <template #icon-left><Send :size="16" /></template>
          Send Message
        </Button>
        <Button variant="ink">
          <template #icon-left><ExternalLink :size="16" /></template>
          Open Project
        </Button>
      </div>
    `,
  }),
}

// ── Disabled states ───────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary" :disabled="true">Primary →</Button>
        <Button variant="secondary" :disabled="true">Secondary ↓</Button>
        <Button variant="ink" :disabled="true">Ink CTA ✉</Button>
        <Button variant="nav" size="sm" :disabled="true">Nav pill →</Button>
      </div>
    `,
  }),
}

// ── As anchor link ────────────────────────────────────────────────────────────

export const AsLink: Story = {
  name: 'As Anchor Link',
  render: () => ({
    components: { Button, ExternalLink },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#F3ECDC">
        <Button variant="primary" href="#">
          External Link
          <template #icon-right><ExternalLink :size="16" /></template>
        </Button>
        <Button variant="secondary" href="#">See Case Study →</Button>
      </div>
    `,
  }),
}

// ── On dark background ────────────────────────────────────────────────────────

export const OnDark: Story = {
  name: 'On Dark Background',
  render: () => ({
    components: { Button, ArrowRight },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:22px;align-items:center;padding:32px;background:#15120E">
        <Button variant="primary">Primary →</Button>
        <Button variant="ink">Ink CTA ✉</Button>
        <Button variant="nav" size="sm">
          Nav pill
          <template #icon-right><ArrowRight :size="14" /></template>
        </Button>
      </div>
    `,
  }),
}
