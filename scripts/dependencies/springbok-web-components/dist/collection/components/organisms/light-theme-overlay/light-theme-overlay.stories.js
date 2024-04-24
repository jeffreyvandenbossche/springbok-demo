import { html } from 'lit-html';
const meta = {
  title: 'components/organisms/bs-light-overlay',
  component: 'bs-light-overlay',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
export const Default = {
  render: () => html `
    <bs-light-overlay>
      <div class="slot-item" slot="media">
        <span>:: Media slot :: link</span>
      </div>
    </bs-light-overlay>

    <style>
      .slot-item,
      .slot-item a {
        color: #edacab;
      }
      .slot-item a:hover {
        color: #e27979;
      }
    </style>
  `,
};
//# sourceMappingURL=light-theme-overlay.stories.js.map
