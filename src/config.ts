export const config = {
  apiKey: `${process.env.LASTFM_APIKEY}`,
  appName: `${process.env.LASTFM_APPNAME}`,
  baseUrl: `${process.env.LASTFM_API_BASE_URL}`,
  format: {
    json: "json",
    xml: "xml",
  },
  shareSecret: `${process.env.LASTFM_SHARED_SECRET}`,
  username: `${process.env.LASTFM_USER}`,
};
