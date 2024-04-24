import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { carouselCardData } from './carousel-card.data';
const meta = {
  title: 'components/molecules/bs-carousel-card',
  component: 'bs-carousel-card',
  args: carouselCardData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=165-71&mode=design&t=3swjdXLN3gZ6YTEB-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-carousel-card
      slow="${args.slow}"
      carousel-title="${args.carouselTitle}"
      slim="${args.slim}"
      logo="${JSON.stringify(args.logo)}"
      image-collection="${JSON.stringify(args.imageCollection)}"
      cta="${args.cta}"
      @bsClickAction=${action('bsClickAction')}
    />`,
};
//# sourceMappingURL=carousel-card.stories.js.map
