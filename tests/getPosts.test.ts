import { getPosts } from "../src/lib/getPosts";
import { PostsOptions } from "../src/types";
import { jest } from "@jest/globals";
import getApiBaseUrl from "../src/utils/getApiBaseUrl";

describe("getPosts", () => {
    const mockResponse = { data: "mocked data" };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });

    beforeEach(() => {
        (global as any).fetch = jest
            .fn()
            .mockImplementation(() => mockFetchPromise);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch posts with correct options and token", async () => {
        const options: PostsOptions = {
            q: "search",
            cursor: "cursor",
            limit: 10,
            orderBy: "latest",
            seriesId: "series",
        };
        const token = "your-api-token";

        await getPosts(token, options);

        expect(fetch).toHaveBeenCalledWith(
            `${getApiBaseUrl}/posts?q=search&cursor=cursor&limit=10&orderBy=latest&seriesId=series`,
            {
                headers: {
                    Authorization: "Bearer your-api-token",
                },
            },
        );
    });

    it("should return the fetched posts", async () => {
        const options: PostsOptions = {
            q: "search",
            cursor: "cursor",
            limit: 10,
            orderBy: "latest",
            seriesId: "series",
        };
        const token = "your-api-token";

        const result = await getPosts(token, options);

        expect(result).toEqual(mockResponse);
    });
});
