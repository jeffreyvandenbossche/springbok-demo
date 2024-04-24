import { html } from 'lit-html';
import { tooltipData } from './tooltip.data';
const meta = {
  title: 'components/molecules/bs-tooltip',
  component: 'bs-tooltip',
  args: tooltipData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=12-155&mode=design&t=6reHNDBGv9A6o3we-0',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <div class="container">
      Excess soil compaction is one of the principal factors that damages the fertility of your
      land. This phenomenon can be avoided if you are equipped with good tyres. You must use tyres
      that are adapted to your type of soil and the activity carried out by your machines.
      <br /><br />
      More high-tech tyres which can work at low pressure have the advantage of significantly
      reducing
      <bs-tooltip title-text=${args.titleText} content-text=${args.contentText}>
        soil compaction
      </bs-tooltip>
      certain tyre technologies effectively allow you to work continuously at low pressure because
      the sidewalls are supple yet resistant.They flatten out onto the ground more to spread the
      load over a larger contact patch.They transmit more horizontal force than vertical pressure
      which damages the deep soil layers. Lorem ipsum dolor sit amet
    </div>

    <style>
      .sb-main-padded.sb-show-main {
        padding: 0;
      }
      .container {
        height: 100%;
        padding: 20px;
        font-size: 20px;
        line-height: 1.5;
      }

      .container.is-dark-mode {
        background: #161616;
        color: #ffffff;
      }
    </style>
  `,
};
//# sourceMappingURL=tooltip.stories.js.map
