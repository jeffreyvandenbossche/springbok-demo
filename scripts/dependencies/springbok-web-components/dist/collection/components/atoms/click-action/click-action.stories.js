import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { ClickActionTarget, ClickActionType } from './click-action.types';
const meta = {
  title: 'components/atoms/bs-click-action',
  component: 'bs-click-action',
  argTypes: {
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: Object.values(ClickActionType),
    },
    href: {
      control: 'text',
      defaultValue: undefined,
    },
    target: {
      control: 'select',
      options: [undefined, ...Object.values(ClickActionTarget)],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    name: 'bs-click-action name',
    value: 'bs-click-action value',
    type: ClickActionType.Button,
    href: undefined,
    target: undefined,
    disabled: false,
    ariaLabel: undefined,
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-click-action
      name=${args.name}
      value=${args.value}
      type=${args.type}
      href=${args.href}
      target=${args.target}
      disabled=${args.disabled}
      aria-label-text=${args.ariaLabelText}
      @bsClickAction=${action('bsClickAction')}
    >
      Put the component on which you want an click event in this component
    </bs-click-action>`,
};
//# sourceMappingURL=click-action.stories.js.map
