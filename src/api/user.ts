import { method } from "../method";
import type {
  UserApiMethods,
  UserGetFriendsRequest,
  UserGetFriendsResponse,
  UserGetInfoRequest,
  UserGetInfoResponse,
  UserGetLovedTracksRequest,
  UserGetLovedTracksResponse,
  UserGetPersonalTagsRequest,
  UserGetPersonalTagsResponse,
  UserGetRecentTracksRequest,
  UserGetRecentTracksResponse,
  UserGetTopAlbumsRequest,
  UserGetTopAlbumsResponse,
  UserGetTopArtistsRequest,
  UserGetTopArtistsResponse,
  UserGetTopTagsRequest,
  UserGetTopTagsResponse,
  UserGetTopTracksRequest,
  UserGetTopTracksResponse,
  UserGetWeeklyAlbumChartRequest,
  UserGetWeeklyAlbumChartResponse,
  UserGetWeeklyArtistChartRequest,
  UserGetWeeklyArtistChartResponse,
  UserGetWeeklyChartListRequest,
  UserGetWeeklyChartListResponse,
  UserGetWeeklyTrackChartRequest,
  UserGetWeeklyTrackChartResponse,
} from "../types";

import { buildUrl, fetcher } from "../utils";

export const userApiMethods: UserApiMethods = {
  getFriends: (params: UserGetFriendsRequest, init?: RequestInit) =>
    fetcher<UserGetFriendsResponse>(
      buildUrl(method.user.getFriends, { ...params }),
      init
    ),
  getInfo: (params: UserGetInfoRequest, init?: RequestInit) =>
    fetcher<UserGetInfoResponse>(
      buildUrl(method.user.getInfo, { ...params }),
      init
    ),
  getLovedTracks: (params: UserGetLovedTracksRequest, init?: RequestInit) =>
    fetcher<UserGetLovedTracksResponse>(
      buildUrl(method.user.getLovedTracks, { ...params }),
      init
    ),
  getPersonalTags: (params: UserGetPersonalTagsRequest, init?: RequestInit) =>
    fetcher<UserGetPersonalTagsResponse>(
      buildUrl(method.user.getPersonalTags, { ...params }),
      init
    ),
  getRecentTracks: (params: UserGetRecentTracksRequest, init?: RequestInit) =>
    fetcher<UserGetRecentTracksResponse>(
      buildUrl(method.user.getRecentTracks, { ...params }),
      init
    ),
  getTopAlbums: (params: UserGetTopAlbumsRequest, init?: RequestInit) =>
    fetcher<UserGetTopAlbumsResponse>(
      buildUrl(method.user.getTopAlbums, { ...params }),
      init
    ),
  getTopArtists: (params: UserGetTopArtistsRequest, init?: RequestInit) =>
    fetcher<UserGetTopArtistsResponse>(
      buildUrl(method.user.getTopArtists, { ...params }),
      init
    ),
  getTopTags: (params: UserGetTopTagsRequest, init?: RequestInit) =>
    fetcher<UserGetTopTagsResponse>(
      buildUrl(method.user.getTopTags, { ...params }),
      init
    ),
  getTopTracks: (params: UserGetTopTracksRequest, init?: RequestInit) =>
    fetcher<UserGetTopTracksResponse>(
      buildUrl(method.user.getTopTracks, { ...params }),
      init
    ),
  getWeeklyAlbumChart: (
    params: UserGetWeeklyAlbumChartRequest,
    init?: RequestInit
  ) =>
    fetcher<UserGetWeeklyAlbumChartResponse>(
      buildUrl(method.user.getWeeklyAlbumChart, { ...params }),
      init
    ),
  getWeeklyArtistChart: (
    params: UserGetWeeklyArtistChartRequest,
    init?: RequestInit
  ) =>
    fetcher<UserGetWeeklyArtistChartResponse>(
      buildUrl(method.user.getWeeklyArtistChart, { ...params }),
      init
    ),
  getWeeklyChartList: (
    params: UserGetWeeklyChartListRequest,
    init?: RequestInit
  ) =>
    fetcher<UserGetWeeklyChartListResponse>(
      buildUrl(method.user.getWeeklyChartList, { ...params }),
      init
    ),
  getWeeklyTrackChart: (
    params: UserGetWeeklyTrackChartRequest,
    init?: RequestInit
  ) =>
    fetcher<UserGetWeeklyTrackChartResponse>(
      buildUrl(method.user.getWeeklyTrackChart, { ...params }),
      init
    ),
};
