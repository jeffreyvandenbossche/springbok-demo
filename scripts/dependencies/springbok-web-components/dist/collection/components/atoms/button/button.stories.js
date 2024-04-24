import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { buttonPrimary, buttonPrimaryGhost, buttonSecondary, buttonSecondaryGhost, } from './button.data';
import { ButtonTarget, ButtonType, ButtonVariant } from './button.types';
import { IconName } from '../icon/icon.types';
const meta = {
  title: 'components/atoms/bs-button',
  component: 'bs-button',
  argTypes: {
    text: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: [Object.values(ButtonTarget)],
    },
    type: {
      control: 'select',
      options: [Object.values(ButtonType)],
    },
    action: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
    iconLeft: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
    },
    iconRight: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
    },
    isFullWidth: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    ghost: {
      control: 'boolean',
    },
  },
  args: buttonPrimary,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?node-id=1%3A4',
    },
    controls: {
      exclude: ['is-disabled', 'is-full-width', 'icon-position', 'icon-left', 'icon-right'],
    },
  },
};
export default meta;
const Default = {
  render: (args) => html `<bs-button
      text="${args.text}"
      href=${args.href}
      target=${args.target}
      type=${args.type}
      action=${args.action}
      variant=${args.variant}
      icon-left=${args.iconLeft}
      icon-right=${args.iconRight}
      is-full-width=${args.isFullWidth}
      is-disabled=${args.isDisabled}
      ghost="${args.ghost}"
      @bsButtonClick=${action('grsClickAction')}
    ></bs-button>`,
};
export const Primary = Object.assign({}, Default);
export const PrimaryGhost = Object.assign(Object.assign({}, Default), { args: buttonPrimaryGhost });
export const Secondary = Object.assign(Object.assign({}, Default), { args: buttonSecondary });
export const SecondaryGhost = Object.assign(Object.assign({}, Default), { args: buttonSecondaryGhost });
//# sourceMappingURL=button.stories.js.map
