import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { withNamespaces } from 'react-i18next';

// Importuj Button i Skeleton z odpowiedniej ścieżki (dostosuj jeśli masz inną strukturę)
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
// Importuj ikonę Calendar (np. z lucide-react)
import { Calendar } from 'lucide-react';

// Prosta funkcja do formatowania daty (możesz podmienić na własną)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Blog = ({ t, i18n }) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoadingPosts(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        console.log('API /api/blogs response:', response.data);
        setPosts(response.data);
      } catch (err) {
        setError(t('blogLoadError'));
      } finally {
        setIsLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [t]);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="">
      <Helmet>
        <title>AODC - Blog</title>
        <meta name="description" content={t('12')} />
        {/* Open Graph */}
        <meta property="og:title" content="AODC - Blog" />
        <meta property="og:description" content={t('12')} />
        <meta property="og:image" content="https://aodc.pl/banner.png" />
        <meta property="og:url" content="https://aodc.pl/blog" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AODC - Blog" />
        <meta name="twitter:description" content={t('12')} />
        <meta name="twitter:image" content="https://aodc.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://aodc.pl/blog" />
      </Helmet>
      <div className="container mx-auto px-4">
        <section className="pb-24">
          <div className="container mx-auto px-4">
            {isLoadingPosts ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col">
                    <Skeleton className="h-52 w-full rounded-xl mb-4" />
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-gray-400 py-12">
                <p className="text-xl mb-4">{error}</p>
                <p className="mb-4">{t('blogLoadError')}</p>
                <Button onClick={() => window.location.reload()} variant="outline">{t('blogReload')}</Button>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article 
                    key={post._id} 
                    className="group bg-transparent cursor-pointer"
                    onClick={() => handlePostClick(post.title.replace(/\s+/g, '-'))}
                  >
                    <div className="block overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={post.image || '/placeholder.svg'} 
                        alt={i18n.language === 'en' ? (post.titleEng || post.title) : post.title} 
                        className="w-full blog-image object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.createdAt)}
                    </div>
                    
                    <h3 className="text-xl blog-title font-semibold mb-2 group-hover:text-premium-purple group-hover:underline transition-colors">
                      {i18n.language === 'en' ? (post.titleEng || post.title) : post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-3 line-clamp-2">
                      {i18n.language === 'en'
                        ? (post.excerptEng || post.summaryEng || (post.contentEng ? post.contentEng.replace(/<[^>]+>/g, '').slice(0, 150) + '...' : t('noDescription')))
                        : (post.excerpt || post.summary || (post.content ? post.content.replace(/<[^>]+>/g, '').slice(0, 150) + '...' : t('noDescription')))}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <p className="text-xl mb-4">{t('noPosts')}</p>
                <p>{t('blogWaitForNew')}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default withNamespaces()(Blog);
