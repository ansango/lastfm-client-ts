import { config } from "./config";
import { fetcher } from "./fetcher";
import { Period } from "./types";
import { method } from "./method";

export const lastFmClient = () => {
  const userApiMethods = {
    getInfo: ({ period }: { period: Period }): Promise<{}> =>
      fetcher(`${config.baseUrl}?method=${method.user.getInfo}`),
  };
  return { config, userApiMethods };
};
