import { fetch } from "cross-fetch";

export const fetcher = async <T>(...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  const json = await response.json();
  return json as T;
};
