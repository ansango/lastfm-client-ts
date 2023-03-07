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
};
