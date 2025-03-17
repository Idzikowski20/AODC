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
        <div className="blog-content-container">
        <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li class="inline-flex items-center">
                    <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                      <a href="/Blog" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Blog</a>
                    </div>
                  </li>
                </ol>
               </nav>
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
          <img className="blog-detail-image" src={blog.image || "/assets/noimage.png"} alt={blog.title} />
          <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>
        </div>

        <aside className="sidebar">
  <h2 className="sidebar-title">Inne wpisy</h2>
  <div className="post-list">
    {blogs
      .filter((item) => item._id !== id) // Filtrujemy, aby nie pokazać bieżącego wpisu
      .map((item) => (
        <Link key={item._id} to={`/blog/${item._id}`} className="post-item">
          <img
            src={item.image || "/assets/noimage.png"}
            alt={item.title}
            className="post-thumbnail"
            onError={(e) => (e.target.src = "/assets/noimage.png")}
          />
          <div className="sidebar-posts-details">
            <h3 className="post-item-title">{item.title}</h3>
            <span className="post-date">🖊 {item.author || "AODC"}</span>
            <span className="post-date">📅 {new Date(item.createdAt).toLocaleDateString()}</span>
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
