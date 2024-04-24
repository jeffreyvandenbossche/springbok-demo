import { ButtonType, ButtonVariant } from './button.types';
import { IconName } from '../icon/icon.types';
export const buttonPrimary = {
  text: 'Find A Dealer',
  href: '',
  target: null,
  type: ButtonType.Button,
  action: '',
  variant: ButtonVariant.Primary,
  iconRight: IconName.ArrowForward,
  isFullWidth: false,
  isDisabled: false,
  ghost: false,
};
export const buttonPrimaryGhost = {
  text: 'Find A Dealer',
  href: '',
  target: null,
  type: ButtonType.Button,
  action: '',
  variant: ButtonVariant.Primary,
  iconRight: IconName.ArrowForward,
  isFullWidth: false,
  isDisabled: false,
  ghost: true,
};
export const buttonSecondary = {
  text: 'Find A Dealer',
  href: '',
  target: null,
  type: ButtonType.Button,
  action: '',
  variant: ButtonVariant.Secondary,
  iconLeft: IconName.TextToSpeech,
  iconRight: IconName.None,
  isFullWidth: false,
  isDisabled: false,
};
export const buttonSecondaryGhost = {
  text: 'Find A Dealer',
  href: '',
  target: null,
  type: ButtonType.Button,
  action: '',
  variant: ButtonVariant.Secondary,
  iconLeft: IconName.TextToSpeech,
  iconRight: IconName.None,
  isFullWidth: false,
  isDisabled: false,
  ghost: true,
};
//# sourceMappingURL=button.data.js.map
