import type { Album, Artist, Attr2, Attr3, Chart, Period, Tag, Track, User, WeeklyAlbum } from "./base";
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
    track: Track[];
    "@attr": Attr;
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
    track: Track[];
    "@attr": Attr2;
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
    album: Album[];
    "@attr": Attr2;
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
    artist: Artist[];
    "@attr": Attr2;
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
    tag: Tag[];
    "@attr": Attr3;
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
    track: Track[];
    "@attr": Attr2;
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
    album: WeeklyAlbum[];
    "@attr": WeeklyAlbumChartAttr;
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
    artist: Artist[];
    "@attr": Attr2;
};
export type UserGetWeeklyArtistChartResponse = {
    weeklyartistchart: WeeklyArtistChart;
};
export type UserGetWeeklyChartListRequest = {
    user: string;
};
export type WeeklyChartList = {
    chart: Chart[];
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
    track: Track[];
    "@attr": Attr2;
};
export type UserGetWeeklyTrackChartResponse = {
    weeklytrackchart: WeeklyTrackChart;
};
