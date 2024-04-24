import { html } from 'lit-html';
import { blogHeaderData } from './blog-header.data';
const meta = {
  title: 'components/organisms/bs-blog-header',
  component: 'bs-blog-header',
  args: blogHeaderData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=224-16&mode=design&t=TcuRGFkeUaDo6jUq-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-blog-header
        logo=${JSON.stringify(args.logo)}
        image=${JSON.stringify(args.image)}
        head=${JSON.stringify(args.head)}
      />

      <style lang="css">
        .sb-main-padded {
          padding: 0 !important;
        }
      </style>`,
};
//# sourceMappingURL=blog-header.stories.js.map
