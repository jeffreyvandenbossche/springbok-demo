import { BsTitle } from '../../atoms/title/title';
import { BsImage } from '../../atoms/image/image';
import { BsQuote } from '../../atoms/quote/quote';
import { BsVideoCard } from '../video-card/video-card';
export type ExperienceZone = {
  logo: BsImage;
  stories: ExperienceZoneStory[];
};
export type ExperienceZoneStory = {
  storyLogo: BsImage;
  screens: ExperienceZoneScreen[];
  storyImage: BsImage;
  storyTitle: string;
};
export type ExperienceZoneScreen = {
  layout: ExperienceZoneLayout;
  disclaimer?: string;
  components: ExperienceZoneComponent[];
};
export declare enum ExperienceZoneLayout {
  Video = "video",
  One = "one",
  Two = "two",
  Three = "three"
}
export type ExperienceZoneComponent = {
  tag: 'bs-image';
  data: BsImage;
} | {
  tag: 'bs-title';
  data: BsTitle;
} | {
  tag: 'bs-quote';
  data: BsQuote;
} | {
  tag: 'bs-video-card';
  data: BsVideoCard;
};
