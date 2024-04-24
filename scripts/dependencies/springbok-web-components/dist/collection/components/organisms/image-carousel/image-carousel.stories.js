import { html } from 'lit-html';
import { imageCarouselData } from './image-carousel.data';
const meta = {
  title: 'components/organisms/bs-image-carousel',
  component: 'bs-image-carousel',
  args: imageCarouselData,
  argTypes: {
    slow: {
      control: 'boolean',
    },
    autoplay: {
      control: 'boolean',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=368-5898&mode=design&t=dI9qQLXJJDdAn9fD-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-image-carousel
      index="${args.index}"
      slow="${args.slow}"
      autoplay="${args.autoplay}"
      carousel-title="${args.carouselTitle}"
      logo="${JSON.stringify(args.logo)}"
      image-collection="${JSON.stringify(args.imageCollection)}"
    />`,
};
//# sourceMappingURL=image-carousel.stories.js.map
