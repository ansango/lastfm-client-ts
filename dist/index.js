"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastFmClient = void 0;
const config_1 = require("./config");
const api_1 = require("./api");
const lastFmClient = () => {
    return { config: config_1.config, userApiMethods: api_1.userApiMethods };
};
exports.lastFmClient = lastFmClient;
