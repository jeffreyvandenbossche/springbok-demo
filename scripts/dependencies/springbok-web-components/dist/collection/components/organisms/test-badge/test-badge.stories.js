import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { testBadgeData } from './test-badge.data';
const meta = {
  title: 'components/organisms/bs-test-badge',
  component: 'bs-test-badge',
  args: testBadgeData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=323-314&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-container contained>
      <bs-test-badge-slider
        test-badge-collection="${JSON.stringify(args.testBadgeCollection)}"
        @bsClickAction=${action('bsClickAction')}
      />
    </bs-container>
  `,
};
//# sourceMappingURL=test-badge.stories.js.map
