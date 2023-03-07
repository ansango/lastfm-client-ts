/**
 * Fetches data from an API, and throws an error if the request failed.
 * fetcher is a generic function with one type parameter T.
 * It takes any arguments that fetch() takes, and returns a promise that
 * resolves to a value of type T.
 * @param {Parameters<typeof fetch>} args
 * @returns {Promise<T>}
 */
export declare const fetcher: <T>(input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<T>;
/**
 * This function takes a method name and an object of parameters, and builds a
 * URL to call the Last.fm API.
 *
 * @param method - The method name to be called.
 * @param params - An object of parameters for the API call.
 * @returns A URL string for the Last.fm API call.
 */
export declare const buildUrl: (method: string, params: {
    [key: string]: string | number;
}) => string;
