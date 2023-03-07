import { fetch } from "cross-fetch";
import { config } from "./config";

export const buildUrl = (
  method: string,
  params: { [key: string]: string | number }
) => {
  const url = new URL(config.base_url);
  url.searchParams.append("method", method);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  const api_key = config.api_key;
  const format = config.format.json;

  return `${url.toString()}&api_key=${api_key}&format=${format}`;
};

export const fetcher = async <T>(...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  const json = await response.json();
  return json as T;
};
