import { html } from 'lit-html';
import { testBadgeModalData } from './test-badge-modal.data';
const meta = {
  title: 'components/organisms/bs-test-badge-modal',
  component: 'bs-test-badge-modal',
  args: testBadgeModalData,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-test-badge-modal
      index="${args.index}"
      test-badge-collection="${JSON.stringify(args.testBadgeCollection)}"
    />`,
};
//# sourceMappingURL=test-badge-modal.stories.js.map
