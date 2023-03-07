export declare const buildUrl: (method: string, params: {
    [key: string]: string | number;
}) => string;
export declare const fetcher: <T>(input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<T>;
