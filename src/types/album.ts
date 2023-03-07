export type AlbumGetInfoRequest = {
  artist: string;
  album: string;
  mbid?: string;
  username?: string;
  lang?: string;
};

export type AlbumResponse = {
  name: string;
  artist: string;
  mbid: string;
  id: string;
  url: string;
  image: Image[];
  listeners: string;
  playcount: string;
  tracks: {
    track: Track[];
  };
  tags: Tag[];
  wiki: Wiki;
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
