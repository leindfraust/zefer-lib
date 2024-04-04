import type { PostsOptions, Post } from "../types";
import getApiBaseUrl from "../utils/getApiBaseUrl";

/**
 * Retrieves posts from the server.
 * @async
 * @param {string} token - Your API Key.
 * @param {PostsOptions} options - The options for retrieving posts.
 * @returns {Promise<Post[]>} - A promise that resolves to the retrieved posts.
 */
const getPosts = async (
    token: string,
    options?: PostsOptions,
): Promise<Post[]> => {
    /**
     * @typedef {Object} PostsOptions - The options for retrieving posts.
     * @property {string} q - The search query.
     * @property {string} cursor - The cursor for pagination.
     * @property {number} limit - The maximum number of posts to retrieve.
     * @property {string} orderBy - The field to order the posts by.
     * @property {string} series - The series the posts belong to.
     */

    const params = new URLSearchParams({
        ...(options &&
            options.q && {
                q: options.q,
            }),
        ...(options &&
            options.cursor && {
                cursor: options.cursor,
            }),
        ...(options &&
            options.limit && {
                limit: options.limit.toString(),
            }),
        ...(options &&
            options.orderBy && {
                orderBy: options.orderBy,
            }),
        ...(options &&
            options.series && {
                series: options.series,
            }),
    });

    const response = await fetch(`${getApiBaseUrl}/posts?${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const posts = await response.json();
    return posts as Post[];
};

export { getPosts };
