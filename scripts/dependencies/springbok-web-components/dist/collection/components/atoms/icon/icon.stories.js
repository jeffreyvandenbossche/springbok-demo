import { html } from 'lit-html';
import { IconName } from './icon.types';
const meta = {
  title: 'components/atoms/bs-icon',
  component: 'bs-icon',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-icon style="font-size: ${args.size}px; color: ${args.color}" name=${args.name} />
  `,
};
Default.argTypes = {
  name: {
    control: { type: 'select' },
    options: Object.values(IconName),
  },
  size: {
    control: {
      type: 'range',
      min: 24,
      max: 160,
      step: 4,
    },
  },
  color: {
    control: {
      type: 'color',
      presetColors: ['#000', '#888', '#ef3e36'],
    },
  },
};
Default.args = {
  name: IconName.ArrowForward,
  size: 96,
  color: '#000',
};
/*
 *  Overview
 */
const HubRegularIcons = () => Object.values(IconName).map((icon) => {
  if (!icon.includes('product')) {
    return html `
        <li class="el-bs-icon">
          <bs-icon style="font-size:36px" name=${icon}></bs-icon>
          <p>${icon}</p>
        </li>
      `;
  }
  return '';
});
export const Overview = {
  render: () => html `
    <div class="icon-head">
      <p>Regular</p>
    </div>
    <div class="icon-body">
      <ul class="list-bs-icon">
        ${HubRegularIcons()}
      </ul>
    </div>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      *:before,
      *:after {
        box-sizing: border-box;
      }

      ol,
      ul {
        list-style: none;
      }

      .list-bs-icon {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
      }
      .el-bs-icon {
        display: flex;
        align-items: center;
        width: 25%;
        padding: 15px;
      }
      @media screen and (max-width: 1280px) {
        .el-bs-icon {
          width: 33%;
        }
      }
      @media screen and (max-width: 1024px) {
        .el-bs-icon {
          width: 50%;
        }
      }
      @media screen and (max-width: 640px) {
        .el-bs-icon {
          width: 100%;
        }
      }
      .el-bs-icon bs-icon {
        margin-right: 10px;
      }
      .el-bs-icon p {
        margin: 0px;
      }

      .icon-head p {
        width: 50%;
        color: #9747ff;
        margin-top: 0px;
        margin-bottom: 1em;
      }
      .icon-body {
        border: 1px dashed #9747ff;
        border-radius: 5px;
        margin-bottom: 2em;
        color: #000;
      }
    </style>
  `,
};
//# sourceMappingURL=icon.stories.js.map
