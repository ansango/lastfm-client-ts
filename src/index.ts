import { config } from "./config";
import { fetcher } from "./fetcher";
import { method } from "./method";

const buildUrl = (
  method: string,
  params: { [key: string]: string | number }
) => {
  const url = new URL(config.base_url);
  url.searchParams.append("method", method);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  const api_key = config.api_key;
  const format = config.format.json;

  return `${url.toString()}&api_key=${api_key}&format=${format}`;
};

export const lastFmClient = () => {
  const userApiMethods: UserApiMethods = {
    getFriends: (
      params: UserGetFriendsRequest,
      init?: RequestInit
    ): Promise<UserGetFriendsResponse> =>
      fetcher<UserGetFriendsResponse>(
        buildUrl(method.user.getFriends, { ...params }),
        init
      ),
    getInfo: (
      params: UserGetInfoRequest,
      init?: RequestInit
    ): Promise<UserGetInfoResponse> =>
      fetcher<UserGetInfoResponse>(
        buildUrl(method.user.getInfo, { ...params }),
        init
      ),
    getLovedTracks: (
      params: UserGetLovedTracksRequest,
      init?: RequestInit
    ): Promise<UserGetLovedTracksResponse> =>
      fetcher<UserGetLovedTracksResponse>(
        buildUrl(method.user.getLovedTracks, { ...params }),
        init
      ),
    getPersonalTags: (
      params: UserGetPersonalTagsRequest,
      init?: RequestInit
    ): Promise<UserGetPersonalTagsResponse> =>
      fetcher<UserGetPersonalTagsResponse>(
        buildUrl(method.user.getPersonalTags, { ...params }),
        init
      ),
    getRecentTracks: (
      params: UserGetRecentTracksRequest,
      init?: RequestInit
    ): Promise<UserGetRecentTracksResponse> =>
      fetcher<UserGetRecentTracksResponse>(
        buildUrl(method.user.getRecentTracks, { ...params }),
        init
      ),
    getTopAlbums: (
      params: UserGetTopAlbumsRequest,
      init?: RequestInit
    ): Promise<UserGetTopAlbumsResponse> =>
      fetcher<UserGetTopAlbumsResponse>(
        buildUrl(method.user.getTopAlbums, { ...params }),
        init
      ),
    getTopArtists: (
      params: UserGetTopArtistsRequest,
      init?: RequestInit
    ): Promise<UserGetTopArtistsResponse> =>
      fetcher<UserGetTopArtistsResponse>(
        buildUrl(method.user.getTopArtists, { ...params }),
        init
      ),
    getTopTags: (
      params: UserGetTopTagsRequest,
      init?: RequestInit
    ): Promise<UserGetTopTagsResponse> =>
      fetcher<UserGetTopTagsResponse>(
        buildUrl(method.user.getTopTags, { ...params }),
        init
      ),
    getTopTracks: (
      params: UserGetTopTracksRequest,
      init?: RequestInit
    ): Promise<UserGetTopTracksResponse> =>
      fetcher<UserGetTopTracksResponse>(
        buildUrl(method.user.getTopTracks, { ...params }),
        init
      ),
    getWeeklyAlbumChart: (
      params: UserGetWeeklyAlbumChartRequest,
      init?: RequestInit
    ): Promise<UserGetWeeklyAlbumChartResponse> =>
      fetcher<UserGetWeeklyAlbumChartResponse>(
        buildUrl(method.user.getWeeklyAlbumChart, { ...params }),
        init
      ),
    getWeeklyArtistChart: (
      params: UserGetWeeklyArtistChartRequest,
      init?: RequestInit
    ): Promise<UserGetWeeklyArtistChartResponse> =>
      fetcher<UserGetWeeklyArtistChartResponse>(
        buildUrl(method.user.getWeeklyArtistChart, { ...params }),
        init
      ),
    getWeeklyChartList: (
      params: UserGetWeeklyChartListRequest,
      init?: RequestInit
    ): Promise<UserGetWeeklyChartListResponse> =>
      fetcher<UserGetWeeklyChartListResponse>(
        buildUrl(method.user.getWeeklyChartList, { ...params }),
        init
      ),
    getWeeklyTrackChart: (
      params: UserGetWeeklyTrackChartRequest,
      init?: RequestInit
    ): Promise<UserGetWeeklyTrackChartResponse> =>
      fetcher<UserGetWeeklyTrackChartResponse>(
        buildUrl(method.user.getWeeklyTrackChart, { ...params }),
        init
      ),
  };
  return { config, userApiMethods };
};
