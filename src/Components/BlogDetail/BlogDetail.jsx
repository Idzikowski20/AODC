import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { withNamespaces } from 'react-i18next';
import { Button } from '../ui/button';
import { ArrowLeft } from '@mui/icons-material';
import { CalendarMonth } from '@mui/icons-material';
import { LockClock } from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

// Prosta funkcja do formatowania daty (możesz podmienić na własną)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogDetail = ({ t, i18n }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [formattedContent, setFormattedContent] = useState('');
  const [relatedPage, setRelatedPage] = useState(0);
  const postsPerPage = 6;

  const getContent = (post) => {
    return i18n.language === "en" ? (post.contentEng || t('noContent')) : (post.content || t('noContent'));
  };
  const getTitle = (post) => {
    return i18n.language === "en" ? (post.titleEng || post.title || t('noTitle')) : (post.title || t('noTitle'));
  };

  // Funkcja korzystająca z t musi być wewnątrz komponentu
  const formatReadingTime = (content) => {
    if (!content) return '';
    const text = content.replace(/<[^>]+>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return t('minRead', { count: minutes });
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/title/${encodeURIComponent(id)}`);
        setPost(response.data);
        // Spis treści i content w odpowiednim języku
        const html = i18n.language === "en"
          ? (response.data.contentEng || "")
          : (response.data.content || "");
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        tempDiv.querySelectorAll('h2, h3').forEach(h => {
          if (!h.id && h.textContent) {
            h.id = h.textContent.toLowerCase().replace(/\s+/g, '-');
          }
        });
        const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
        setTableOfContents(headings.map(h => ({
          id: h.id,
          text: h.textContent || '',
          level: h.tagName === 'H2' ? 2 : 3
        })));
        setFormattedContent(tempDiv.innerHTML);
      } catch (err) {
        setError(t('blogNotFound'));
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id, t, i18n.language]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setPosts(response.data);
      } catch {}
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen ">
        <div className="container max-w-4xl mx-auto px-4 py-32">
          <div className="h-12 w-3/4 mb-4 bg-gray-800 animate-pulse" />
          <div className="h-6 w-1/2 mb-8 bg-gray-800 animate-pulse" />
          <div className="h-[400px] w-full mb-8 bg-gray-800 animate-pulse" />
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-800 animate-pulse" />
            <div className="h-6 w-full bg-gray-800 animate-pulse" />
            <div className="h-6 w-3/4 bg-gray-800 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen ">
        <div className="container max-w-4xl mx-auto px-4 py-32 text-center text-gray-400">
          <p className="text-xl mb-4">{t('blogNotFound')}</p>
        </div>
      </div>
    );
  }

  const filteredPosts = posts.filter(p => p._id !== post._id);
  const paginatedPosts = filteredPosts.slice(relatedPage * postsPerPage, (relatedPage + 1) * postsPerPage);
  const hasMoreRelated = (relatedPage + 1) * postsPerPage < filteredPosts.length;

  return (
    <div className="">
      <Helmet>
        <title>{getTitle(post) ? `${getTitle(post)} | AODC Blog` : 'Blog Post | AODC'}</title>
        <meta name="description" content={i18n.language === 'en' ? (post.excerptEng || '') : (post.excerpt || '')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://aodc.pl/blog/${id}`} />
        <meta property="og:title" content={getTitle(post)} />
        <meta property="og:description" content={i18n.language === 'en' ? (post.excerptEng || '') : (post.excerpt || '')} />
        {post.image && <meta property="og:image" content={post.image} />}
      </Helmet>
      <div className="pt-32 pb-20">
        {/* Main content */}
        <div className="mx-auto max-w-5xl px-4 flex flex-col gap-10">
          {/* Article content */}
          <div className="w-full mt-[200px]">
            {/* Back button */}
            <div className="mb-6">
            {/* Post header */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{getTitle(post)}</h1>
              <div className="flex flex-wrap items-center gap-4 dark:text-premium-light/80 light:text-black mb-6">
                <div className="flex items-center">
                  <CalendarMonth size={16} className="mr-2" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <div className="flex items-center">
                  <LockClock size={16} className="mr-2" />
                  <span>{formatReadingTime(getContent(post))}</span>
                </div>
              </div>
            </header>
            {/* Featured image */}
            {post.image && (
              <div className="mb-10">
                <img 
                  src={post.image} 
                  alt={getTitle(post)} 
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]" 
                />
              </div>
            )}
            <article className="prose prose-invert prose-premium max-w-none mb-10">
              <div className='text-left' dangerouslySetInnerHTML={{ __html: formattedContent || getContent(post) }} />
            </article>
            {/* Share section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Share size={16} />
                <span className="font-medium">{t('share')}:</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-blue-600 hover:text-white">
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-sky-500 hover:text-white">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-blue-700 hover:text-white">
                  <LinkedIn size={18} />
                </Button> 
              </div>
            </div>
          </div>
        </div>
        {/* Powiązane artykuły - paginacja */}
        {paginatedPosts && paginatedPosts.length > 0 && (
          <section className="mt-16 mx-auto max-w-3xl w-full">
            <h2 className="text-xl font-bold mb-6">{t('otherPosts')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-center">
              {paginatedPosts.map((rp) => (
                <a
                  key={rp._id}
                  href={`/blog/${rp.title.replace(/\s+/g, '-')}`}
                  className="rounded-2xl flex flex-col items-center p-4 transition hover:scale-105 hover:shadow-xl duration-200 mx-auto md:mx-0"
                >
                  {rp.image && (
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="rounded-xl w-full h-32 object-cover mb-3"
                    />
                  )}
                  <div className="font-semibold text-lg text-center mb-2 line-clamp-2 text-gray-900 dark:text-white">{i18n.language === 'en' ? (rp.titleEng || rp.title) : rp.title}</div>
                  <div className="text-sm text-gray-400 text-center mb-2">
                    {i18n.language === 'en'
                      ? (rp.excerptEng
                          ? (rp.excerptEng.length > 100
                              ? rp.excerptEng.slice(0, 100).replace(/\s+\S*$/, '') + '...'
                              : rp.excerptEng)
                          : (rp.contentEng
                              ? rp.contentEng.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
                              : t('noDescription')))
                      : (rp.excerpt
                          ? (rp.excerpt.length > 100
                              ? rp.excerpt.slice(0, 100).replace(/\s+\S*$/, '') + '...'
                              : rp.excerpt)
                          : (rp.content
                              ? rp.content.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
                              : t('noDescription')))}
                  </div>
                </a>
              ))}
            </div>
            {hasMoreRelated && (
              <div className="flex justify-center">
                <Button onClick={() => setRelatedPage(relatedPage + 1)} className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6t">{t('loadMore')}</Button>
              </div>
            )}
          </section>
        )}
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(BlogDetail);
