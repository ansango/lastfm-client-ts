import type { LibraryGetArtistsRequest, LibraryGetArtistsResponse } from "../types/library";
export type LibraryApiMethods = {
    /**
     * Get a list of the artists saved in a user's Last.fm library, along with the number of plays by the user.
     * @param {LibraryGetArtistsRequest} params
     * @param {RequestInit} init
     * @returns {Promise<LibraryGetArtistsResponse>}
     * https://www.last.fm/api/show/library.getArtists
     * */
    getArtists: (params: LibraryGetArtistsRequest, init?: RequestInit) => Promise<LibraryGetArtistsResponse>;
};
export declare const libraryApiMethods: LibraryApiMethods;
