import { html } from 'lit-html';
import { headerNavigationData } from './overlay-menu.data';
const meta = {
  title: 'components/organisms/bs-overlay-menu',
  component: 'bs-overlay-menu',
  args: headerNavigationData,
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-overlay-menu header-navigation=${JSON.stringify(args.headerNavigation)}></bs-overlay-menu>
  `,
};
//# sourceMappingURL=overlay-menu.stories.js.map
