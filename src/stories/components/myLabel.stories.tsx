import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/Label',
  component: MyLabel,
  argTypes: {
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = { label: 'Label Primary', size: 'normal', color: 'primary' };

export const Danger = Template.bind({});

Danger.args = { label: 'Label Danger', size: 'medium', color: 'danger', allCaps: true };

export const Success = Template.bind({});

Success.args = { label: 'Label Success', size: 'medium', color: 'success', allCaps: false };
