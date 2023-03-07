export type Name = string;
export type Mbid = string;
export type Url = string;
export type Playcount = string;
export type Duration = number;
export type Listeners = string;
export type Position = string;

export type Published = string;
export type Summary = string;
export type Content = string;

export type ArtistName = Name;
export type AlbumName = Name;
export type TagName = Name;
export type TrackName = Name;
export type UserName = Name;

export type Age = string;
export type Subscriber = string;
export type RealName = string;
export type Bootstrap = string;
export type ArtistCount = string;
export type AlbumCount = string;
export type TrackCount = string;
export type Country = string;
export type Playlists = string;
export type Gender = string;
export type Type = string;

export type Unixtime = number;

export type From = string;
export type To = string;

export type Rank = string;

export type Text = string;
export type Uts = string;

export type DateProp = {
  uts: Uts;
  "#text": Text;
};

export type TotalPages = string;
export type Total = string;
export type Page = string | number;
export type Count = string;
export type Limit = string | number;

export type Image = {
  "#text": Text;
  size: "small" | "medium" | "large" | "extralarge" | "mega";
};

export type Period =
  | "overall"
  | "7day"
  | "1month"
  | "3month"
  | "6month"
  | "12month";

/**
 * Artist
 * @see https://www.last.fm/api/show/artist.getInfo
 */

export type ArtistStats = {
  listeners: Listeners;
  playcount: Playcount;
};
export type ArtistSimilar = {
  artist: Array<{
    name: ArtistName;
    url: Url;
    image: Array<Image>;
  }>;
};
export type ArtistTags = {
  tag: Array<{
    name: TagName;
    url: Url;
  }>;
};
export type ArtistBio = {
  links: {
    link: {
      "#text": string;
      rel: string;
      href: string;
    };
  };
  published: Published;
  summary: Summary;
  content: Content;
};

export type Artist = {
  name: ArtistName;
  mbid: Mbid;
  url: Url;
  image: Array<Image>;
  ontour: string;
  stats: ArtistStats;
  similar: ArtistSimilar;
  tags: ArtistTags;
  bio: ArtistBio;
};

/**
 * Album
 * @see https://www.last.fm/api/show/album.getInfo
 */

type AlbumTag = {
  tag: Array<{
    name: TagName;
    url: Url;
  }>;
};

type AlbumTrackArtist = {
  name: ArtistName;
  mbid: Mbid;
  url: Url;
};

type AlbumTrack = {
  track: Array<{
    duration: Duration;
    name: Name;
    url: Url;
    artist: AlbumTrackArtist;
  }>;
};

type AlbumWiki = {
  published: Published;
  summary: Summary;
  content: Content;
};

export type Album = {
  artist: ArtistName;
  mbid: Mbid;
  tags: AlbumTag;
  playcount: Playcount;
  image: Array<Image>;
  tracks: AlbumTrack;
  url: Url;
  name: AlbumName;
  listeners: Listeners;
  wiki: AlbumWiki;
};

/**
 * User
 * @see https://www.last.fm/api/show/user.getInfo
 */

export type User = {
  name: UserName;
  age: Age;
  subscriber: Subscriber;
  realname: RealName;
  bootstrap: Bootstrap;
  playcount: Playcount;
  artist_count: ArtistCount;
  playlists: Playlists;
  track_count: TrackCount;
  album_count: AlbumCount;
  image: Array<Image>;
  registered: {
    unixtime: Unixtime;
    "#text": number;
  };
  country: Country;
  gender: Gender;
  url: Url;
  type: Type;
};

/**
 * Tag
 * @see https://www.last.fm/api/show/tag.getInfo
 */

export type TagWiki = {
  summary: Summary;
  content: Content;
};

export type Tag = {
  name: TagName;
  url: Url;
  total: number;
  reach: number;
  wiki: TagWiki;
};

/**
 * Track
 * @see https://www.last.fm/api/show/track.getInfo
 */

export type TrackArtist = {
  name: ArtistName;
  mbid: Mbid;
  url: Url;
};

export type TrackAlbum = {
  artist: ArtistName;
  title: AlbumName;
  mbid: Mbid;
  url: Url;
  image: Array<Image>;
  "@attr": {
    position: Position;
  };
};

export type TrackTopTag = {
  tag: Array<{
    name: TagName;
    url: Url;
  }>;
};

export type TrackWiki = {
  published: Published;
  summary: Summary;
  content: Content;
};

export type Track = {
  name: TrackName;
  mbid: Mbid;
  url: Url;
  duration: Duration;
  listeners: Listeners;
  playcount: Playcount;
  artist: TrackArtist;
  album: TrackAlbum;
  topTags: TrackTopTag;
  wiki: TrackWiki;
};
