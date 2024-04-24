import { ButtonVariant } from '../../atoms/button/button.types';
import { IconName } from '../../atoms/icon/icon.types';
import { DEFAULT_IMAGE_3_4 } from '../../atoms/image/image.data';
export const testBadgeDetailData = {
  badgeTitle: 'Test winner 2023',
  badgeText: `<p><i>All Season Tyre Test 2023 - AUTO BILD allrad</i></p>
  <p>Lorem ipsum dolor sit amet consectetur. Nunc eu duis ultrices non. Sed molestie quis augue in faucibus quam urna feugiat. Malesuada consectetur lobortis ut sem sollicitudin molestie elementum metus.</p>
  <p>Rank 1 of 10</p>
  <p>Issue 36/2023</p><p>SUV All Season Test 2023</p><p>Test vehicle: Audi Q5</p><p>Tested size: 235/65 R17</p>`,
  badgeCta: {
    href: 'https://bridgestone.co.uk/',
    text: 'Link to award',
    variant: ButtonVariant.Text,
    iconRight: IconName.CaretForward,
  },
  badgeImages: [DEFAULT_IMAGE_3_4],
};
//# sourceMappingURL=test-badge-detail.data.js.map
