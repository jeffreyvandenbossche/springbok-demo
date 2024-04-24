import { html } from 'lit-html';
import { articlesData } from './related-articles.data';
const meta = {
  title: 'components/organisms/bs-related-articles',
  component: 'bs-related-articles',
  args: articlesData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=323-314&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-container style="max-width: 768px">
      <bs-related-articles
        articles-data="${JSON.stringify(args.articlesData)}"
        related-articles-title="${JSON.stringify(args.relatedArticlesTitle)}"
      />
    </bs-container>
  `,
};
//# sourceMappingURL=related-articles.stories.js.map
