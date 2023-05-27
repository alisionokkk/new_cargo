import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,

};

type Story = StoryObj<typeof Button>;

export const addRole: Story = {
  args: {
    label: 'Выбрать роль',
  },
};

export const addName: Story = {
  args: {
    ...addRole.args,
    label: 'Ввести ФИО',
  },
};

export const addPhoto: Story = {
  args: {
    ...addRole.args,
    label: 'Загрузить фото',
  },
};
export const Next: Story = {
  args: {
    ...addRole.args,
    label: 'Далее',
  },
};
export const MakePhoto: Story = {
  args: {
    ...addRole.args,
    label: 'Сделать фото',
  },
};
export const Choice: Story = {
  args: {
    ...addRole.args,
    label: 'Выбрать',
  },
};
export default meta;
