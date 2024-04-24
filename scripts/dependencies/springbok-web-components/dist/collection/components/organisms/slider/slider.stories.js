import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
const meta = {
  title: 'components/organisms/bs-slider',
  component: 'bs-slider',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=323-314&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: () => html `
    <bs-container contained>
      <bs-slider @bsClickAction=${action('bsClickAction')}></bs-slider>
    </bs-container>
  `,
};
//# sourceMappingURL=slider.stories.js.map
