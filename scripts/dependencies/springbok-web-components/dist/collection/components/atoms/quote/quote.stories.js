import { html } from 'lit-html';
import { quoteData } from './quote.data';
const meta = {
  title: 'components/atoms/bs-quote',
  component: 'bs-quote',
  args: quoteData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=351-55&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-quote
      text="${args.text}"
      author-image=${JSON.stringify(args.authorImage)}
      author-name=${args.authorName}
      author-position=${args.authorPosition}
      source="${args.source}"
    />`,
};
//# sourceMappingURL=quote.stories.js.map
