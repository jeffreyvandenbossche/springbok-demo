import { html } from 'lit-html';
import { experienceZoneCardData, experienceZoneSingluarCardData, } from './experience-zone-card.data';
import { ColorTheme } from '../../layouts/default-layout/default-layout.types';
const meta = {
  title: 'components/molecules/bs-experience-zone-card',
  component: 'bs-experience-zone-card',
  args: experienceZoneCardData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=160-62&mode=design&t=bzFoaXJOrx3w5zhA-4',
    },
    controls: {
      exclude: ['singular', 'card-title', 'card-image', 'parsedCardImage'],
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-default-layout theme="${ColorTheme.Light}">
      <bs-container contained>
        <bs-experience-zone-card
          style="width:372px;"
          card-image="${JSON.stringify(args.cardImage)}"
          card-title="${args.cardTitle}"
        ></bs-experience-zone-card>
      </bs-container>
    </bs-default-layout>
  `,
};
export const Singular = {
  render: (args) => html `
    <bs-default-layout theme="${ColorTheme.Light}">
      <bs-container contained>
        <bs-experience-zone-card
          card-image="${JSON.stringify(args.cardImage)}"
          card-title="${args.cardTitle}"
          singular="${args.singular}"
        ></bs-experience-zone-card>
      </bs-container>
    </bs-default-layout>
  `,
  args: experienceZoneSingluarCardData,
};
//# sourceMappingURL=experience-zone-card.stories.js.map
