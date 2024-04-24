import { html } from 'lit-html';
import { logoBarData } from './logo-bar.data';
const meta = {
  title: 'components/molecules/bs-logo-bar',
  component: 'bs-logo-bar',
  args: logoBarData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=134-249&mode=design&t=8N0ojd1j9Eng8Az3-0',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-logo-bar logo="${JSON.stringify(args.logo)}" />`,
};
//# sourceMappingURL=logo-bar.stories.js.map
