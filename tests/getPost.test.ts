import { getPost } from "../src/lib/getPost";
import { jest } from "@jest/globals";
import getApiBaseUrl from "../src/utils/getApiBaseUrl";

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

        await getPost(token, id);

        expect(fetch).toHaveBeenCalledWith(`${getApiBaseUrl}/posts/123`, {
            headers: {
                Authorization: "Bearer your-api-token",
            },
        });
    });

    it("should return the fetched post", async () => {
        const id = "123";
        const token = "your-api-token";

        const result = await getPost(token, id);

        expect(result).toEqual(mockResponse);
    });
});
