import { html } from 'lit-html';
import { accordionItemContentData, accordionItemData } from './accordion-item.data';
const meta = {
  title: 'components/molecules/bs-accordion-item',
  component: 'bs-accordion-item',
  args: Object.assign(Object.assign({}, accordionItemData), accordionItemContentData),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=134-88&mode=design&t=kfHiRGJyfu6y0ai6-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
      <bs-accordion-item identifier=${args.identifier} active="${args.active}" accordion-item-title="${args.accordionItemTitle}">
        <bs-text slot="accordion-content" text="${args.text}">
      </bs-accordion-item>
    `,
};
//# sourceMappingURL=accordion-item.stories.js.map
