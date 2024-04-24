import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { headerNavigationData } from '../overlay-menu/overlay-menu.data';
const meta = {
  title: 'components/organisms/bs-header-navigation',
  component: 'bs-header-navigation',
  args: headerNavigationData,
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-header-navigation
      header-navigation=${JSON.stringify(args.headerNavigation)}
      @bsClickAction=${action('bsClickAction')}
    ></bs-header-navigation>

    <bs-container contained class="container">
      <img class="banner" src="/images/sandy-banner.jpg" />
    </bs-container>

    <style>
      .sb-main-padded.sb-show-main {
        padding: 0;
      }
      .container {
        height: 200vh;
        background: #bbb;
      }
      .banner {
        height: 350px;
        width: 100%;
        object-fit: cover;
      }
    </style>
  `,
};
//# sourceMappingURL=header-navigation.stories.js.map
