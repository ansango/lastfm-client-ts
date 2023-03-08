"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.albumApiMethods = {
    getInfo: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.album.getInfo, params), init),
    getTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.album.getTags, params), init),
    getTopTags: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.album.getTopTags, params), init),
    search: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.album.search, params), init),
};
