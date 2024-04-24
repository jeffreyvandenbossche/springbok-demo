import { html } from 'lit-html';
import { PlayerState } from '../../organisms/youtube-video/youtube-video.types';
const meta = {
  title: 'components/molecules/bs-youtube-control',
  component: 'bs-youtube-control',
  args: {
    playerState: PlayerState.PLAYING,
    mute: false,
    currentTime: 33,
  },
  argTypes: {
    playerState: {
      control: 'select',
      options: Object.values(PlayerState),
    },
    mute: {
      control: 'boolean',
    },
    currentTime: {
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 0.1,
      },
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-youtube-control
      player-state="${args.playerState}"
      mute="${args.mute}"
      current-time="${args.currentTime}"
    ></bs-youtube-control>`,
};
//# sourceMappingURL=youtube-control.stories.js.map
