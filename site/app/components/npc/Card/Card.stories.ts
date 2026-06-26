import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import Card from './Card.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['newsprint', 'paper', 'yellow', 'ink'],
    },
    shadow: {
      control: 'select',
      options: ['ink', 'red', 'blue', 'yellow'],
    },
    lift: { control: 'boolean' },
  },
  args: { variant: 'paper', shadow: 'ink', lift: false },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Card },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;padding:40px;background:#F3ECDC">
        <!-- Skill card -->
        <Card variant="newsprint" shadow="ink" :lift="true">
          <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;background:#15120E;color:#FFD300;padding:3px 8px">SKILL CARD</span>
          <div style="display:flex;align-items:center;gap:10px;margin:14px 0">
            <span style="width:30px;height:30px;display:grid;place-items:center;background:#1B4DDB;color:#fff;border:3px solid #15120E;font-family:'Anton',sans-serif;font-size:15px">▤</span>
            <h3 style="margin:0;font-family:'Archivo Black',sans-serif;font-size:17px;text-transform:uppercase">Frontend</h3>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <span style="font-family:'Space Mono',monospace;font-weight:700;font-size:12.5px;background:#fff;border:2px solid #15120E;padding:5px 9px;box-shadow:2px 2px 0 #15120E">Vue</span>
            <span style="font-family:'Space Mono',monospace;font-weight:700;font-size:12.5px;background:#fff;border:2px solid #15120E;padding:5px 9px;box-shadow:2px 2px 0 #15120E">React</span>
            <span style="font-family:'Space Mono',monospace;font-weight:700;font-size:12.5px;background:#fff;border:2px solid #15120E;padding:5px 9px;box-shadow:2px 2px 0 #15120E">Nuxt</span>
          </div>
        </Card>

        <!-- Stat card -->
        <Card variant="paper" shadow="red">
          <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;background:#E8331C;color:#fff;padding:3px 8px">STAT CARD</span>
          <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:16px">
            <div>
              <div style="font-family:'Anton',sans-serif;font-size:42px;line-height:1;color:#1B4DDB">30+</div>
              <div style="font-size:12px;font-weight:700;text-transform:uppercase">Components</div>
            </div>
            <div>
              <div style="font-family:'Anton',sans-serif;font-size:42px;line-height:1;color:#E8331C">40%</div>
              <div style="font-size:12px;font-weight:700;text-transform:uppercase">Faster</div>
            </div>
          </div>
        </Card>

        <!-- Cert card -->
        <Card variant="yellow" shadow="ink" :lift="true">
          <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;background:#15120E;color:#FFD300;padding:3px 8px">CERT CARD</span>
          <div style="font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;opacity:.8;margin-top:12px">CODECADEMY</div>
          <div style="font-family:'Anton',sans-serif;font-size:24px;line-height:.95;text-transform:uppercase;margin-top:6px">Vue</div>
          <div style="margin-top:12px;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;display:inline-block;border:2px solid #15120E;padding:3px 7px">★ EARNED</div>
        </Card>

        <!-- Quote card -->
        <Card variant="ink" shadow="blue">
          <span style="font-family:'Space Mono',monospace;font-size:11px;font-weight:700;background:#1B4DDB;color:#fff;padding:3px 8px">QUOTE CARD</span>
          <p style="margin:14px 0 0;font-family:'Caveat',cursive;font-size:26px;color:#FFD300;line-height:1">"ship it, then make it sing"</p>
          <p style="margin:10px 0 0;font-size:13px;color:#cfc7b6;line-height:1.5">Pragmatic shipping and craft — not enemies.</p>
        </Card>
      </div>
    `,
  }),
}

export const WithLift: Story = {
  name: 'With Lift (hover me)',
  render: () => ({
    components: { Card },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:24px;padding:40px;background:#F3ECDC">
        <Card variant="newsprint" shadow="ink" :lift="true" style="max-width:240px">
          <p style="margin:0;font-family:'Archivo Black',sans-serif;font-size:16px">Hover me — I lift! ↑</p>
          <p style="margin:8px 0 0;font-size:14px">Card lift is the default &ldquo;clickable&rdquo; signal in this system.</p>
        </Card>
        <Card variant="ink" shadow="blue" :lift="true" style="max-width:240px">
          <p style="margin:0;font-family:'Archivo Black',sans-serif;font-size:16px;color:#FFD300">Dark + blue shadow</p>
          <p style="margin:8px 0 0;font-size:14px;color:#cfc7b6">Shadow color is preserved on hover too.</p>
        </Card>
      </div>
    `,
  }),
}
