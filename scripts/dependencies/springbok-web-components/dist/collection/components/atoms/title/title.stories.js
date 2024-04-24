import { html } from 'lit-html';
import { TitleColor, TitleSize, TitleTag, TitleVariant } from './title.types';
const meta = {
  title: 'components/atoms/bs-title',
  component: 'bs-title',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=350-117',
    },
  },
  argTypes: {
    tag: {
      control: 'select',
      options: Object.values(TitleTag),
    },
    text: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: Object.values(TitleColor),
    },
    variant: {
      control: 'select',
      options: Object.values(TitleVariant),
    },
    size: {
      control: 'select',
      options: Object.values(TitleSize),
    },
  },
  args: {
    tag: TitleTag.H1,
    text: 'Hello Bridgestone!',
    color: TitleColor.Black,
    variant: TitleVariant.None,
    size: TitleSize.Head1,
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-title
      variant=${args.variant}
      color="${args.color}"
      tag="${args.tag}"
      text="${args.text}"
      size="${args.size}"
    ></bs-title>`,
};
//# sourceMappingURL=title.stories.js.map
