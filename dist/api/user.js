"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.userApiMethods = {
    getFriends: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getFriends, Object.assign({}, params)), init),
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getInfo, Object.assign({}, params)), init),
    getLovedTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getLovedTracks, Object.assign({}, params)), init),
    getRecentTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getRecentTracks, Object.assign({}, params)), init),
    getTopAlbums: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopAlbums, Object.assign({}, params)), init),
    getTopArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopArtists, Object.assign({}, params)), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopTags, Object.assign({}, params)), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getTopTracks, Object.assign({}, params)), init),
    getWeeklyAlbumChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyAlbumChart, Object.assign({}, params)), init),
    getWeeklyArtistChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyArtistChart, Object.assign({}, params)), init),
    getWeeklyChartList: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyChartList, Object.assign({}, params)), init),
    getWeeklyTrackChart: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.user.getWeeklyTrackChart, Object.assign({}, params)), init),
};
