import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { videoCardData } from '../../molecules/video-card/video-card.data';
import { carouselCardData } from '../../molecules/carousel-card/carousel-card.data';
import { experienceZoneTeaserData } from '../../molecules/experience-zone/experience-zone.data';
import { testBadgeData } from '../../organisms/test-badge/test-badge.data';
import { headerNavigationData } from '../../organisms/overlay-menu/overlay-menu.data';
import { headerBannerVideoInlineData } from '../../organisms/header-banner/header-banner.data';
const meta = {
  title: 'components/layouts/bs-default-layout',
  component: 'bs-default-layout',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
export const Default = {
  render: () => html `
    <bs-default-layout @bsClickAction=${action('bsClickAction')}>
      <bs-header-navigation
        header-navigation=${JSON.stringify(headerNavigationData.headerNavigation)}
      ></bs-header-navigation>

      <bs-container contained="true" mobile-full-width="true">
        <bs-header-banner
          logo=${JSON.stringify(headerBannerVideoInlineData.logo)}
          image=${JSON.stringify(headerBannerVideoInlineData.image)}
          header-title=${JSON.stringify(headerBannerVideoInlineData.headerTitle)}
          button=${JSON.stringify(headerBannerVideoInlineData.button)}
          variant=${headerBannerVideoInlineData.variant}
          video=${JSON.stringify(headerBannerVideoInlineData.video)}
        ></bs-header-banner>
      </bs-container>

      <bs-container contained="true">
        <bs-test-badge-slider
          test-badge-collection="${JSON.stringify(testBadgeData.testBadgeCollection)}"
        ></bs-test-badge-slider>

        <bs-video-card
          video-id="${videoCardData.videoId}"
          mute="${videoCardData.mute}"
          image="${JSON.stringify(videoCardData.image)}"
        ></bs-video-card>
        <bs-carousel-card
          slow="${carouselCardData.slow}"
          carousel-title="${carouselCardData.carouselTitle}"
          logo="${JSON.stringify(carouselCardData.logo)}"
          image-collection="${JSON.stringify(carouselCardData.imageCollection)}"
          cta="${carouselCardData.cta}"
        ></bs-carousel-card>
        <bs-experience-zone
          experience-zone-data="${JSON.stringify(experienceZoneTeaserData.experienceZoneData)}"
          teaser-title="${JSON.stringify(experienceZoneTeaserData.teaserTitle)}"
        />
      </bs-container>
    </bs-default-layout>
  `,
};
//# sourceMappingURL=default-layout.stories.js.map
