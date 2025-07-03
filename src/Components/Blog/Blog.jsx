import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Blog = () => {
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
        setPosts(response.data);
      } catch (err) {
        setError('Wystąpił błąd podczas ładowania postów.');
      } finally {
        setIsLoadingPosts(false);
      }
    };
    fetchPosts();
  }, []);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="">
      <Helmet>
        <title>AODC - Blog</title>
        <meta name="description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        {/* Open Graph */}
        <meta property="og:title" content="AODC - Blog" />
        <meta property="og:description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        <meta property="og:image" content="https://aodc.pl/banner.png" />
        <meta property="og:url" content="https://aodc.pl/blog" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AODC - Blog" />
        <meta name="twitter:description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        <meta name="twitter:image" content="https://aodc.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://aodc.pl/blog" />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-8">Blog.</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Najnowsze informacje, porady i trendy ze świata IT.
        </p>
        <section className="pb-24">
          {isLoadingPosts ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col">
                  <div className="h-52 w-full rounded-xl mb-4 bg-gray-800 animate-pulse" />
                  <div className="h-4 w-24 mb-2 bg-gray-800 animate-pulse" />
                  <div className="h-6 w-full mb-2 bg-gray-800 animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-800 animate-pulse" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl mb-4">{error}</p>
              <p className="mb-4">Spróbuj odświeżyć stronę lub sprawdź połączenie internetowe.</p>
              <button onClick={() => window.location.reload()} className="px-4 py-2 rounded bg-gray-700 text-white">Odśwież stronę</button>
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => post.published !== false).map((post) => (
                <article
                  key={post._id}
                  className="group bg-[#181836] cursor-pointer flex flex-col rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handlePostClick(encodeURIComponent(post.title.replace(/\s+/g, '-')))}
                >
                  <div className="block overflow-hidden rounded-t-xl">
                    <img
                      src={post.image || '/assets/noimage.png'}
                      alt={post.title}
                      className="w-full h-56 object-cover rounded-t-xl"
                      onError={e => { e.target.src = '/assets/noimage.png'; }}
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-400 pt-4 mb-2 px-4">
                    <span className="mr-1">📅</span>
                    {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-left px-4 text-white group-hover:text-blue-400 group-hover:underline transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 text-left px-4">
                    {post.excerpt || post.summary || 'Brak opisu'}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl mb-4">Brak postów do wyświetlenia.</p>
              <p>Wróć później, gdy pojawią się nowe artykuły.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blog;
