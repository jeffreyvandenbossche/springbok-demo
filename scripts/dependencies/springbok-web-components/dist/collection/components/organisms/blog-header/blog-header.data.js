import { TitleColor, TitleTag, TitleVariant } from '../../atoms/title/title.types';
export const blogHeaderData = {
  image: {
    src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
    srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
    width: 1920,
    height: 'auto',
    imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
    altText: 'Test image 123',
    itemprop: 'contentUrl',
    caption: 'Manchester: Bridgestone Olympic Games Ambassador, Lutalo Muhammad with Tokyo 2020 Team GB Bronze Medallist Taekwondo, Bianca Walkden.',
    cover: false,
    source: 'Photo: Jane Doe',
    captionCover: false,
  },
  logo: {
    src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
    altText: 'Mclaren',
    width: 200,
    height: 30,
  },
  head: {
    tag: TitleTag.H1,
    text: 'Lorem ipsum dolor sit amet consectetur. Nulla ullamcorper.',
    color: TitleColor.Black,
    variant: TitleVariant.Slash,
  },
};
//# sourceMappingURL=blog-header.data.js.map
