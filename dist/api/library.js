"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryApiMethods = void 0;
const method_1 = require("../method");
const utils_1 = require("../utils");
exports.libraryApiMethods = {
    getArtists: (params, init) => (0, utils_1.fetcher)((0, utils_1.buildUrl)(method_1.method.library.getArtists, params), init),
};
