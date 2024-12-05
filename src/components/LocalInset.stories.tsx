import type { Meta, StoryObj } from '@storybook/react';

import LocalInset from './LocalInset';

const meta = {
  component: LocalInset,
} satisfies Meta<typeof LocalInset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};