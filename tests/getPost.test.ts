import { getPost } from "../src/lib/getPost";
import { jest } from "@jest/globals";

describe("getPost", () => {
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

    it("should fetch a post with correct ID and token", async () => {
        const id = "123";
        const token = "your-api-token";

        await getPost(id, token);

        expect(fetch).toHaveBeenCalledWith(
            "https://zefer-api.onrender.com/posts/123",
            {
                headers: {
                    Authorization: "Bearer your-api-token",
                },
            },
        );
    });

    it("should return the fetched post", async () => {
        const id = "123";
        const token = "your-api-token";

        const result = await getPost(id, token);

        expect(result).toEqual(mockResponse);
    });
});
