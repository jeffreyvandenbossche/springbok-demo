import { html } from 'lit-html';
import { newsletterBannerData } from './newsletter-banner.data';
const meta = {
  title: 'components/molecules/bs-newsletter-banner',
  component: 'bs-newsletter-banner',
  args: newsletterBannerData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=227-625&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-newsletter-banner
      section-title=${args.sectionTitle}
      subtitle=${args.subtitle}
      button=${JSON.stringify(args.button)}
    />`,
};
//# sourceMappingURL=newsletter-banner.stories.js.map
