import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: 'The Future of AIMS Compliance in 2025',
      excerpt: 'Exploring upcoming changes in Australian Information Management Standards and how organizations can prepare.',
      author: 'John Smith',
      date: '2025-01-15',
      category: 'Compliance',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'AI Implementation Best Practices for Enterprise',
      excerpt: 'Key considerations and strategies for successful AI adoption in large organizations.',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      category: 'AI Solutions',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'ISO 27001 Certification: A Step-by-Step Guide',
      excerpt: 'Complete roadmap for achieving ISO 27001 certification with practical tips and insights.',
      author: 'Michael Brown',
      date: '2025-01-05',
      category: 'ISMS',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">News & Insights</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in compliance, AI, and digital transformation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {posts.map((post, index) => (
                  <article key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="mb-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground">More articles coming soon...</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
