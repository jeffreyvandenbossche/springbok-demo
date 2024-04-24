import { BsImage } from '../../atoms/image/image';
import { BsButton } from '../../atoms/button/button';
export type TestBadge = {
  cardTitle: string;
  cardText: string;
  badgeTitle: string;
  badgeText: string;
  badgeCta: BsButton;
  badgeImages: BsImage[];
};
