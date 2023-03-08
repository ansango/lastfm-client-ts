"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.trackApiMethods = {
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.track.getInfo, params), init),
    getSimilar: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.track.getSimilar, params), init),
    getTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.track.getTags, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.track.getTopTags, params), init),
    search: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.track.search, params), init),
};
