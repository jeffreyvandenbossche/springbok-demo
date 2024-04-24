export declare enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}
export type YoutubeControlUpdateEvent = {
  id: string;
  mute?: boolean;
  playerState?: PlayerState;
  currentTime?: number;
};
