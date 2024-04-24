import { IconName } from '../../atoms/icon/icon.types';
import { Variant } from './header-banner.types';
import { TitleColor, TitleTag, TitleVariant } from '../../atoms/title/title.types';
import { DEFAULT_IMAGE_16_9 } from '../../atoms/image/image.data';
export const headerBannerImageData = {
  image: Object.assign({}, DEFAULT_IMAGE_16_9),
  label: 'Tagline',
  headerTitle: {
    tag: TitleTag.H1,
    text: 'Prepared to perform, whatever the season',
    color: TitleColor.Black,
    variant: TitleVariant.None,
  },
  button: {
    text: 'Get Turanza All Season 6',
    iconRight: IconName.ArrowForward,
    href: 'https://bridgestone.co.uk',
  },
  variant: Variant.Image,
};
export const headerBannerVideoData = {
  logo: {
    src: 'https://s7g10.scene7.com/is/content/bridgestoneeu/paralympic%20partner%20logo',
    altText: 'Olympic logo',
    width: 200,
    height: 30,
  },
  label: 'Turnaza',
  headerTitle: {
    tag: TitleTag.H1,
    text: 'Prepared to perform, whatever the season',
    color: TitleColor.Black,
    variant: TitleVariant.None,
  },
  subtitle: '<p>The road to Paris 2024 has begun. Bridgestone welcomes the Olympic Games back to Europe. Join us for the journey.</p>',
  button: {
    text: 'LEARN MORE',
    iconRight: IconName.ArrowForward,
    href: 'https://bridgestone.co.uk',
  },
  video: {
    videoId: 'mj53UNyQN0I',
    inline: false,
    mute: false,
    image: Object.assign(Object.assign({}, DEFAULT_IMAGE_16_9), { src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:GRIDVIEW_MEDIUM_LARGE', srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:GRIDVIEW_MEDIUM_LARGE' }),
  },
  variant: Variant.Video,
};
export const headerBannerVideoInlineData = Object.assign(Object.assign({}, headerBannerVideoData), { video: {
    videoId: 'mj53UNyQN0I',
    inline: true,
    mute: true,
    autoplay: true,
    image: Object.assign(Object.assign({}, DEFAULT_IMAGE_16_9), { src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:GRIDVIEW_MEDIUM_LARGE', srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:GRIDVIEW_MEDIUM_LARGE' }),
  } });
//# sourceMappingURL=header-banner.data.js.map
