import type { PostsOptions } from "../types";

/**
 * Retrieves posts from the server.
 * @async
 * @param {PostsOptions} options - The options for retrieving posts.
 * @param {string} token - Your API Key.
 * @returns {Promise<any>} - A promise that resolves to the retrieved posts.
 */
const getPosts = async (options: PostsOptions, token: string): Promise<any> => {
    /**
     * @typedef {Object} PostsOptions - The options for retrieving posts.
     * @property {string} q - The search query.
     * @property {string} cursor - The cursor for pagination.
     * @property {number} limit - The maximum number of posts to retrieve.
     * @property {string} orderBy - The field to order the posts by.
     */

    const params = new URLSearchParams({
        q: options.q as any,
        cursor: options.cursor as any,
        limit: options.limit as any,
        orderBy: options.orderBy as any,
    });

    const response = await fetch(
        `https://zefer-api.onrender.com/posts?${params}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    const posts = await response.json();
    return posts;
};

export { getPosts };
