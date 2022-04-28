import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './';

export default {
  title: 'Common/Slider',
  component: Slider,
  argTypes: {},
  args: {
    initialValue: '50',
    items: ['1', '25', '50', '75', '100'],
    width: '50%',
    color: undefined,
  },
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => {
  args.items = [];
  args.width = undefined;
  return <Slider {...args} />;
};

export const WithLabels: ComponentStory<typeof Slider> = (args) => {
  args.items = ['1', '25', '50', '75', '100'];
  args.width = undefined;
  return <Slider {...args} />;
};

export const CustomWidth: ComponentStory<typeof Slider> = (args) => {
  args.items = [];
  return <Slider {...args} />;
};

export const CustomWidthWithLabels: ComponentStory<typeof Slider> = (args) => {
  args.items = ['1', '25', '50', '75', '100'];
  return <Slider {...args} />;
};

export const customColor: ComponentStory<typeof Slider> = (args) => {
  args.items = ['1', '25', '50', '75', '100'];
  args.width = undefined;
  args.color = '#1f1f1f';
  return <Slider {...args} />;
};
