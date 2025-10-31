/**
 * API Integration Functions
 * Fetches data from JSONPlaceholder API
 */

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch posts with pagination
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @returns {Promise<Array>} - Array of posts
 */
export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Get total count from headers for pagination
    const totalCount = response.headers.get('x-total-count');
    
    return {
      data,
      totalCount: totalCount ? parseInt(totalCount) : data.length,
      currentPage: page,
      limit,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} - Post object
 */
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

/**
 * Search posts by title
 * @param {string} query - Search query
 * @returns {Promise<Array>} - Array of matching posts
 */
export const searchPosts = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter posts by query
    const filteredPosts = data.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredPosts;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};

/**
 * Fetch users (for additional data)
 * @returns {Promise<Array>} - Array of users
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};