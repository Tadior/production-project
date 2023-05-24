import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Code>;

export const Template: ComponentStory<typeof Code> = (args) => (
  <Code {...args} />
);
