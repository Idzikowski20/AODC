import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pobieranie szczegółów posta
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania posta:", err?.response?.data || err.message);
        setError("❌ Nie udało się pobrać posta. Sprawdź ID lub spróbuj później.");
      } finally {
        setLoading(false);
      }
    };

    if (id && id.length === 24) fetchBlog();
    else {
      setError("❌ Nieprawidłowy format ID.");
      setLoading(false);
    }
  }, [id]);

  // Pobranie listy wszystkich blogów
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania listy blogów:", err);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center text-white">⏳ Ładowanie...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!blog) return <div className="text-center text-gray-400">🙁 Post nie istnieje</div>;

  return (
    <>
      <Header2 />
      <div className="bluur"></div>
      <div className="bluur2"></div>
      {/* Nagłówek z dużym obrazem */}
      <div className="blog-header" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="blog-header-title">
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-subtitle">Ekskluzywne spojrzenie na temat</p>
            <div className="blog-meta">
              <span>✍ {blog.author || "AODC"}</span>
              <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
        </div>

      </div>

      {/* Główna treść + Sidebar */}
      <div className="blog-detail">
        <div className="blog-content">
          <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>

        <aside className="sidebar">
          <h2>Inne wpisy</h2>
          <div className="sidebar-posts">
            {blogs
              .filter((item) => item._id !== id)
              .map((item) => (
                <Link key={item._id} to={`/blog/${item._id}`} className="sidebar-post">
                  <img src={item.image || "/placeholder-image.jpg"} alt={item.title} />
                  <div>
                    <h3 className="sidebar-post-title">{item.title}</h3>
                    <span className="sidebar-post-date">{new Date(item.createdAt).toLocaleDateString()}</span>
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

export default BlogDetail;
