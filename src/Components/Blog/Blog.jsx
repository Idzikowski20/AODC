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

  if (loading) return <div className="loading">⏳ Ładowanie postów...</div>;
  if (error) return <div className="error">{error}</div>;
  if (blogs.length === 0) return <div className="empty">🙁 Brak postów do wyświetlenia</div>;

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
          <div className="blog-title p-6 text-center max-w-6xl mx-auto mb-6">
  <p className="text-gray-300 mt-2">
    Zobacz nasze najnowsze wpisy o technologii, data centers i innowacjach.
  </p>
</div>

      <div className="blog-container">
        <div className="main-content">
          {/* 📌 Wyróżniony wpis */}
          {featuredPost.tags?.length > 0 && (
            <div className="tags-con flex flex-wrap gap-2">
              {featuredPost.tags.map((tag, i) => (
                <span key={i} className="tags text-white text-sm">{tag}</span>
              ))}
            </div>
          )}
          <div className="featured-post">
            <h1 className="post-title">{featuredPost.title}</h1>
            <div className="post-info">
              <span>🖊 Autor: {featuredPost.author || "AODC"}</span>
              <span>📅 {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
            </div>
            {featuredPost.image && (
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="post-image"
                onError={(e) => (e.target.src = "/placeholder-image.jpg")}
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
          </div>
        </div>
        

        {/* 📌 Inne wpisy */}
        <aside className="sidebar">
          <h2 className="sidebar-title">📢 Najnowsze posty</h2>
          <div className="post-list">
            {otherPosts.map((post) => (
              <Link key={post._id} to={`/blog/${post._id}`} className="post-item">
                <img
                  src={post.image || "/placeholder-image.jpg"}
                  alt={post.title}
                  className="post-thumbnail"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />
                <div>
                  <h3 className="post-item-title">{post.title}</h3>
                  <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
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
