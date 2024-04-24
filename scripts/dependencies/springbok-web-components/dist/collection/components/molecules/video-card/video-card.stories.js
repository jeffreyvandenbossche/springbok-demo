import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { videoCardData } from './video-card.data';
const meta = {
  title: 'components/molecules/bs-video-card',
  component: 'bs-video-card',
  args: videoCardData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=239-194&mode=design&t=j80fz66lg0xKjOML-0',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-video-card
      video-id="${args.videoId}"
      mute="${args.mute}"
      image="${JSON.stringify(args.image)}"
      @bsOpenVideoModal=${action('bsClickAction')}
    />`,
};
//# sourceMappingURL=video-card.stories.js.map
