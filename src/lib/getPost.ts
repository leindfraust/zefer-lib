/**
 * Retrieves a single blog post from the server.
 * @async
 * @param {string} id - The ID or title ID of the blog post.
 * @param {string} token - Your API key.
 * @returns {Promise<any>} - A promise that resolves to the retrieved blog post.
 */
const getPost = async (id: string, token: string): Promise<any> => {
    const response = await fetch(`https://zefer-api.onrender.com/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const post = await response.json();
    return post;
};

export { getPost };
