import type { Post } from "../types";
import getApiBaseUrl from "../utils/getApiBaseUrl";

/**
 * Retrieves a single blog post from the server.
 * @async
 * @param {string} token - Your API key.
 * @param {string} id - The ID or title ID of the blog post.
 * @returns {Promise<Post>} - A promise that resolves to the retrieved blog post.
 */
const getPost = async (token: string, id: string): Promise<Post> => {
    const response = await fetch(`${getApiBaseUrl}/posts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const post = await response.json();
    return post as Post;
};

export { getPost };
