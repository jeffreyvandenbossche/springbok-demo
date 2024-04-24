import { html } from 'lit-html';
import { productCardData } from './product-card.data';
const meta = {
  title: 'components/molecules/bs-product-card',
  component: 'bs-product-card',
  args: productCardData,
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
    <bs-product-card
      card-title="${args.cardTitle}"
      card-text="${args.cardText}"
      card-image="${JSON.stringify(args.cardImage)}"
    />
  `,
};
//# sourceMappingURL=product-card.stories.js.map
