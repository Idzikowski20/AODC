import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';  // Używamy withNamespaces
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./Blog.css"; // Import pliku CSS

function Blog({ t, i18n }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funkcja do wybrania treści w zależności od języka
  const getContent = (post) => {
    return i18n.language === "en" ? post.contentEng || "No content available" : post.content || "Brak treści";
  };

  // Funkcja do wybrania tytułu w zależności od języka
  const getTitle = (post) => {
    return i18n.language === "en" ? post.titleEng || "No title" : post.title || "Brak tytułu";
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania blogów:", err.response?.data || err.message);
        setError("❌ Nie udało się pobrać postów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [i18n.language]); // Zależy od języka

  if (loading) return <div className="loading-blogs">⏳ {t('18')}</div>;
  if (error) return <div className="error-blogs">{error}</div>;
  if (blogs.length === 0) return <div className="empty-blogs">🙁 {t('19')}</div>;

  const featuredPost = blogs[0]; // Główny post
  const otherPosts = blogs.slice(1); // Pozostałe posty

  return (
    <>
      <Header2 />
      <div className="jm-video-area">
        <div className='bluur'></div>
        <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-projecting-wrap-blog bg-default">
            <div className='content'>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-header">
        <div className="blog-header-main-title">
          <span className="blog-main-title animate__animated animate__backInDown">{t('12')}</span>
        </div>
      </div>
      <div className="blog-container">
        <div className="main-content-container">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    {t('Header1')}
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="main-content">
            <div className="featured-post">
              <h1 className="post-title">{getTitle(featuredPost)}</h1> {/* Zmieniony tytuł */}
              <div className="post-info">
                <span>📅 {t('13')} {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
              </div>
              {featuredPost.image && (
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="post-image"
                  onError={(e) => (e.target.src = "/assets/noimage.png")}
                />
              )}
              <div className="mt-4 text-center">
                <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: getContent(featuredPost).substring(0, 350) + "..." }}></p>
                <Link to={`/blog/${encodeURIComponent(featuredPost.title.replace(/\s+/g, '-'))}`} className="learn-more inline-block">
                  <button className="button-blog">
                    {t('14')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Inne wpisy */}
        <aside className="sidebar">
          <h2 className="sidebar-title">📢 {t('15')}</h2>
          <div className="post-list">
            {otherPosts.map((post) => (
              // Linki z tytułami w URL
            <Link 
              key={post._id} 
              to={`/blog/${encodeURIComponent(post.title.replace(/\s+/g, '-'))}`} 
              className="post-item"
            >
              <img
                src={post.image || "/assets/noimage.png"}
                alt={post.title}
                className="post-thumbnail"
              />
              <div className="sidebar-posts-details">
                <h3 className="post-item-title">{getTitle(post)}</h3>
                <span className="post-date">📅 {new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>

            ))}
          </div>
        </aside>
      </div>
      <Footer2 />
    </>
  );
}

export default withNamespaces()(Blog);
