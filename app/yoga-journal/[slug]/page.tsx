import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { mockPosts } from '@/lib/data/journal-posts';
import { 
  DiaryLayout, 
  ScheduleLayout, 
  KnowledgeLayout, 
  CourseLayout,
  StickyCTA 
} from '@/components/journal/post-detail';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const renderPostContent = () => {
    switch (post.category) {
      case 'diary':
        return <DiaryLayout post={post} />;
      case 'schedule':
        return <ScheduleLayout post={post} />;
      case 'knowledge':
        return <KnowledgeLayout post={post} />;
      case 'course':
        return <CourseLayout post={post} />;
      default:
        return <KnowledgeLayout post={post} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-green-600">Trang chủ</a>
            <span className="mx-2">/</span>
            <a href="/yoga-journal" className="hover:text-green-600">Tạp chí Yoga</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Post Content */}
      <main className="py-8">
        {renderPostContent()}
      </main>

      {/* Sticky CTA */}
      <StickyCTA category={post.category} />

      <Footer />
    </div>
  );
}

// Generate static params for all posts
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Bài viết không tìm thấy',
    };
  }

  return {
    title: `${post.title} | Tạp chí Yoga`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
    },
  };
}