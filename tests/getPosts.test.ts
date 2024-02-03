import { getPosts } from "../src/lib/getPosts";
import { PostsOptions } from "../src/types";
import { jest } from "@jest/globals";

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
        };
        const token = "your-api-token";

        await getPosts(options, token);

        expect(fetch).toHaveBeenCalledWith(
            "https://zefer-api.onrender.com/posts?q=search&cursor=cursor&limit=10&orderBy=latest",
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
        };
        const token = "your-api-token";

        const result = await getPosts(options, token);

        expect(result).toEqual(mockResponse);
    });
});
