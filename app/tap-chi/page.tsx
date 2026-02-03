'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { JournalHero, JournalFilters, JournalGrid } from '@/components/tap-chi';
import { mockPosts } from '@/lib/data/journal-posts';
import { PostCategory } from '@/lib/types/journal';

export default function YogaJournalPage() {
  const [activeFilter, setActiveFilter] = useState<PostCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts to only show allowed types: diary, knowledge, schedule, course
  const allowedPosts = useMemo(() => {
    return mockPosts.filter(post => 
      post.category === 'diary' || 
      post.category === 'knowledge' || 
      post.category === 'schedule' ||
      post.category === 'course'
    );
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = allowedPosts;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(post => post.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }

    // Sort by published date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [allowedPosts, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <JournalHero />
      
      {/* Filters */}
      <JournalFilters
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        onFilterChange={setActiveFilter}
        onSearchChange={setSearchQuery}
      />
      
      {/* Posts Grid */}
      <JournalGrid posts={filteredPosts} />

      <Footer />
    </div>
  );
}