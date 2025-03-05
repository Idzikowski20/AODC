import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./BlogDetail.css";
import { FaHome, FaEdit } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // Sprawdzanie statusu zalogowania użytkownika przez Firebase Auth
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Jeśli user istnieje, oznacza to, że jest zalogowany
    });

    return () => unsubscribe(); // Cleanup funkcji
  }, []);

  // Funkcja udostępniania
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.content ? blog.content.substring(0, 150) + "..." : "Artykuł na blogu AODC",
        url: window.location.href,
      })
      .then(() => console.log('Udostępniono!'))
      .catch((error) => console.log('Błąd przy udostępnianiu', error));
    } else {
      alert('Udostępnianie nie jest obsługiwane przez tę przeglądarkę');
    }
  };

  if (loading) return <div className="text-center text-white">⏳ Ładowanie...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!blog) return <div className="text-center text-gray-400">🙁 Post nie istnieje</div>;

  return (
    <>
      {/* Dynamiczne ustawienie meta title */}
      <Helmet>
        <title>{blog.title ? `${blog.title} | AODC Blog` : "AODC Blog"}</title>
        <meta name="description" content={blog.content ? blog.content.substring(0, 150) + "..." : "Artykuł na blogu AODC"} />
      </Helmet>

      <Header2 />
      <div className="bluur"></div>
      <div className="bluur2"></div>

      {/* Nagłówek z dużym obrazem */}
      <div className="blog-header">
        <div className="blog-header-title">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              <span>✍Autor:  {blog.author || "AODC"}</span>
              <span>📅Opublikowano:  {new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
      </div>

      {/* Główna treść + Sidebar */}
      <div className="blog-detail">
        <div className="blog-content">
          <div className="blog-content-buttons-con">
              <div className="edit-post-back">
                  <Link to="/Blog">
                    <img src="/assets/back.png" alt="back"/>
                  </Link>
              </div>
              
              {/* Wyświetlanie przycisków tylko dla zalogowanych użytkowników */}
              {isAuthenticated && (
                <div className="blog-content-adminbuttons">
                    <Link to={`/AdminPanel/edit/${blog._id}`} className="edit-btn">
                      <FaEdit /> Edytuj
                   </Link>
                    <Link to={`/AdminPanel`} className="edit-btn">
                    <FaHome /> Panel
                   </Link>
                </div>
              )}

              {/* Ikona udostępniania */}
              <div className="share-button">
                <button onClick={handleShare}>
                  <FaShareAlt /> 
                </button>
              </div>
          </div>
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
