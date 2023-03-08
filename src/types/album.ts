import type {
  AlbumName,
  ArtistName,
  Lang,
  Mbid,
  UserName,
  Album,
  TagName,
  Url,
  Count,
  Limit,
  Page,
  Text,
  TotalResults,
  StartIndex,
  ItemsPerPage,
  For,
  Image,
} from "./base";

export type AlbumGetInfoRequest = {
  artist: ArtistName;
  album: AlbumName;
  mbid?: Mbid;
  username?: UserName;
  lang?: Lang;
};

export type AlbumGetInfoResponse = {
  album: Album;
};

export type AlbumGetTagsRequest = {
  artist: ArtistName;
  album: AlbumName;
  mbid?: Mbid;
  user: UserName;
};
export type AlbumGetTagsResponse = {
  tags: {
    tag: Array<{
      name: TagName;
      url: Url;
    }>;
  };
  "@attr": {
    album: AlbumName;
    artist: ArtistName;
  };
};

export type AlbumGetTopTagsRequest = {
  artist: ArtistName;
  album: AlbumName;
  mbid?: Mbid;
};
export type AlbumGetTopTagsResponse = {
  tags: {
    tag: Array<{
      name: TagName;
      url: Url;
      count: Count;
    }>;
  };
  "@attr": {
    album: AlbumName;
    artist: ArtistName;
  };
};

export type AlbumSearchRequest = {
  album: AlbumName;
  limit?: Limit;
  page?: Page;
};
export type AlbumSearchResponse = {
  results: {
    "opensearch:Query": {
      "#text": Text;
    };
    "opensearch:totalResults": TotalResults;
    "opensearch:startIndex": StartIndex;
    "opensearch:itemsPerPage": ItemsPerPage;
    albummatches: {
      album: Array<{
        name: AlbumName;
        artist: ArtistName;
        url: Url;
        image: Array<Image>;
        mbid: Mbid;
      }>;
    };

    "@attr": {
      for: For;
    };
  };
};
