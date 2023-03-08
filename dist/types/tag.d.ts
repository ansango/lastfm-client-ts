import type { Content, Summary, TagName, Url } from "./base";
export type TagWiki = {
    summary: Summary;
    content: Content;
};
/**
 * Tag
 * @see https://www.last.fm/api/show/tag.getInfo
 */
export type Tag = {
    name: TagName;
    url: Url;
    total: number;
    reach: number;
    wiki: TagWiki;
};
export type TagGetInfoRequest = {};
export type TagGetInfoResponse = {};
export type TagGetSimilarRequest = {};
export type TagGetSimilarResponse = {};
export type TagGetTopAlbumsRequest = {};
export type TagGetTopAlbumsResponse = {};
export type TagGetTopArtistsRequest = {};
export type TagGetTopArtistsResponse = {};
export type TagGetTopTagsRequest = {};
export type TagGetTopTagsResponse = {};
export type TagGetTopTracksRequest = {};
export type TagGetTopTracksResponse = {};
export type TagGetWeeklyChartListRequest = {};
export type TagGetWeeklyChartListResponse = {};
