import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
  children: 'Button'
};

export const Outline = Template.bind({});
Outline.args = {
  varient:"outline",
  children: 'Button',
  className : 'px-3 py-3'
};