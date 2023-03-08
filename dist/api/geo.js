"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.geoApiMethods = {
    getTopArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.geo.getTopArtists, params), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.geo.getTopTracks, params), init),
};
