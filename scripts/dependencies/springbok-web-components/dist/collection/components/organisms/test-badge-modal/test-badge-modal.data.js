import { IconName } from '../../atoms/icon/icon.types';
import { ButtonVariant } from '../../atoms/button/button.types';
export const testBadgeModalData = {
  index: 0,
  testBadgeCollection: [
    {
      cardTitle: 'Auto bild 2023',
      cardText: 'Lorem ipsum dolor sit amet consectetur. Nunc eu duis ultrices non. Sed molestie quis augue in faucibus quam urna feugiat. Malesuada consectetur lobortis ut sem sollicitudin molestie elementum metus.',
      badgeTitle: 'Auto bild allrad suv all season test 2023',
      badgeText: `<p><i>All Season Tyre Test 2023 - AUTO BILD allrad</i></p>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc eu duis ultrices non. Sed molestie quis augue in faucibus quam urna feugiat. Malesuada consectetur lobortis ut sem sollicitudin molestie elementum metus.</p>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc eu duis ultrices non. Sed molestie quis augue in faucibus quam urna feugiat. Malesuada consectetur lobortis ut sem sollicitudin molestie elementum metus.</p>
      <p>Rank 1 of 10</p>
      <p>Issue 36/2023</p><p>SUV All Season Test 2023</p><p>Test vehicle: Audi Q5</p><p>Tested size: 235/65 R17</p>`,
      badgeCta: {
        href: 'https://bridgestone.co.uk/',
        text: 'Link to award',
        variant: ButtonVariant.Text,
        iconRight: IconName.CaretForward,
      },
      badgeImages: [
        {
          src: 'https://www.bridgestone.co.uk/content/dam/website/bridgestone_jss/images/general/awards/2022/nor/w20/w20-adac-lm005-test-winner/BRIDGESTONE%20Blizzak%20LM005_09_20_4c_UK.jpg',
          altText: 'testBadge',
          width: 0,
          height: 0,
        },
        // {
        //   src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Turanza-6-Product-Background:PDPTEASER_LARGE',
        //   altText: 'testBadge',
        //   width: 0,
        //   height: 0,
        // },
        // {
        //   src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/Turanza-6-Packshot?wid=303&fmt=png-alpha',
        //   altText: 'testBadge',
        //   width: 0,
        //   height: 0,
        // },
      ],
    },
  ],
};
//# sourceMappingURL=test-badge-modal.data.js.map
