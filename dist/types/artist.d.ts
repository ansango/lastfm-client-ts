import type { ArtistName, Content, Image, Listeners, Mbid, Playcount, Published, Summary, TagName, Text, Url } from "./base";
export type ArtistStats = {
    listeners: Listeners;
    playcount: Playcount;
};
export type ArtistSimilar = {
    artist: Array<{
        name: ArtistName;
        url: Url;
        image: Array<Image>;
    }>;
};
export type ArtistTags = {
    tag: Array<{
        name: TagName;
        url: Url;
    }>;
};
export type ArtistBio = {
    links: {
        link: {
            "#text": Text;
            rel: string;
            href: string;
        };
    };
    published: Published;
    summary: Summary;
    content: Content;
};
/**
 * Artist
 * @see https://www.last.fm/api/show/artist.getInfo
 */
export type Artist = {
    name: ArtistName;
    mbid: Mbid;
    url: Url;
    image: Array<Image>;
    ontour: string;
    stats: ArtistStats;
    similar: ArtistSimilar;
    tags: ArtistTags;
    bio: ArtistBio;
};
export type ArtistGetCorrectionRequest = {};
export type ArtistGetCorrectionResponse = {};
export type ArtistGetInfoRequest = {};
export type ArtistGetInfoResponse = {};
export type ArtistGetTagsRequest = {};
export type ArtistGetTagsResponse = {};
export type ArtistGetTopAlbumsRequest = {};
export type ArtistGetTopAlbumsResponse = {};
export type ArtistGetTopTagsRequest = {};
export type ArtistGetTopTagsResponse = {};
export type ArtistGetTopTracksRequest = {};
export type ArtistGetTopTracksResponse = {};
export type ArtistSearchRequest = {};
export type ArtistSearchResponse = {};
