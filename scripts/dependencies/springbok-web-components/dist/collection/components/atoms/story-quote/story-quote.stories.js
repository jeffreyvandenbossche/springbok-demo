import { html } from 'lit-html';
import { storyQuoteData } from './story-quote.data';
const meta = {
  title: 'components/atoms/bs-story-quote',
  component: 'bs-story-quote',
  args: storyQuoteData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=351-55&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-story-quote
      text="${args.text}"
      author-image=${JSON.stringify(args.authorImage)}
      author-name=${args.authorName}
      author-position=${args.authorPosition}
      source="${args.source}"
    />`,
};
//# sourceMappingURL=story-quote.stories.js.map
