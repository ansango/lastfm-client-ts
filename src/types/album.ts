export type AlbumGetInfoRequest = {
  artist: string;
  album: string;
  mbid?: string;
  username?: string;
  lang?: string;
};

export type AlbumGetInfoResponse = {
  album: AlbumResponse;
};

export type AlbumGetTagsRequest = {};
export type AlbumGetTagsResponse = {};

export type AlbumGetTopTagsRequest = {};
export type AlbumGetTopTagsResponse = {};

export type AlbumSearchRequest = {};
export type AlbumSearchResponse = {};
