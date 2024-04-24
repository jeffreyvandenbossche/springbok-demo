import { html } from 'lit-html';
import { ctaBannerPrimaryData, ctaBannerPrimaryFilledData, ctaBannerSecondaryData, ctaBannerSecondaryFilledData, } from './cta-banner.data';
import { BannerVariant } from './cta-banner.types';
const meta = {
  title: 'components/molecules/bs-cta-banner',
  component: 'bs-cta-banner',
  argTypes: {
    variant: {
      control: 'select',
      options: [...Object.values(BannerVariant)],
    },
    filled: {
      control: 'boolean',
    },
  },
};
export default meta;
const Default = {
  render: (args) => html ` <bs-cta-banner
      banner-title=${JSON.stringify(args.bannerTitle)}
      subtitle=${args.subtitle}
      button=${JSON.stringify(args.button)}
      variant=${args.variant}
      filled=${args.filled}
    />`,
};
export const Primary = Object.assign(Object.assign({}, Default), { args: ctaBannerPrimaryData });
export const PrimaryFilled = Object.assign(Object.assign({}, Default), { args: ctaBannerPrimaryFilledData });
export const Secondary = Object.assign(Object.assign({}, Default), { args: ctaBannerSecondaryData });
export const SecondaryFilled = Object.assign(Object.assign({}, Default), { args: ctaBannerSecondaryFilledData });
//# sourceMappingURL=cta-banner.stories.js.map
