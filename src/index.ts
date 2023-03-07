import { config } from "./config";
import { userApiMethods } from "./api";

export const lastFmClient = () => {
  return { config, userApiMethods };
};
