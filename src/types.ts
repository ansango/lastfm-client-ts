export type Period =
  | "overall"
  | "7day"
  | "1month"
  | "3month"
  | "6month"
  | "12month";

// export type AlbumAddTagsRequest = {};
// export type AlbumAddTagsResponse = {};

export type AlbumGetInfoRequest = {};
export type AlbumGetInfoResponse = {};

export type AlbumGetTagsRequest = {};
export type AlbumGetTagsResponse = {};

// export type AlbumRemoveTagRequest = {};
// export type AlbumRemoveTagResponse = {};

export type AlbumSearchRequest = {};
export type AlbumSearchResponse = {};

// export type ArtistAddTagsRequest = {};
// export type ArtistAddTagsResponse = {};

export type ArtistGetCorrectionRequest = {};
export type ArtistGetCorrectionResponse = {};

export type ArtistGetInfoRequest = {};
export type ArtistGetInfoResponse = {};

export type ArtistGetTagsRequest = {};
export type ArtistGetTagsResponse = {};

export type ArtistGetTopAlbumsRequest = {};
export type ArtistGetTopAlbumsResponse = {};

export type ArtistGetTopTagsRequest = {};
export type ArtistGetTopTagsResponse = {};

export type ArtistGetTopTracksRequest = {};
export type ArtistGetTopTracksResponse = {};

// export type ArtistRemoveTagRequest = {};
// export type ArtistRemoveTagResponse = {};

export type ArtistSearchRequest = {};
export type ArtistSearchResponse = {};

// export type AuthGetMobileSessionRequest = {};
// export type AuthGetMobileSessionResponse = {};

// export type AuthGetSessionRequest = {};
// export type AuthGetSessionResponse = {};

// export type AuthGetTokenRequest = {};
// export type AuthGetTokenResponse = {};

export type ChartGetTopArtistsRequest = {};
export type ChartGetTopArtistsResponse = {};

export type ChartGetTopTagsRequest = {};
export type ChartGetTopTagsResponse = {};

export type ChartGetTopTracksRequest = {};
export type ChartGetTopTracksResponse = {};

export type GeoGetTopArtistsRequest = {};
export type GeoGetTopArtistsResponse = {};

export type GeoGetTopTracksRequest = {};
export type GeoGetTopTracksResponse = {};

export type LibraryGetArtistsRequest = {};
export type LibraryGetArtistsResponse = {};

export type TagGetInfoRequest = {};
export type TagGetInfoResponse = {};

export type TagGetSimilarRequest = {};
export type TagGetSimilarResponse = {};

export type TagGetTopAlbumsRequest = {};
export type TagGetTopAlbumsResponse = {};

export type TagGetTopArtistsRequest = {};
export type TagGetTopArtistsResponse = {};

export type TagGetTopTagsRequest = {};
export type TagGetTopTagsResponse = {};

export type TagGetTopTracksRequest = {};
export type TagGetTopTracksResponse = {};

export type TagGetWeeklyChartListRequest = {};
export type TagGetWeeklyChartListResponse = {};

// export type TrackAddTagsRequest = {};
// export type TrackAddTagsResponse = {};

export type TrackGetCorrectionRequest = {};
export type TrackGetCorrectionResponse = {};

export type TrackGetInfoRequest = {};
export type TrackGetInfoResponse = {};

export type TrackGetSimilarRequest = {};
export type TrackGetSimilarResponse = {};

export type TrackGetTagsRequest = {};
export type TrackGetTagsResponse = {};

export type TrackGetTopTagsRequest = {};
export type TrackGetTopTagsResponse = {};

// export type TrackLoveRequest = {};
// export type TrackLoveResponse = {};

// export type TrackRemoveTagRequest = {};
// export type TrackRemoveTagResponse = {};

// export type TrackScrobbleRequest = {};
// export type TrackScrobbleResponse = {};

export type TrackSearchRequest = {};
export type TrackSearchResponse = {};

// export type TrackUnloveRequest = {};
// export type TrackUnloveResponse = {};

// export type TrackUpdateNowPlayingRequest = {};
// export type TrackUpdateNowPlayingResponse = {};

export type UserGetFriendsRequest = {
  user: string;
  limit?: number;
  page?: number;
};
export type UserGetFriendsResponse = {};

export type UserGetInfoRequest = {
  userName: string;
};

export type UserGetInfoResponse = {
  id: string;
  name: string;
  realname: string;
  url: string;
  image: string;
  country: string;
  age: string;
  gender: string;
  subscriber: string;
  playcount: string;
  playlists: string;
  bootstrap: string;
  registered: {
    unixtime: string;
    "#text": string;
  };
};

export type UserGetLovedTracksRequest = {};
export type UserGetLovedTracksResponse = {};

export type UserGetPersonalTagsRequest = {};
export type UserGetPersonalTagsResponse = {};

export type UserGetRecentTracksRequest = {};
export type UserGetRecentTracksResponse = {};

export type UserGetTopAlbumsRequest = {};
export type UserGetTopAlbumsResponse = {};

export type UserGetTopArtistsRequest = {};
export type UserGetTopArtistsResponse = {};

export type UserGetTopTagsRequest = {};
export type UserGetTopTagsResponse = {};

export type UserGetTopTracksRequest = {};
export type UserGetTopTracksResponse = {};

export type UserGetWeeklyAlbumChartRequest = {};
export type UserGetWeeklyAlbumChartResponse = {};

export type UserGetWeeklyArtistChartRequest = {};
export type UserGetWeeklyArtistChartResponse = {};

export type UserGetWeeklyChartListRequest = {};
export type UserGetWeeklyChartListResponse = {};

export type UserGetWeeklyTrackChartRequest = {};
export type UserGetWeeklyTrackChartResponse = {};

export type UserApiMethods = {
  getFriends: (
    params: UserGetFriendsRequest
  ) => Promise<UserGetFriendsResponse>;
  getInfo: (params: UserGetInfoRequest) => Promise<UserGetInfoResponse>;
  getLovedTracks: (
    params: UserGetLovedTracksRequest
  ) => Promise<UserGetLovedTracksResponse>;
  getPersonalTags: (
    params: UserGetPersonalTagsRequest
  ) => Promise<UserGetPersonalTagsResponse>;
  getRecentTracks: (
    params: UserGetRecentTracksRequest
  ) => Promise<UserGetRecentTracksResponse>;
  getTopAlbums: (
    params: UserGetTopAlbumsRequest
  ) => Promise<UserGetTopAlbumsResponse>;
  getTopArtists: (
    params: UserGetTopArtistsRequest
  ) => Promise<UserGetTopArtistsResponse>;
  getTopTags: (
    params: UserGetTopTagsRequest
  ) => Promise<UserGetTopTagsResponse>;
  getTopTracks: (
    params: UserGetTopTracksRequest
  ) => Promise<UserGetTopTracksResponse>;
  getWeeklyAlbumChart: (
    params: UserGetWeeklyAlbumChartRequest
  ) => Promise<UserGetWeeklyAlbumChartResponse>;
  getWeeklyArtistChart: (
    params: UserGetWeeklyArtistChartRequest
  ) => Promise<UserGetWeeklyArtistChartResponse>;
  getWeeklyChartList: (
    params: UserGetWeeklyChartListRequest
  ) => Promise<UserGetWeeklyChartListResponse>;
  getWeeklyTrackChart: (
    params: UserGetWeeklyTrackChartRequest
  ) => Promise<UserGetWeeklyTrackChartResponse>;
};
