export interface IPlayListItem {
  id: number;
  title: string;
  artist: string;
}

export interface IAudioMetaData {
  duration: number;
  currentTime: number;
  percent: number;
  setAudioTime: (time: number) => void;
  audio: HTMLAudioElement;
}

export interface ISeekBarProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}
