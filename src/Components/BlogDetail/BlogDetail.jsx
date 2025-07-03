import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header2 from '../Header/Header2';
import Footer2 from '../Footer/Footer2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { withNamespaces } from 'react-i18next';

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
    return i18n.language === "en" ? post.contentEng || "No content available" : post.content || "Brak treści";
  };
  const getTitle = (post) => {
    return i18n.language === "en" ? post.titleEng || "No title" : post.title || "Brak tytułu";
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/title/${encodeURIComponent(id)}`);
        setPost(response.data);
        // Spis treści
        if (response.data && (response.data.content || response.data.contentEng)) {
          const html = response.data.content || response.data.contentEng;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          // Dodaj id do h2/h3 jeśli nie ma
          tempDiv.querySelectorAll('h2, h3').forEach(h => {
            if (!h.id && h.textContent) {
              h.id = h.textContent.toLowerCase().replace(/\s+/g, '-');
            }
          });
          // Spis treści
          const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
          setTableOfContents(headings.map(h => ({
            id: h.id,
            text: h.textContent || '',
            level: h.tagName === 'H2' ? 2 : 3
          })));
          setFormattedContent(tempDiv.innerHTML);
        }
      } catch (err) {
        setError('Nie znaleziono posta lub wystąpił błąd.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

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
        <Header2 />
        <div className="container max-w-4xl mx-auto px-4 py-32 text-center text-gray-400">
          <p className="text-xl mb-4">Nie znaleziono posta o podanym adresie URL lub nie jest on opublikowany.</p>
        </div>
        <Footer2 />
      </div>
    );
  }

  const filteredPosts = posts.filter(p => p._id !== post._id);
  const paginatedPosts = filteredPosts.slice(relatedPage * postsPerPage, (relatedPage + 1) * postsPerPage);
  const hasMoreRelated = (relatedPage + 1) * postsPerPage < filteredPosts.length;

  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>{post?.title ? `${post.title} | AODC Blog` : 'Blog Post | AODC'}</title>
        <meta name="description" content="Szczegóły wpisu na blogu AODC – web development, SEO, tworzenie stron internetowych, sklepy online." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://aodc.pl/blog/${id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {post.image && <meta property="og:image" content={post.image} />}
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-4 flex flex-col gap-10">
          <div className="w-full">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center">
                  <span className="mr-2">📅</span>
                  <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}</span>
                </div>
              </div>
            </header>
            {post.image && (
              <div className="mb-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                  onError={e => { e.target.src = '/assets/noimage.png'; }}
                />
              </div>
            )}
            {/* Spis treści */}
            {tableOfContents.length > 0 && (
              <section className="mb-10 toc-section">
                <div className="mt-10 blog-bg border rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-2">Z tego artykułu dowiesz się:</h2>
                  <ul className="list-disc pl-6">
                    {tableOfContents.map(heading => (
                      <li key={heading.id}>
                        <a href={`#${heading.id}`} className="text-blue-400 hover:underline">{heading.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
            <article className="prose prose-invert max-w-none mb-10">
              <div dangerouslySetInnerHTML={{ __html: formattedContent || post.content }} />
            </article>
          </div>
        </div>
        {/* Powiązane artykuły - paginacja */}
        {paginatedPosts && paginatedPosts.length > 0 && (
          <section className="mt-16 mx-auto max-w-3xl w-full">
            <h2 className="text-xl font-bold mb-6">Powiązane artykuły</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-center">
              {paginatedPosts.map((rp) => (
                <a
                  key={rp._id}
                  href={`/blog/${encodeURIComponent(rp.title.replace(/\s+/g, '-'))}`}
                  className="rounded-2xl flex flex-col items-center p-4 transition hover:scale-105 hover:shadow-xl duration-200 mx-auto md:mx-0"
                >
                  {rp.image && (
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="rounded-xl w-full h-32 object-cover mb-3"
                      onError={e => { e.target.src = '/assets/noimage.png'; }}
                    />
                  )}
                  <div className="font-semibold text-lg text-center mb-2 line-clamp-2">{rp.title}</div>
                  <div className="text-sm text-gray-400 text-center mb-2">
                    {rp.excerpt && rp.excerpt.length > 100
                      ? rp.excerpt.slice(0, 100).replace(/\s+\S*$/, '') + '...'
                      : rp.excerpt}
                  </div>
                </a>
              ))}
            </div>
            {hasMoreRelated && (
              <div className="flex justify-center">
                <button onClick={() => setRelatedPage(relatedPage + 1)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3">Załaduj więcej</button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default withNamespaces()(BlogDetail);
