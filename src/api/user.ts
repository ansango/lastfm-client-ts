import { method } from "../method";

import type {
  UserGetFriendsRequest,
  UserGetFriendsResponse,
  UserGetInfoRequest,
  UserGetInfoResponse,
  UserGetLovedTracksRequest,
  UserGetLovedTracksResponse,
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
} from "../types/user";

import { buildUrl, fetcher } from "../utils";

export type UserApiMethods = {
  /**
   * Fetches a list of the user's friends
   * @param {UserGetFriendsRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetFriendsResponse>}
   * https://www.last.fm/api/show/user.getFriends
   */
  getFriends: (
    params: UserGetFriendsRequest,
    init?: RequestInit
  ) => Promise<UserGetFriendsResponse>;
  /**
   * Fetch user info
   * @param {UserGetInfoRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetInfoResponse>}
   * https://www.last.fm/api/show/user.getInfo
   */

  getInfo: (
    params: UserGetInfoRequest,
    init?: RequestInit
  ) => Promise<UserGetInfoResponse>;
  /**
   * Fetches a list of the user's loved tracks
   * @param {UserGetLovedTracksRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetLovedTracksResponse>}
   * https://www.last.fm/api/show/user.getLovedTracks
   */
  getLovedTracks: (
    params: UserGetLovedTracksRequest,
    init?: RequestInit
  ) => Promise<UserGetLovedTracksResponse>;
  /**
   * Fetches a list of the user's recent tracks
   * @param {UserGetRecentTracksRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetRecentTracksResponse>}
   * https://www.last.fm/api/show/user.getRecentTracks
   */
  getRecentTracks: (
    params: UserGetRecentTracksRequest
  ) => Promise<UserGetRecentTracksResponse>;
  /**
   * Fetches a list of the user's top albums
   * @param {UserGetTopAlbumsRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetTopAlbumsResponse>}
   * https://www.last.fm/api/show/user.getTopAlbums
   */
  getTopAlbums: (
    params: UserGetTopAlbumsRequest
  ) => Promise<UserGetTopAlbumsResponse>;
  /**
   * Fetches a list of the user's top artists
   * @param {UserGetTopArtistsRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetTopArtistsResponse>}
   * https://www.last.fm/api/show/user.getTopArtists
   */
  getTopArtists: (
    params: UserGetTopArtistsRequest
  ) => Promise<UserGetTopArtistsResponse>;
  /**
   * Fetches a list of the user's top tags
   * @param {UserGetTopTagsRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetTopTagsResponse>}
   * https://www.last.fm/api/show/user.getTopTags
   */
  getTopTags: (
    params: UserGetTopTagsRequest
  ) => Promise<UserGetTopTagsResponse>;
  /**
   * Fetches a list of the user's top tracks
   * @param {UserGetTopTracksRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetTopTracksResponse>}
   * https://www.last.fm/api/show/user.getTopTracks
   */
  getTopTracks: (
    params: UserGetTopTracksRequest
  ) => Promise<UserGetTopTracksResponse>;
  /**
   * Fetches a list of the user's chart albums for a given week
   * @param {UserGetWeeklyAlbumChartRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetWeeklyAlbumChartResponse>}
   * https://www.last.fm/api/show/user.getWeeklyAlbumChart
   */
  getWeeklyAlbumChart: (
    params: UserGetWeeklyAlbumChartRequest
  ) => Promise<UserGetWeeklyAlbumChartResponse>;
  /**
   * Fetches a list of the user's chart artists for a given week
   * @param {UserGetWeeklyArtistChartRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetWeeklyArtistChartResponse>}
   * https://www.last.fm/api/show/user.getWeeklyArtistChart
   */
  getWeeklyArtistChart: (
    params: UserGetWeeklyArtistChartRequest
  ) => Promise<UserGetWeeklyArtistChartResponse>;
  /**
   * Fetches a list of the user's chart lists for a given week
   * @param {UserGetWeeklyChartListRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetWeeklyChartListResponse>}
   * https://www.last.fm/api/show/user.getWeeklyChartList
   */
  getWeeklyChartList: (
    params: UserGetWeeklyChartListRequest
  ) => Promise<UserGetWeeklyChartListResponse>;
  /**
   * Fetches a list of the user's chart tracks for a given week
   * @param {UserGetWeeklyTrackChartRequest} params
   * @param {RequestInit} init
   * @returns {Promise<UserGetWeeklyTrackChartResponse>}
   */
  getWeeklyTrackChart: (
    params: UserGetWeeklyTrackChartRequest
  ) => Promise<UserGetWeeklyTrackChartResponse>;
};

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
