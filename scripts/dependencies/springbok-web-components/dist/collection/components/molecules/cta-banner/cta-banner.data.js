import { TitleColor, TitleSize, TitleTag, TitleVariant } from '../../atoms/title/title.types';
import { ButtonTarget, ButtonVariant } from '../../atoms/button/button.types';
import { IconName } from '../../atoms/icon/icon.types';
export const ctaBannerPrimaryData = {
  bannerTitle: {
    tag: TitleTag.H2,
    text: 'Share your experience with Turanza All Season 6',
    color: TitleColor.Black,
    variant: TitleVariant.None,
    size: TitleSize.Head2,
  },
  button: {
    text: 'Subscribe now',
    href: 'https://google.be',
    target: ButtonTarget.Internal,
    iconRight: IconName.ArrowForward,
  },
  variant: ButtonVariant.Primary,
  filled: false,
};
export const ctaBannerPrimaryFilledData = {
  bannerTitle: {
    tag: TitleTag.H2,
    text: 'Looking for a Bridgestone tyre?',
    color: TitleColor.Black,
    variant: TitleVariant.None,
    size: TitleSize.Head2,
  },
  subtitle: '<p>Find the right <b>Bridgestone</b> tyre for your vehicle.</p>',
  button: {
    text: 'Subscribe now',
    href: 'https://google.be',
    target: ButtonTarget.Internal,
    iconRight: IconName.ArrowForward,
  },
  variant: ButtonVariant.Primary,
  filled: true,
};
export const ctaBannerSecondaryData = {
  bannerTitle: {
    tag: TitleTag.H2,
    text: 'Download the tyre size table for Turanza All Season 6',
    color: TitleColor.Black,
    variant: TitleVariant.None,
    size: TitleSize.Head2,
  },
  subtitle: '<p>Lorem ipsum dolor sit amet consectet metus pellentesque.</p>',
  button: {
    text: 'View pdf',
    href: 'https://google.be',
    target: ButtonTarget.Internal,
    iconLeft: IconName.Open,
  },
  variant: ButtonVariant.Secondary,
  filled: false,
};
export const ctaBannerSecondaryFilledData = {
  bannerTitle: {
    tag: TitleTag.H2,
    text: 'Share your experience with Turanza All Season 6',
    color: TitleColor.Black,
    variant: TitleVariant.None,
    size: TitleSize.Head2,
  },
  button: {
    text: 'Subscribe now',
    href: 'https://google.be',
    target: ButtonTarget.Internal,
    iconRight: IconName.ArrowForward,
  },
  variant: ButtonVariant.Secondary,
  filled: true,
};
//# sourceMappingURL=cta-banner.data.js.map
