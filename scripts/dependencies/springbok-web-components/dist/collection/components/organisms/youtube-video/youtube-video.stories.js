import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
const meta = {
  title: 'components/organisms/bs-youtube-video',
  component: 'bs-youtube-video',
  args: {
    videoId: '-Kz4ta77Hik',
    mute: false,
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-youtube-video
      video-id="${args.videoId}"
      mute="${args.mute}"
      @bsYoutubeControllerUpdate=${action('YoutubeControlUpdateEvent')}
    />`,
};
//# sourceMappingURL=youtube-video.stories.js.map
