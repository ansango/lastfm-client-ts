/**
 * This is a collection of all the API methods provided by Last.fm. It is used to
 * automatically generate the documentation for the API methods.
 */
export declare const method: {
    user: {
        getFriends: string;
        getInfo: string;
        getLovedTracks: string;
        getPersonalTags: string;
        getRecentTracks: string;
        getTopAlbums: string;
        getTopArtists: string;
        getTopTags: string;
        getTopTracks: string;
        getWeeklyAlbumChart: string;
        getWeeklyArtistChart: string;
        getWeeklyChartList: string;
        getWeeklyTrackChart: string;
    };
    album: {
        getInfo: string;
        getTags: string;
        getTopTags: string;
        search: string;
    };
    artist: {
        getInfo: string;
        getTags: string;
        getSimilar: string;
        getTopAlbums: string;
        getTopTags: string;
        getTopTracks: string;
        search: string;
    };
    track: {
        getInfo: string;
        getSimilar: string;
        getTags: string;
        getTopTags: string;
        search: string;
    };
    tag: {
        getInfo: string;
        getTopArtists: string;
        getTopTracks: string;
        getTopAlbums: string;
        getTopTags: string;
        getSimilar: string;
        getWeeklyChartList: string;
    };
    library: {
        getArtists: string;
    };
    chart: {
        getTopArtists: string;
        getTopTags: string;
        getTopTracks: string;
    };
    geo: {
        getTopArtists: string;
        getTopTracks: string;
    };
};
