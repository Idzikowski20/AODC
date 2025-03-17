import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./Blog.css"; // Import pliku CSS

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [rating, setRating] = useState(0);

const handleRating = (value) => {
  setRating(value);
  alert(`Dziękujemy za ocenę ${value} ⭐!`);
};

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("❌ Błąd pobierania blogów:", err.response?.data || err.message);
        setError("Nie udało się pobrać blogów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="loading-blogs">⏳ Ładowanie postów...</div>;
  if (error) return <div className="error-blogs">{error}</div>;
  if (blogs.length === 0) return <div className="empty-blogs">🙁 Brak postów do wyświetlenia</div>;

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
            <span className="blog-main-title">Zobacz nasze najnowsze wpisy o technologii, data centers i innowacjach.</span>
            <div className="blog-meta">
              <span></span>
            </div>
        </div>
      </div>


      <div className="blog-container">
        <div className="main-content-container">
          <div>
              <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                      <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                      </svg>
                      Strona główna
                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                      <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Blog</a>
                    </div>
                  </li>
                </ol>
               </nav>
          </div>
          <div className="main-content">
          <div className="featured-post">
            <h1 className="post-title">{featuredPost.title}</h1>
            <div className="post-info">
              <span>🖊 Autor: {featuredPost.author || "AODC"}</span>
              <span>📅Publikacja: {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
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
            <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: featuredPost.content.slice(0, 200) + "..." }}></p>
          <Link to={`/blog/${featuredPost._id}`} className="learn-more inline-block">
            <button className="button-blog">
        Czytaj więcej
        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
          <path
            clip-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            fill-rule="evenodd"
          ></path>
        </svg>
            </button>
            </Link>
          </div>
                    {/* 📌 Wyróżniony wpis */}
                    {featuredPost.tags?.length > 0 && (
            <div className="tags-con flex flex-wrap gap-2">
              {featuredPost.tags.map((tag, i) => (
                <span key={i} className="tags text-white text-sm">#{tag}</span>
              ))}
            </div>
          )}
          </div>
        </div>
        </div>
        

        {/* 📌 Inne wpisy */}
        <aside className="sidebar">
          <h2 className="sidebar-title">📢 Najnowsze posty</h2>
          <div className="post-list">
            {otherPosts.map((post) => (
              <Link key={post._id} to={`/blog/${post._id}`} className="post-item">
                <img
                  src={post.image || "/assets/noimage.png"}
                  alt={post.title}
                  className="post-thumbnail"
                  onError={(e) => (e.target.src = "/assets/noimage.png")}
                />
                <div className="sidebar-posts-details">
                  <h3 className="post-item-title">{post.title}</h3>
                  <span className="post-date">🖊 {featuredPost.author || "AODC"}</span>
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
};

export default Blog;
