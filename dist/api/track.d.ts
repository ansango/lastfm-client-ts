import type { TrackGetInfoRequest, TrackGetInfoResponse, TrackGetSimilarRequest, TrackGetSimilarResponse, TrackGetTagsRequest, TrackGetTagsResponse, TrackGetTopTagsRequest, TrackGetTopTagsResponse, TrackSearchRequest, TrackSearchResponse } from "../types/track";
export type TrackApiMethods = {
    /**
     * Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
     * @param {TrackGetInfoRequest} params
     * @param {RequestInit} init
     * @returns {Promise<TrackGetInfoResponse>}
     * https://www.last.fm/api/show/track.getInfo
     * */
    getInfo: (params: TrackGetInfoRequest, init?: RequestInit) => Promise<TrackGetInfoResponse>;
    /**
     * Get the tags applied by an individual user to a track on Last.fm.
     * @param {TrackGetSimilarRequest} params
     * @param {RequestInit} init
     * @returns {Promise<TrackGetSimilarResponse>}
     * https://www.last.fm/api/show/track.getSimilar
     * */
    getSimilar: (params: TrackGetSimilarRequest, init?: RequestInit) => Promise<TrackGetSimilarResponse>;
    /**
     * Get the tags applied by an individual user to a track on Last.fm.
     * @param {TrackGetTagsRequest} params
     * @param {RequestInit} init
     * @returns {Promise<TrackGetTagsResponse>}
     * https://www.last.fm/api/show/track.getTags
     * */
    getTags: (params: TrackGetTagsRequest, init?: RequestInit) => Promise<TrackGetTagsResponse>;
    /**
     * Get the top tags for a track on Last.fm, ordered by popularity.
     *  @param {TrackGetTopTagsRequest} params
     * @param {RequestInit} init
     * @returns {Promise<TrackGetTopTagsResponse>}
     * https://www.last.fm/api/show/track.getTopTags
     * */
    getTopTags: (params: TrackGetTopTagsRequest, init?: RequestInit) => Promise<TrackGetTopTagsResponse>;
    /**
     * Search for a track by track name. Returns track matches sorted by relevance.
     * @param {TrackSearchRequest} params
     * @param {RequestInit} init
     * @returns {Promise<TrackSearchResponse>}
     * https://www.last.fm/api/show/track.search
     * */
    search: (params: TrackSearchRequest, init?: RequestInit) => Promise<TrackSearchResponse>;
};
export declare const trackApiMethods: TrackApiMethods;
