import type { AlbumName, ArtistName, Count, DateProp, Duration, From, Image, Limit, Mbid, Page, Period, Playcount, Rank, TagName, Text, To, Total, TotalPages, TrackName, Url, User, UserName } from "./base";
export type UserGetFriendsRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
};
export type UserGetFriendsResponse = {};
export type UserGetInfoRequest = {
    user: UserName;
};
export type UserGetInfoResponse = {
    user: User;
};
export type UserGetLovedTracksRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
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
        totalPages: TotalPages;
        pages: Page;
        perPages: Page;
        total: Total;
    };
};
export type UserGetLovedTracksResponse = {
    lovedtracks: LovedTracks;
};
export type UserGetRecentTracksRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
    from?: From;
    to?: To;
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
        totalPages: TotalPages;
        pages: Page;
        perPages: Page;
        total: Total;
    };
};
export type UserGetRecentTracksResponse = {
    recenttracks: RecentTracks;
};
export type UserGetTopAlbumsRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
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
            rank: Rank;
        };
    }>;
    "@attr": {
        user: UserName;
        totalPages: TotalPages;
        pages: Page;
        perPages: Page;
        total: Total;
    };
};
export type UserGetTopAlbumsResponse = {
    topalbums: TopAlbums;
};
export type UserGetTopArtistsRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
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
            rank: Rank;
        };
    }>;
    "@attr": {
        user: UserName;
        totalPages: TotalPages;
        pages: Page;
        perPages: Page;
        total: Total;
    };
};
export type UserGetTopArtistsResponse = {
    topartists: TopArtists;
};
export type UserGetTopTagsRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
};
export type TopTags = {
    tag: Array<{
        name: TagName;
        url: Url;
        count: Count;
    }>;
    "@attr": {
        user: UserName;
    };
};
export type UserGetTopTagsResponse = {
    toptags: TopTags;
};
export type UserGetTopTracksRequest = {
    user: UserName;
    limit?: Limit;
    page?: Page;
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
            rank: Rank;
        };
    }>;
    "@attr": {
        user: UserName;
        totalPages: TotalPages;
        pages: Page;
        perPages: Page;
        total: Total;
    };
};
export type UserGetTopTracksResponse = {
    toptracks: TopTracks;
};
export type UserGetWeeklyAlbumChartRequest = {
    user: UserName;
    from?: From;
    to?: To;
};
export type WeeklyAlbumChartAttr = {
    from: From;
    to: To;
    user: UserName;
};
export type WeeklyAlbumChart = {
    album: Array<{
        artist: {
            mbid: Mbid;
            "#text": Text;
        };
        mbid: Mbid;
        url: Url;
        name: AlbumName;
        playcount: Playcount;
        "@attr": {
            rank: Rank;
        };
    }>;
    "@attr": {
        from: From;
        user: UserName;
        to: To;
    };
};
export type UserGetWeeklyAlbumChartResponse = {
    weeklyalbumchart: WeeklyAlbumChart;
};
export type UserGetWeeklyArtistChartRequest = {
    user: UserName;
    from?: From;
    to?: To;
};
export type WeeklyArtistChart = {
    artist: Array<{
        mbid: Mbid;
        url: Url;
        name: ArtistName;
        playcount: Playcount;
        "@attr": {
            rank: Rank;
        };
    }>;
    "@attr": {
        user: UserName;
        to: To;
        from: From;
    };
};
export type UserGetWeeklyArtistChartResponse = {
    weeklyartistchart: WeeklyArtistChart;
};
export type UserGetWeeklyChartListRequest = {
    user: UserName;
};
export type WeeklyChartList = {
    chart: Array<{
        "#text": Text;
        from: From;
        to: To;
    }>;
};
export type UserGetWeeklyChartListResponse = {
    weeklychartlist: WeeklyChartList;
};
export type UserGetWeeklyTrackChartRequest = {
    user: UserName;
    from?: From;
    to?: To;
};
export type WeeklyTrackChart = {
    track: Array<{
        artist: {
            mbid: Mbid;
            "#text": Text;
        };
        image: Array<Image>;
        mbid: Mbid;
        url: Url;
        name: TrackName;
        playcount: Playcount;
        "@attr": {
            rank: Rank;
        };
    }>;
    "@attr": {
        user: UserName;
        to: To;
        from: From;
    };
};
export type UserGetWeeklyTrackChartResponse = {
    weeklytrackchart: WeeklyTrackChart;
};
