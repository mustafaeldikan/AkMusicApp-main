export interface IPlayList {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  title: string;
  desc: string;
}

export interface ISongList {
  img: string;
  title: string;
  desc: string;
}

export interface ITabInfo {
  focused: boolean;
  color: string;
  size: number;
}
