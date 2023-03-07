"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUrl = exports.fetcher = void 0;
const cross_fetch_1 = require("cross-fetch");
const config_1 = require("./config");
/**
 * Fetches data from an API, and throws an error if the request failed.
 * fetcher is a generic function with one type parameter T.
 * It takes any arguments that fetch() takes, and returns a promise that
 * resolves to a value of type T.
 * @param {Parameters<typeof fetch>} args
 * @returns {Promise<T>}
 */
const fetcher = (...args) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, cross_fetch_1.fetch)(...args);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const json = yield response.json();
    return json;
});
exports.fetcher = fetcher;
/**
 * This function takes a method name and an object of parameters, and builds a
 * URL to call the Last.fm API.
 *
 * @param method - The method name to be called.
 * @param params - An object of parameters for the API call.
 * @returns A URL string for the Last.fm API call.
 */
const buildUrl = (method, params) => {
    const url = new URL(config_1.config.base_url);
    url.searchParams.append("method", method);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
    });
    const api_key = config_1.config.api_key;
    const format = config_1.config.format.json;
    return `${url.toString()}&api_key=${api_key}&format=${format}`;
};
exports.buildUrl = buildUrl;
