import type { Meta, StoryObj } from '@storybook/react'

import { Button, buttonSizes, buttonVariants } from '@/ui'

const meta = {
  argTypes: {
    size: {
      control: 'radio',
      options: [...buttonSizes],
    },
    variant: {
      control: 'radio',
      options: [...buttonVariants],
    },
  },
  component: Button,
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          outline: '1px solid grey',
          padding: '20px',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ size, variant, ...args }) => {
    return <Button size={size} variant={variant} {...args} />
  },
}

export const Overview: Story = {
  ...Template,
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
  parameters: { controls: { exclude: ['asChild'] } },
}

export const PrimaryButton: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
  parameters: { controls: { exclude: ['variant', 'children', 'asChild'] } },
}
