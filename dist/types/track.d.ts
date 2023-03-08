import type { AlbumName, ArtistName, Content, Duration, Image, Listeners, Mbid, Playcount, Position, Published, Summary, TagName, TrackName, Url } from "./base";
export type TrackArtist = {
    name: ArtistName;
    mbid: Mbid;
    url: Url;
};
export type TrackAlbum = {
    artist: ArtistName;
    title: AlbumName;
    mbid: Mbid;
    url: Url;
    image: Array<Image>;
    "@attr": {
        position: Position;
    };
};
export type TrackTopTag = {
    tag: Array<{
        name: TagName;
        url: Url;
    }>;
};
export type TrackWiki = {
    published: Published;
    summary: Summary;
    content: Content;
};
/**
 * Track
 * @see https://www.last.fm/api/show/track.getInfo
 */
export type Track = {
    name: TrackName;
    mbid: Mbid;
    url: Url;
    duration: Duration;
    listeners: Listeners;
    playcount: Playcount;
    artist: TrackArtist;
    album: TrackAlbum;
    topTags: TrackTopTag;
    wiki: TrackWiki;
};
export type TrackGetCorrectionRequest = {};
export type TrackGetCorrectionResponse = {};
export type TrackGetInfoRequest = {};
export type TrackGetInfoResponse = {};
export type TrackGetSimilarRequest = {};
export type TrackGetSimilarResponse = {};
export type TrackGetTagsRequest = {};
export type TrackGetTagsResponse = {};
export type TrackGetTopTagsRequest = {};
export type TrackGetTopTagsResponse = {};
export type TrackSearchRequest = {};
export type TrackSearchResponse = {};
