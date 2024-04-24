import { IconName } from '../../atoms/icon/icon.types';
export type SharingTypes = 'facebook' | 'twitter' | 'email' | 'linkedin';
export interface SharingButton {
  icon: IconName;
  text: string;
  id: SharingTypes;
}
