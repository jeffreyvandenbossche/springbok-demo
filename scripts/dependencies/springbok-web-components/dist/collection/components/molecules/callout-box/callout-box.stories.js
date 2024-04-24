import { html } from 'lit-html';
import { calloutBoxData } from './callout-box.data';
import { CalloutBoxVariation } from './callout-box.types';
const meta = {
  title: 'components/molecules/bs-callout-box',
  component: 'bs-callout-box',
  args: calloutBoxData,
  argTypes: {
    variation: {
      control: 'select',
      options: [...Object.values(CalloutBoxVariation)],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=349-60&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-callout-box text=${args.text} variation=${args.variation} />`,
};
//# sourceMappingURL=callout-box.stories.js.map
