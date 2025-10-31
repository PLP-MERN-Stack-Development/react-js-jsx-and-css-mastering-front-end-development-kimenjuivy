import React, { useState, useEffect } from 'react';
import { Search, Loader, AlertCircle, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { fetchPosts, searchPosts } from '../api/fetchPosts';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * API Data Page Component
 * Displays posts from JSONPlaceholder API with search and pagination
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const postsPerPage = 10;

  // Fetch posts on component mount and page change
  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  // Load posts from API
  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    setIsSearching(false);

    try {
      const result = await fetchPosts(currentPage, postsPerPage);
      setPosts(result.data);
      setTotalPages(Math.ceil(result.totalCount / postsPerPage));
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      loadPosts();
      return;
    }

    setLoading(true);
    setError(null);
    setIsSearching(true);

    try {
      const results = await searchPosts(searchQuery);
      setPosts(results);
      setTotalPages(1); // Reset pagination for search results
      setCurrentPage(1);
    } catch (err) {
      setError('Failed to search posts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
    loadPosts();
  };

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          API Data Explorer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Browse and search posts from JSONPlaceholder API
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title or content..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <Button type="submit" variant="primary">
            Search
          </Button>
          {isSearching && (
            <Button type="button" variant="secondary" onClick={clearSearch}>
              Clear
            </Button>
          )}
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader className="animate-spin text-blue-600 dark:text-blue-400 mb-4" size={48} />
          <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <Card className="max-w-2xl mx-auto">
          <Card.Body className="flex items-center gap-4 text-red-600 dark:text-red-400">
            <AlertCircle size={24} />
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <>
          {posts.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <Card.Body className="text-center py-12">
                <Search className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 dark:text-gray-400">
                  No posts found. Try a different search query.
                </p>
              </Card.Body>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card
                  key={post.id}
                  hover
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Card.Header>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <User size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                      {post.body}
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Post #{post.id}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        User {post.userId}
                      </span>
                    </div>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isSearching && totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
                Previous
              </Button>

              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="outline"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight size={20} />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ApiData;