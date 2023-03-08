"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.userApiMethods = {
    getFriends: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getFriends, params), init),
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getInfo, params), init),
    getLovedTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getLovedTracks, params), init),
    getRecentTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getRecentTracks, params), init),
    getTopAlbums: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopAlbums, params), init),
    getTopArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopArtists, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopTags, params), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopTracks, params), init),
    getWeeklyAlbumChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyAlbumChart, params), init),
    getWeeklyArtistChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyArtistChart, params), init),
    getWeeklyChartList: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyChartList, params), init),
    getWeeklyTrackChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyTrackChart, params), init),
};
