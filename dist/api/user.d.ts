import type { UserGetFriendsRequest, UserGetFriendsResponse, UserGetInfoRequest, UserGetInfoResponse, UserGetLovedTracksRequest, UserGetLovedTracksResponse, UserGetRecentTracksRequest, UserGetRecentTracksResponse, UserGetTopAlbumsRequest, UserGetTopAlbumsResponse, UserGetTopArtistsRequest, UserGetTopArtistsResponse, UserGetTopTagsRequest, UserGetTopTagsResponse, UserGetTopTracksRequest, UserGetTopTracksResponse, UserGetWeeklyAlbumChartRequest, UserGetWeeklyAlbumChartResponse, UserGetWeeklyArtistChartRequest, UserGetWeeklyArtistChartResponse, UserGetWeeklyChartListRequest, UserGetWeeklyChartListResponse, UserGetWeeklyTrackChartRequest, UserGetWeeklyTrackChartResponse } from "../types/user";
export type UserApiMethods = {
    getFriends: (params: UserGetFriendsRequest) => Promise<UserGetFriendsResponse>;
    getInfo: (params: UserGetInfoRequest) => Promise<UserGetInfoResponse>;
    getLovedTracks: (params: UserGetLovedTracksRequest) => Promise<UserGetLovedTracksResponse>;
    getRecentTracks: (params: UserGetRecentTracksRequest) => Promise<UserGetRecentTracksResponse>;
    getTopAlbums: (params: UserGetTopAlbumsRequest) => Promise<UserGetTopAlbumsResponse>;
    getTopArtists: (params: UserGetTopArtistsRequest) => Promise<UserGetTopArtistsResponse>;
    getTopTags: (params: UserGetTopTagsRequest) => Promise<UserGetTopTagsResponse>;
    getTopTracks: (params: UserGetTopTracksRequest) => Promise<UserGetTopTracksResponse>;
    getWeeklyAlbumChart: (params: UserGetWeeklyAlbumChartRequest) => Promise<UserGetWeeklyAlbumChartResponse>;
    getWeeklyArtistChart: (params: UserGetWeeklyArtistChartRequest) => Promise<UserGetWeeklyArtistChartResponse>;
    getWeeklyChartList: (params: UserGetWeeklyChartListRequest) => Promise<UserGetWeeklyChartListResponse>;
    getWeeklyTrackChart: (params: UserGetWeeklyTrackChartRequest) => Promise<UserGetWeeklyTrackChartResponse>;
};
export declare const userApiMethods: UserApiMethods;
