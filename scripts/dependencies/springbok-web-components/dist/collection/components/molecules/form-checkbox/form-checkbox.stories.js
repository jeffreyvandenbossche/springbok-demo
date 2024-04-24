import { html } from 'lit-html';
import { formCheckboxData } from './form-checkbox.data';
const meta = {
  title: 'components/molecules/bs-form-checkbox',
  component: 'bs-form-checkbox',
  args: formCheckboxData,
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-form-checkbox
      name="${args.name}"
      required-message="${args.requiredMessage}"
      required="${args.required}"
      label="${args.label}"
      options="${JSON.stringify(args.options)}"
    />
  `,
};
//# sourceMappingURL=form-checkbox.stories.js.map
