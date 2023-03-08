"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.artistApiMethods = {
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.getInfo, params), init),
    getTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.getTags, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.getTopTags, params), init),
    getTopAlbums: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.getTopAlbums, params), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.getTopTracks, params), init),
    search: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.artist.search, params), init),
};
