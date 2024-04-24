import { html } from 'lit-html';
import { authorData } from './author.data';
const meta = {
  title: 'components/molecules/bs-author',
  component: 'bs-author',
  args: authorData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hb3lucuHw6Bk3BU7qUVgIY/Bridgestone-DXP---UI?type=design&node-id=7348-2288&mode=design&t=My0ItrlOMZXorpNS-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-author
      author-image=${JSON.stringify(args.authorImage)}
      author-name=${args.authorName}
      author-position=${args.authorPosition}
      about-title=${args.aboutTitle}
      description=${args.description}
    />`,
};
//# sourceMappingURL=author.stories.js.map
