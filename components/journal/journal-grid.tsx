'use client';

import { useState } from 'react';
import { Post } from '@/lib/types/journal';
import PostCard from './post-card';
import { Button } from '@/components/ui/button';

interface JournalGridProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 6;

export default function JournalGrid({ posts }: JournalGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);
  
  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (posts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Không tìm thấy bài viết
            </h3>
            <p className="text-gray-600">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm nội dung.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Hiển thị <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, posts.length)}</span> trong tổng số <span className="font-semibold">{posts.length}</span> bài viết
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6">
            {/* Load More Button (Mobile-friendly) */}
            {currentPage < totalPages && (
              <Button
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                className="lg:hidden border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold"
              >
                Xem thêm bài viết
              </Button>
            )}

            {/* Page Numbers (Desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Previous Button */}
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="px-4 py-2"
              >
                Trước
              </Button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`w-10 h-10 ${
                    currentPage === page 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </Button>
              ))}

              {/* Next Button */}
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="px-4 py-2"
              >
                Sau
              </Button>
            </div>

            {/* Page Info */}
            <p className="text-sm text-gray-500">
              Trang {currentPage} / {totalPages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}