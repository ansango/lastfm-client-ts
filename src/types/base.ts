export type Period =
  | "overall"
  | "7day"
  | "1month"
  | "3month"
  | "6month"
  | "12month";

export type Image = { size: string; "#text": string };

export type Registered = {
  unixtime: string;
  "#text": number;
};

export type Date = {
  uts: string;
  "#text": string;
};

export type User = {
  name: string;
  age: string;
  subscriber: string;
  realname: string;
  bootstrap: string;
  playcount: string;
  artist_count: string;
  playlists: string;
  track_count: string;
  album_count: string;
  image: Image[];
  registered: Registered;
  country: string;
  gender: string;
  url: string;
  type: string;
};

export type Attribs = {
  page: number;
  perPage: number;
  user: string;
  total: number;
  totalPages: number;
};

export type ArtistImage = {
  name: string;
  photo: string;
  attribution: string;
  playcount: number;
};

export type Artist = {
  "@attr": {
    rank: number;
  };
  cover: ArtistImage;
  image?: string;
  mbid: string;
  name: string;
  playcount: number;
  streamable: number;
  url: string;
  "#text": string;
};

export type Album = {
  name: string;
  artist: Artist;
  mbid: string;
  playcount: string;
  "#text": string;
};

export type Attr = {
  nowplaying: string;
};

export type Attr2 = {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
};

export type Attr3 = {
  user: string;
};

export type Track = {
  artist: Artist;
  streamable: string;
  image: Image[];
  mbid: string;
  album: Album;
  name: string;
  "@attr": Attr;
  url: string;
  date: Date;
  playcount: string;
};

export type Tag = {
  name: string;
  url: string;
  count: string;
};

export type WeeklyAlbum = {
  artist: {
    mbid: string;
    "#text": string;
  };
  mbid: string;
  url: string;
  name: string;
  "@attr": { rank: string };
  playcount: string;
  image?: string;
};

export type Chart = {
  "#text": string;
  from: string;
  to: string;
};
