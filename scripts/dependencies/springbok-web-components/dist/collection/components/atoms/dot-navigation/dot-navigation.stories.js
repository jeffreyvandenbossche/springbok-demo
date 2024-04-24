import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { dotNavData } from './dot-navigation.data';
const meta = {
  title: 'components/atoms/bs-dot-navigation',
  component: 'bs-dot-navigation',
  argTypes: {
    index: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      expanded: true,
    },
    items: {
      control: { type: 'number', min: 1, max: 11, step: 1 },
    },
    slow: {
      control: { type: 'boolean' },
    },
  },
  args: dotNavData,
  parameters: {
    controls: {
      exclude: ['dotNavRef', 'timeout', 'onDotClick'],
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-dot-navigation
      items="${args.items}"
      index="${args.index}"
      slow="${args.slow}"
      @bsDotNavigationEnded=${action('bsDotNavigationEnded')}
    />`,
};
//# sourceMappingURL=dot-navigation.stories.js.map
