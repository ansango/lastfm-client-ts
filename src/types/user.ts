import type {
  AlbumName,
  ArtistName,
  DateProp,
  Duration,
  Image,
  Mbid,
  Period,
  Playcount,
  TagName,
  Text,
  TrackName,
  Url,
  User,
  UserName,
} from "./base";

export type UserGetFriendsRequest = {
  user: string;
  limit?: number;
  page?: number;
};
export type UserGetFriendsResponse = {};

export type UserGetInfoRequest = {
  user: string;
};

export type UserGetInfoResponse = {
  user: User;
};

export type UserGetLovedTracksRequest = {
  user: string;
  limit?: number;
  page?: number;
};

export type LovedTracks = {
  track: Array<{
    artist: {
      name: ArtistName;
      mbid: Mbid;
      url: Url;
    };
    date: DateProp;
    name: TrackName;
    mbid: Mbid;
    url: Url;
    image: Array<Image>;
  }>;
  "@attr": {
    user: UserName;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  };
};

export type UserGetLovedTracksResponse = {
  lovedtracks: LovedTracks;
};

export type UserGetRecentTracksRequest = {
  user: string;
  limit?: number;
  page?: number;
  from?: number;
  to?: number;
};

export type RecentTracks = {
  track: Array<{
    artist: {
      name: ArtistName;
      mbid: Mbid;
    };
    date: DateProp;
    name: TrackName;
    mbid: Mbid;
    url: Url;
    image: Array<Image>;
  }>;
  "@attr": {
    user: UserName;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  };
};

export type UserGetRecentTracksResponse = {
  recenttracks: RecentTracks;
};

export type UserGetTopAlbumsRequest = {
  user: string;
  limit?: number;
  page?: number;
  period?: Period;
};

export type TopAlbums = {
  album: Array<{
    artist: {
      name: ArtistName;
      mbid: Mbid;
      url: Url;
    };
    image: Array<Image>;
    mbid: Mbid;
    url: Url;
    playcount: Playcount;
    name: AlbumName;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": {
    user: UserName;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  };
};

export type UserGetTopAlbumsResponse = {
  topalbums: TopAlbums;
};

export type UserGetTopArtistsRequest = {
  user: string;
  limit?: number;
  page?: number;
  period?: Period;
};

export type TopArtists = {
  artist: Array<{
    image: Array<Image>;
    mbid: Mbid;
    name: ArtistName;
    playcount: Playcount;
    url: Url;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": {
    user: UserName;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  };
};

export type UserGetTopArtistsResponse = {
  topartists: TopArtists;
};

export type UserGetTopTagsRequest = {
  user: string;
  limit?: number;
  page?: number;
};

export type TopTags = {
  tag: Array<{
    name: TagName;
    url: Url;
    count: string;
  }>;
  "@attr": {
    user: UserName;
  };
};

export type UserGetTopTagsResponse = {
  toptags: TopTags;
};

export type UserGetTopTracksRequest = {
  user: string;
  limit?: number;
  page?: number;
  period?: Period;
};

export type TopTracks = {
  track: Array<{
    mbid: Mbid;
    name: TrackName;
    image: Array<Image>;
    artist: {
      name: ArtistName;
      mbid: Mbid;
      url: Url;
    };
    url: Url;
    duration: Duration;
    playcount: Playcount;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": {
    user: UserName;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  };
};

export type UserGetTopTracksResponse = {
  toptracks: TopTracks;
};

export type UserGetWeeklyAlbumChartRequest = {
  user: string;
  from?: number;
  to?: number;
};

export type WeeklyAlbumChartAttr = {
  from: string;
  to: string;
  user: string;
};

export type WeeklyAlbumChart = {
  album: Array<{
    artist: {
      mbid: Mbid;
      "#text": ArtistName;
    };
    mbid: Mbid;
    url: Url;
    name: AlbumName;
    playcount: Playcount;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": {
    from: string;
    user: string;
    to: string;
  };
};

export type UserGetWeeklyAlbumChartResponse = {
  weeklyalbumchart: WeeklyAlbumChart;
};

export type UserGetWeeklyArtistChartRequest = {
  user: string;
  from?: number;
  to?: number;
};

export type WeeklyArtistChart = {
  artist: Array<{
    mbid: Mbid;
    url: Url;
    name: ArtistName;
    playcount: Playcount;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": { from: string; user: string; to: string };
};

export type UserGetWeeklyArtistChartResponse = {
  weeklyartistchart: WeeklyArtistChart;
};

export type UserGetWeeklyChartListRequest = {
  user: string;
};

export type WeeklyChartList = {
  chart: Array<{
    "#text": Text;
    from: string;
    to: string;
  }>;
};

export type UserGetWeeklyChartListResponse = {
  weeklychartlist: WeeklyChartList;
};

export type UserGetWeeklyTrackChartRequest = {
  user: string;
  from?: number;
  to?: number;
};

export type WeeklyTrackChart = {
  track: Array<{
    artist: {
      mbid: Mbid;
      "#text": ArtistName;
    };
    image: Array<Image>;
    mbid: Mbid;
    url: Url;
    name: TrackName;
    playcount: Playcount;
    "@attr": {
      rank: string;
    };
  }>;
  "@attr": { from: string; user: string; to: string };
};

export type UserGetWeeklyTrackChartResponse = {
  weeklytrackchart: WeeklyTrackChart;
};
