import { html } from 'lit-html';
import { IconName } from '../../atoms/icon/icon.types';
import { formSelectData } from './form-select.data';
const meta = {
  title: 'components/molecules/bs-form-select',
  component: 'bs-form-select',
  argTypes: {
    icon: {
      control: 'select',
      options: Object.values(IconName),
    },
  },
  args: formSelectData,
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-form-select
      name="${args.name}"
      label="${args.label}"
      icon="${args.icon}"
      required="${args.required}"
      required-message="${args.requiredMessage}"
      options="${JSON.stringify(args.options)}"
    />`,
};
//# sourceMappingURL=form-select.stories.js.map
