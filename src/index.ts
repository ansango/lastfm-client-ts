import { config } from "./config";
import {
  userApiMethods,
  albumApiMethods,
  artistApiMethods,
  chartApiMethods,
  geoApiMethods,
  libraryApiMethods,
  tagApiMethods,
  trackApiMethods,
} from "./api";

export const lastFmClient = () => {
  return {
    config,
    userApiMethods,
    albumApiMethods,
    artistApiMethods,
    chartApiMethods,
    geoApiMethods,
    libraryApiMethods,
    tagApiMethods,
    trackApiMethods,
  };
};

export * from "./types";
