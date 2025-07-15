import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'A badge component used to display status, counts, or labels with various visual styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'info', 'error', 'warning', 'destructive', 'red-rounded', 'red-dot', 'outline'],
      description: 'The visual style of the badge.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the badge.',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the badge.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const RedRounded: Story = {
  args: {
    variant: 'red-rounded',
    children: 'Red Rounded',
  },
}

export const RedDot: Story = {
  args: {
    variant: 'red-dot',
    'aria-label': 'Status indicator',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const WithCounts: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge variant="default">5</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="info">99+</Badge>
      <Badge variant="error">3</Badge>
    </div>
  ),
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <div className="flex items-center gap-1">
        <Badge variant="red-dot" />
        <span className="text-sm">Offline</span>
      </div>
      <div className="flex items-center gap-1">
        <Badge variant="info">●</Badge>
        <span className="text-sm">Online</span>
      </div>
      <div className="flex items-center gap-1">
        <Badge variant="warning">●</Badge>
        <span className="text-sm">Pending</span>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Text Badges</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Special Variants</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="red-rounded">Red Rounded</Badge>
          <Badge variant="red-dot" aria-label="Status indicator" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">With Numbers</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="default">1</Badge>
          <Badge variant="secondary">5</Badge>
          <Badge variant="info">12</Badge>
          <Badge variant="error">99+</Badge>
          <Badge variant="warning">3</Badge>
          <Badge variant="destructive">7</Badge>
        </div>
      </div>
    </div>
  ),
}

export const UseCases: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div>
        <h3 className="text-sm font-semibold mb-3">Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Messages</span>
            <Badge variant="default">3</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Alerts</span>
            <Badge variant="error">1</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Updates</span>
            <Badge variant="info">5</Badge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Status Labels</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="info">Active</Badge>
            <span>Service is running</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="warning">Pending</Badge>
            <span>Awaiting approval</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="error">Failed</Badge>
            <span>Operation failed</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Draft</Badge>
            <span>Not published</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Tags</h3>
        <div className="flex gap-1 flex-wrap">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Storybook</Badge>
          <Badge variant="outline">UI</Badge>
        </div>
      </div>
    </div>
  ),
}

export const AccessibilityExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-3">Accessible Status Indicators</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="red-dot" aria-label="Offline status" />
            <span>Server Status</span>
            <span className="sr-only">Offline</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info" aria-label="5 unread notifications">5</Badge>
            <span>Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="error" aria-label="Critical error">!</Badge>
            <span>System Alert</span>
          </div>
        </div>
      </div>
    </div>
  ),
} 