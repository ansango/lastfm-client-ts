import { fetch } from "cross-fetch";
import { config } from "./config";

/**
 * Fetches data from an API, and throws an error if the request failed.
 * fetcher is a generic function with one type parameter T.
 * It takes any arguments that fetch() takes, and returns a promise that
 * resolves to a value of type T.
 * @param {Parameters<typeof fetch>} args
 * @returns {Promise<T>}
 */

export const fetcher = async <T>(...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  const json = await response.json();
  return json as T;
};

/**
 * This function takes a method name and an object of parameters, and builds a
 * URL to call the Last.fm API.
 *
 * @param method - The method name to be called.
 * @param params - An object of parameters for the API call.
 * @returns A URL string for the Last.fm API call.
 */

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
