"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.tagApiMethods = {
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getInfo, params), init),
    getSimilar: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getSimilar, params), init),
    getTopAlbums: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getTopAlbums, params), init),
    getTopArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getTopArtists, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getTopTags, params), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getTopTracks, params), init),
    getWeeklyChartList: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.tag.getWeeklyChartList, params), init),
};
