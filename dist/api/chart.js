"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.chartApiMethods = {
    getTopArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.chart.getTopArtists, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.chart.getTopTags, params), init),
    getTopTracks: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.chart.getTopTracks, params), init),
};
