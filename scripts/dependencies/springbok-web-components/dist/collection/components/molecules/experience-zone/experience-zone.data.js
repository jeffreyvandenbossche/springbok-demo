import { TitleTag, TitleColor, TitleVariant, TitleSize } from '../../atoms/title/title.types';
import { experienceZoneScreenOneData, experienceZoneScreenThreeData, experienceZoneScreenTwoData, } from '../experience-zone-screen/experience-zone-screen.data';
import { ExperienceZoneLayout } from './experience-zone.types';
export const experienceZoneTeaserData = {
  experienceZoneData: {
    logo: {
      src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
      altText: 'fleetcare',
      width: 200,
      height: 30,
      render: () => { },
    },
    stories: [
      {
        storyLogo: {
          src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
          altText: 'Mclaren',
          width: 200,
          height: 40,
        },
        screens: [
          experienceZoneScreenTwoData,
          experienceZoneScreenThreeData,
        ],
        storyImage: {
          src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
          srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
          width: '1920',
          height: 'auto',
          imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
          altText: 'Test image',
          itemprop: 'contentUrl',
          lazy: true,
        },
        storyTitle: 'Experience Zone Teaser card singular variation.',
      },
      {
        storyLogo: {
          src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
          altText: 'Mclaren',
          width: 200,
          height: 40,
        },
        screens: [
          {
            layout: ExperienceZoneLayout.Video,
            disclaimer: '',
            components: [
              {
                tag: 'bs-video-card',
                data: {
                  videoId: 'OIZHtji-lvI',
                  mute: false,
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
          },
        ],
        storyImage: {
          src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
          srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
          width: '1920',
          height: 'auto',
          imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
          altText: 'Test image',
          itemprop: 'contentUrl',
          lazy: true,
        },
        storyTitle: 'Experience Zone Teaser card singular variation.',
      },
      {
        storyLogo: {
          src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
          altText: 'Mclaren',
          width: 200,
          height: 40,
        },
        screens: [experienceZoneScreenOneData],
        storyImage: {
          src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
          srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
          width: '1920',
          height: 'auto',
          imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
          altText: 'Test image',
          itemprop: 'contentUrl',
          lazy: true,
        },
        storyTitle: 'Experience Zone Teaser card singular variation.',
      },
      {
        storyLogo: {
          src: 'https://www.bridgestone.co.uk/content/dam/website/fleetcare/Fleetcare-logo-white.png',
          altText: 'Mclaren',
          width: 200,
          height: 40,
        },
        screens: [experienceZoneScreenThreeData],
        storyImage: {
          src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage',
          srcset: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_SCREEN 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/Homepage:DEFAULT_LARGE 1920w',
          width: '1920',
          height: 'auto',
          imageSizes: '(max-width: 375px) 200px, (max-width: 1280px) 1200px, (max-width: 1536px) 1440px, 1920px',
          altText: 'Test image',
          itemprop: 'contentUrl',
          lazy: true,
        },
        storyTitle: 'Experience Zone Teaser card singular variation.',
      },
    ],
  },
  teaserTitle: {
    tag: TitleTag.H2,
    text: 'Hello Bridgestone!',
    color: TitleColor.Undefined,
    variant: TitleVariant.None,
    size: TitleSize.Head3,
  },
};
//# sourceMappingURL=experience-zone.data.js.map
