import { html } from 'lit-html';
const meta = {
  title: 'components/molecules/bs-dark-overlay',
  component: 'bs-dark-overlay',
};
export default meta;
export const Default = {
  render: () => html `
    <bs-dark-overlay>
      <div class="slot-item" slot="media">
        <a href="https://www.bridgestone.be/">:: Media slot :: link</a>
      </div>
      <div class="slot-item" slot="controller">
        <a href="https://www.bridgestone.be/">:: Controller slot :: link</a>
      </div>
    </bs-dark-overlay>

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
//# sourceMappingURL=dark-theme-overlay.stories.js.map
