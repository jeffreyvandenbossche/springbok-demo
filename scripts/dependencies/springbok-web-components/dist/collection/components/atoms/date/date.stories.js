import { html } from 'lit-html';
import { dateData } from './date.data';
const meta = {
  title: 'components/atoms/bs-date',
  component: 'bs-date',
  argTypes: {
    languageIsoCode: {
      control: 'select',
      options: ['undefined', 'en', 'fr-BE', 'nl-BE', 'de', 'es', 'ar-MA', 'ja'],
    },
    isWhite: {
      control: 'boolean',
    },
  },
  args: {
    date: dateData.date,
    languageIsoCode: dateData.languageIsoCode,
    isWhite: dateData.isWhite,
  },
};
export default meta;
export const Default = {
  render: (args) => html `<div class="container ${args.isWhite && 'is-dark'}">
        <bs-date
          date=${args.date}
          language-iso-code=${args.languageIsoCode}
          is-white=${args.isWhite}
        />
      </div>

      <style>
        .container.is-dark {
          background: #364650;
        }
      </style>`,
};
//# sourceMappingURL=date.stories.js.map
