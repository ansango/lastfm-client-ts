"use strict";
/**
 * This is a collection of all the API methods provided by Last.fm. It is used to
 * automatically generate the documentation for the API methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.method = void 0;
exports.method = {
    user: {
        getFriends: "user.getFriends",
        getInfo: "user.getInfo",
        getLovedTracks: "user.getLovedTracks",
        getPersonalTags: "user.getPersonalTags",
        getRecentTracks: "user.getRecentTracks",
        getTopAlbums: "user.getTopAlbums",
        getTopArtists: "user.getTopArtists",
        getTopTags: "user.getTopTags",
        getTopTracks: "user.getTopTracks",
        getWeeklyAlbumChart: "user.getWeeklyAlbumChart",
        getWeeklyArtistChart: "user.getWeeklyArtistChart",
        getWeeklyChartList: "user.getWeeklyChartList",
        getWeeklyTrackChart: "user.getWeeklyTrackChart",
    },
    track: {
        getInfo: "track.getInfo",
        getSimilar: "track.getSimilar",
        getTags: "track.getTags",
        getTopTags: "track.getTopTags",
        search: "track.search",
    },
    album: {
        getInfo: "album.getInfo",
        getTags: "album.getTags",
        getTopTags: "album.getTopTags",
        search: "album.search",
    },
    artist: {
        getCorrection: "artist.getCorrection",
        getInfo: "artist.getInfo",
        getTags: "artist.getTags",
        getTopAlbums: "artist.getTopAlbums",
        getTopTags: "artist.getTopTags",
        getTopTracks: "artist.getTopTracks",
        search: "artist.search",
    },
    library: {
        getArtists: "library.getArtists",
    },
    tag: {
        getInfo: "tag.getInfo",
        getTopArtists: "tag.getTopArtists",
        getTopTracks: "tag.getTopTracks",
        getTopAlbums: "tag.getTopAlbums",
        getTopTags: "tag.getTopTags",
        getSimilar: "tag.getSimilar",
        getWeeklyChartList: "tag.getWeeklyChartList",
    },
    chart: {
        getTopArtists: "chart.getTopArtists",
        getTopTags: "chart.getTopTags",
        getTopTracks: "chart.getTopTracks",
    },
    geo: {
        getTopArtists: "geo.getTopArtists",
        getTopTracks: "geo.getTopTracks",
    },
};
