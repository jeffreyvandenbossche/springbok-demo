import { html } from 'lit-html';
import { articleCardData } from './article-card.data';
const meta = {
  title: 'components/molecules/bs-article-card',
  component: 'bs-article-card',
  args: articleCardData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=212-63&mode=design&t=LwBOI08cDVEv9pNM-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-container style="max-width: 768px">
      <bs-article-card
        article-image="${JSON.stringify(args.articleImage)}"
        article-title="${args.articleTitle}"
        article-cta="${args.articleCta}"
        article-href="${args.articleHref}"
      />
    </bs-container>
  `,
};
//# sourceMappingURL=article-card.stories.js.map
