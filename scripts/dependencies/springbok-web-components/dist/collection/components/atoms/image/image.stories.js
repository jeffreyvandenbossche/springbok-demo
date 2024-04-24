import { html } from 'lit-html';
import { imageData } from './image.data';
const meta = {
  title: 'components/atoms/bs-image',
  component: 'bs-image',
  argTypes: {
    cover: {
      control: 'boolean',
    },
    captionCover: {
      control: 'boolean',
    },
    lazy: {
      control: 'boolean',
    },
  },
  args: imageData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3GS98fA3mt1FZRBYvKGxrk/BS---02-ATOMS?type=design&node-id=350-227&mode=design&t=as2EbOn2oySOZEf9-4',
    },
    controls: {
      exclude: 'caption-cover',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `<div class="container ${args.cover && 'has-background-image'}">
        <bs-image
          src=${args.src}
          srcset=${args.srcset}
          width=${args.width}
          height=${args.height}
          image-sizes=${args.imageSizes}
          alt-text=${args.altText}
          itemprop=${args.itemprop}
          caption=${args.caption}
          cover=${args.cover}
          source=${args.source}
          caption-cover=${args.captionCover}
        />
      </div>
    </div>

    <style>
    .container.has-background-image {
      width: 500px;
      height: 300px;
    }

    bs-image {
      height: 100%;
    }
    </style>`,
};
//# sourceMappingURL=image.stories.js.map
