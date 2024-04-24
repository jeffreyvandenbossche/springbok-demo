import { html } from 'lit-html';
import { followUsData } from './follow-us-banner.data';
const meta = {
  title: 'components/molecules/bs-follow-us-banner',
  component: 'bs-follow-us-banner',
  args: followUsData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=227-655&mode=design&t=7dw1JAQaBXqzhe54-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-follow-us-banner
      section-title=${args.sectionTitle}
      social-links="${JSON.stringify(args.socialLinks)}"
    />`,
};
//# sourceMappingURL=follow-us-banner.stories.js.map
