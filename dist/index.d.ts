export declare const lastFmClient: () => {
    config: {
        api_key: string;
        app_name: string;
        base_url: string;
        format: {
            json: string;
            xml: string;
        };
        share_secret: string;
        username: string;
    };
    userApiMethods: import("./api").UserApiMethods;
    albumApiMethods: import("./api").AlbumApiMethods;
    artistApiMethods: import("./api").ArtistApiMethods;
    chartApiMethods: import("./api").ChartApiMethods;
    geoApiMethods: import("./api").GeoApiMethods;
    libraryApiMethods: import("./api").LibraryApiMethods;
    tagApiMethods: import("./api").TagApiMethods;
    trackApiMethods: import("./api").TrackApiMethods;
};
export * from "./types";
