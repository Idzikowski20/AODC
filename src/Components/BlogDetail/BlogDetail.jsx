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
import { withNamespaces } from 'react-i18next';

function BlogDetail({ t, i18n }) {
  const { id } = useParams(); // Tutaj id to tytuł posta
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Pobieranie szczegółów posta
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/title/${encodeURIComponent(id.replace(/\s+/g, '-'))}`);
        setBlog(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania posta:", err?.response?.data || err.message);
        setError("❌ Nie udało się pobrać posta. Sprawdź tytuł lub spróbuj później.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
    else {
      setError("❌ Nieprawidłowy format tytułu.");
      setLoading(false);
    }
  }, [id]);

  // Funkcja do wybrania treści w zależności od języka
  const getContent = (blog) => {
    return i18n.language === "en" ? blog.contentEng || "No content available" : blog.content || "Brak treści";
  };

  // Funkcja do wybrania tytułu w zależności od języka
  const getTitle = (blog) => {
    return i18n.language === "en" ? blog.titleEng || "No title" : blog.title || "Brak tytułu";
  };

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

  if (loading) return <div className="loading-blogs">
  ⏳{t('16')}
  <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" class="pencil">
<defs>
  <clipPath id="pencil-eraser">
    <rect height="30" width="30" ry="5" rx="5"></rect>
  </clipPath>
</defs>
<circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" class="pencil__stroke"></circle>
<g transform="translate(100,100)" class="pencil__rotate">
  <g fill="none">
    <circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" class="pencil__body1"></circle>
    <circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" class="pencil__body2"></circle>
    <circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" class="pencil__body3"></circle>
  </g>
  <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
    <g class="pencil__eraser-skew">
      <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
      <rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
      <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
      <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
      <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
      <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
      <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
    </g>
  </g>
  <g transform="rotate(-90) translate(49,-30)" class="pencil__point">
    <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
    <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
    <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
  </g>
</g>
</svg>
  </div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!blog) return <div className="text-center text-gray-400">🙁 Post nie istnieje</div>;

  return (
    <>
      {/* Dynamiczne ustawienie meta title */}
      <Helmet>
        <title>{getTitle(blog) ? `${getTitle(blog)} | AODC Blog` : "AODC Blog"}</title> {/* Zmieniony tytuł */}
        <meta name="description" content={getContent(blog) ? getContent(blog).substring(0, 150) + "..." : "Artykuł na blogu AODC"} />
      </Helmet>

      <Header2 />
      <div className="bluur"></div>
      <div className="bluur2"></div>

      {/* Nagłówek z dużym obrazem */}
      <div className="blog-header">
        <div className="blog-header-title">
            <h1 className="blog-title animate__animated animate__backInDown">{getTitle(blog)}</h1> {/* Zmieniony tytuł */}
            <div className="blog-meta">
              <span>📅 {t('13')}  {new Date(blog.createdAt).toLocaleDateString()}</span>
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
                      {t('Header1')}
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
          <p dangerouslySetInnerHTML={{ __html: getContent(blog) }}></p>
        </div>
        </div>

        <aside className="sidebar">
  <h2 className="sidebar-title">{t('17')}</h2>
  <div className="post-list">
    {blogs
      .filter((item) => item._id !== blog._id) // Filtrujemy, aby nie pokazać bieżącego wpisu
      .map((item) => (
        <Link key={item._id} to={`/blog/${encodeURIComponent(item.title.replace(/\s+/g, '-'))}`} className="post-item">
          <img
            src={item.image || "/assets/noimage.png"}
            alt={item.title}
            className="post-thumbnail"
            onError={(e) => (e.target.src = "/assets/noimage.png")}
          />
          <div className="sidebar-posts-details">
          <h3 className="post-item-title">{getTitle(item)}</h3> {/* Zmieniony tytuł */}
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

export default withNamespaces()(BlogDetail);
