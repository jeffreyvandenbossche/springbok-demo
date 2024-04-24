import { BsImage } from '../../atoms/image/image';
import { BsButton } from '../../atoms/button/button';
import { ClickActionTarget } from '../../atoms/click-action/click-action.types';
export type HeaderNavigation = {
  mainLogo: BsImage;
  mobileMainLogo: BsImage;
  stickyLogo: BsImage;
  stickyButton?: BsButton;
  navigation: {
    primary: NavigationItem[];
    secondary: NavigationItem[];
    sliderItems: NavigationItem[];
  };
};
export type NavigationItem = {
  title: string;
  description?: string;
  href?: string;
  target?: ClickActionTarget;
  thumbnail?: BsImage;
  children?: NavigationItem[];
};
