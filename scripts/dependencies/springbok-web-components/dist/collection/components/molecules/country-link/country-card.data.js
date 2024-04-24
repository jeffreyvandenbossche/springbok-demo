import { TitleSize, TitleTag } from '../../atoms/title/title.types';
export const countryCardData = {
  flag: {
    src: 'https://bridgestone-emia.com/assets/svg/at.svg',
    altText: 'Austrian flag',
    cover: false,
    lazy: false,
  },
  countryTitle: {
    tag: TitleTag.Span,
    text: 'Austria | Österreich',
    size: TitleSize.Head5,
  },
  brands: [
    { label: 'Bridgestone', href: 'https://bridgestone.at' },
    { label: 'Firestone', href: 'https://firestonereifen.at' },
  ],
};
//# sourceMappingURL=country-card.data.js.map
