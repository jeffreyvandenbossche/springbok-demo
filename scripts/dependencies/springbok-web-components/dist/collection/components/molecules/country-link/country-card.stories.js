import { html } from 'lit-html';
import { countryCardData } from './country-card.data';
const meta = {
  title: 'components/molecules/bs-country-card',
  component: 'bs-country-card',
  args: countryCardData,
};
export default meta;
export const Default = {
  render: (args) => html `<bs-country-card
      flag="${JSON.stringify(args.flag)}"
      country-title="${JSON.stringify(args.countryTitle)}"
      brands="${JSON.stringify(args.brands)}"
    ></bs-country-card>`,
};
//# sourceMappingURL=country-card.stories.js.map
