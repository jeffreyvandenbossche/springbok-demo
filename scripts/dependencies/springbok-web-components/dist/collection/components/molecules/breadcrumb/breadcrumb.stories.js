import { html } from 'lit-html';
import { breadcrumbData } from './breadcrumb.data';
const meta = {
  title: 'components/molecules/bs-breadcrumb',
  component: 'bs-breadcrumb',
  args: breadcrumbData,
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-breadcrumb data="${JSON.stringify(args.data)}" /> `,
};
//# sourceMappingURL=breadcrumb.stories.js.map
