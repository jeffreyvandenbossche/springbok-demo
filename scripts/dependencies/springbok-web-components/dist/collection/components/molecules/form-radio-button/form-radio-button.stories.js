import { html } from 'lit-html';
import { formRadioButtonData } from './form-radio-button.data';
const meta = {
  title: 'components/molecules/bs-form-radio-button',
  component: 'bs-form-radio-button',
  args: formRadioButtonData,
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-form-radio-button
      name="${args.name}"
      required-message="${args.requiredMessage}"
      required="${args.required}"
      label="${args.label}"
      options="${JSON.stringify(args.options)}"
    />`,
};
//# sourceMappingURL=form-radio-button.stories.js.map
