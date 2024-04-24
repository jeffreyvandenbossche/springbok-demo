import { html } from 'lit-html';
import { shareBannerData } from './share-banner.data';
const meta = {
  title: 'components/molecules/bs-share-banner',
  component: 'bs-share-banner',
  args: shareBannerData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=227-655&mode=design&t=7dw1JAQaBXqzhe54-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-share-banner section-title=${args.sectionTitle} />`,
};
//# sourceMappingURL=share-banner.stories.js.map
