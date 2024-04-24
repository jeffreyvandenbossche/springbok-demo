import { html } from 'lit-html';
import { accordionData, accordionStory } from './accordion.data';
import { TextSize } from '../../atoms/text/text.types';
const meta = {
  title: 'components/organisms/bs-accordion',
  component: 'bs-accordion',
  args: Object.assign(Object.assign({}, accordionData), accordionStory),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=222-164&mode=design&t=4j7CDXAe2GJ7nANQ-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-accordion main-title=${JSON.stringify(args.mainTitle)}>
      ${args.stories.map((i) => html `
          <bs-accordion-item
            slot="accordion-item"
            identifier=${i.accordionItemId}
            active="false"
            accordion-item-title="${i.accordionItemTitle}"
          >
            <bs-text
              slot="accordion-content"
              size="${TextSize.Default}"
              text="${i.accordionItemText}"
            />
          </bs-accordion-item>
        `)}
    </bs-accordion>`,
};
//# sourceMappingURL=accordion.stories.js.map
