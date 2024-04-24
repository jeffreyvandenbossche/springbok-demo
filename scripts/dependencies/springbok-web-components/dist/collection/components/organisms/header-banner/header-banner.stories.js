import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { headerBannerImageData, headerBannerVideoData, headerBannerVideoInlineData, } from './header-banner.data';
const meta = {
  title: 'components/organisms/bs-header-banner',
  component: 'bs-header-banner',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hb3lucuHw6Bk3BU7qUVgIY/BS-DXP---UI---V1?type=design&node-id=9497-21797&mode=design&t=K7plJ9DTzBjGew9S-4',
    },
  },
};
export default meta;
const Default = {
  render: (args) => html ` <bs-header-banner
      logo=${JSON.stringify(args.logo)}
      label=${args.label}
      image=${JSON.stringify(args.image)}
      header-title=${JSON.stringify(args.headerTitle)}
      subtitle=${args.subtitle}
      button=${JSON.stringify(args.button)}
      variant="${args.variant}"
      video="${JSON.stringify(args.video)}"
      @bsClickAction=${action('bsClickAction')}
    ></bs-header-banner>`,
};
export const ImageVariation = Object.assign(Object.assign({}, Default), { args: headerBannerImageData });
export const VideoVariation = Object.assign(Object.assign({}, Default), { args: headerBannerVideoData });
export const VideoInlineVariation = Object.assign(Object.assign({}, Default), { args: headerBannerVideoInlineData });
//# sourceMappingURL=header-banner.stories.js.map
