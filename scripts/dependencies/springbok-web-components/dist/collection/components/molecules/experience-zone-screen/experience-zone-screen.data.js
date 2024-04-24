import { ExperienceZoneLayout } from '../experience-zone/experience-zone.types';
import { TitleColor, TitleSize, TitleTag, TitleVariant } from '../../atoms/title/title.types';
export const experienceZoneScreenOneData = {
  layout: ExperienceZoneLayout.Video,
  disclaimer: '',
  components: [
    {
      tag: 'bs-video-card',
      data: {
        videoId: '-Kz4ta77Hik',
        mute: true,
        image: {
          src: 'https://s7g10.scene7.com/is/image/bridgestoneeudev/testimage',
          srcset: `https://s7g10.scene7.com/is/image/bridgestoneeudev/testimage:DEFAULT_MOBILE 400w,
          https://s7g10.scene7.com/is/image/bridgestoneeudev/testimage:DEFAULT_SCREEN 1200w,
          https://s7g10.scene7.com/is/image/bridgestoneeudev/testimage:DEFAULT_DESKTOP 1440w,
          https://s7g10.scene7.com/is/image/bridgestoneeudev/testimage:DEFAULT_LARGE 1920w`,
          width: '0',
          height: '0',
          imageSizes: '1920px, 1440px, 1200px, 400px',
          itemprop: 'contentUrl',
          lazy: true,
        },
        inline: true,
      },
    },
  ],
};
export const experienceZoneScreenTwoData = {
  layout: ExperienceZoneLayout.Two,
  disclaimer: '',
  components: [
    {
      tag: 'bs-quote',
      data: {
        text: 'Lorem ipsum dolor sit amet consectetur. Venenatis eget nunc amet placerat feugiat. Nullam id dictumst amet porta consectetur aliquet dui dictumst. Placerat nibh hendrerit.',
        authorName: 'Jane Doe',
        authorPosition: 'Job title at company',
        source: 'https://www.goodreads.com/quotes/36560-to-be-or-not-to-be-that-is-the-question',
        authorImage: { src: '/images/author.jpg', width: 640, height: 930 },
      },
    },
    {
      tag: 'bs-image',
      data: {
        src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
        srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
        width: '1920',
        height: 'auto',
        imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
        altText: 'Test image',
        itemprop: 'contentUrl',
        lazy: true,
        cover: true,
      },
    },
  ],
};
export const experienceZoneScreenThreeData = {
  layout: ExperienceZoneLayout.Three,
  disclaimer: 'Braking wet (80 km/h to 20 km/h, distance in metres): Bridgestone (27,2), Continental (28,3), Goodyear (28,9), Michelin (31,4). Braking dry (100 km/h to 0 km/h, distance in metres): Michelin (37,8), Bridgestone (38.6), Continental (41,3), Goodyear (42,3). Braking snow (40 km/h to 5 km/h, distance in metres), Michelin (17,1), Bridgestone (17,3), Goodyear (17,5), Continental (18,0).',
  components: [
    {
      tag: 'bs-quote',
      data: {
        text: 'Lorem ipsum dolor sit amet consectetur. Venenatis eget nunc amet placerat feugiat. Nullam id dictumst amet porta consectetur aliquet dui dictumst. Placerat nibh hendrerit.',
        authorName: 'Jane Doe',
        authorPosition: 'Job title at company',
        source: 'https://www.goodreads.com/quotes/36560-to-be-or-not-to-be-that-is-the-question',
        authorImage: { src: '/images/author.jpg', width: 640, height: 930 },
      },
    },
    {
      tag: 'bs-title',
      data: {
        variant: TitleVariant.None,
        color: TitleColor.Undefined,
        tag: TitleTag.H2,
        text: 'Some title',
        size: TitleSize.Head2,
      },
    },
    {
      tag: 'bs-image',
      data: {
        src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
        srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
        width: '1920',
        height: 'auto',
        imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
        altText: 'Test image',
        itemprop: 'contentUrl',
        lazy: true,
        cover: true,
      },
    },
  ],
};
//# sourceMappingURL=experience-zone-screen.data.js.map
