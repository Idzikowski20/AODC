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

// Funkcja do generowania sluga z tytułu
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

function BlogDetail ({ t }) {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Pobieranie wszystkich blogów i znajdowanie konkretnego posta
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("🔍 Próba pobrania blogów...");
        const response = await axios.get(`https://blog-backend-aodc.vercel.app/api/blogs`, {
          timeout: 10000, // 10 sekund timeout
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        console.log("✅ Odpowiedź z API:", response.data);
        
        if (response.data && Array.isArray(response.data)) {
          // Ustaw wszystkie blogi dla sidebara
          setBlogs(response.data);
          
          // Znajdź post o konkretnym slug
          if (slug) {
            const foundBlog = response.data.find(blog => {
              const postSlug = blog.slug || generateSlug(blog.title);
              return postSlug === slug;
            });
            if (foundBlog) {
              setBlog(foundBlog);
            } else {
              setError("❌ Post o podanym adresie nie istnieje.");
            }
          }
        } else {
          setError("❌ Nieprawidłowy format danych z API.");
        }
      } catch (err) {
        console.error("❌ Błąd pobierania blogów:", err);
        console.error("❌ Status:", err?.response?.status);
        console.error("❌ Data:", err?.response?.data);
        console.error("❌ URL:", `https://blog-backend-aodc.vercel.app/api/blogs`);
        
        if (err.code === 'ECONNABORTED') {
          setError("❌ Przekroczono limit czasu połączenia. Sprawdź połączenie internetowe.");
        } else if (err.response?.status === 404) {
          setError("❌ Endpoint API nie istnieje.");
        } else if (err.response?.status === 500) {
          setError("❌ Błąd serwera. Spróbuj ponownie później.");
        } else {
          setError(`❌ Nie udało się pobrać blogów. Status: ${err?.response?.status || 'Brak odpowiedzi'}`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogs();
    } else {
      setError("❌ Brak adresu posta.");
      setLoading(false);
    }
  }, [slug]);

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
        <title>{blog.title ? `${blog.title} | AODC Blog` : "AODC Blog"}</title>
        <meta name="description" content={blog.content ? blog.content.substring(0, 150) + "..." : "Artykuł na blogu AODC"} />
      </Helmet>

      {/* Główny kontener artykułu */}
      <div className="blog-detail-container">
        {/* Duży obraz na górze */}
        <div className="blog-hero-image mt-10">
          <img 
            src={blog.image || "/assets/noimage.png"} 
            alt={blog.title}
            onError={(e) => (e.target.src = "/assets/noimage.png")}
          />
          
          {/* Metadane na obrazie */}
          <div className="blog-hero-meta">
            <div className="blog-meta-details">
              <span>Opublikowano {new Date(blog.createdAt).toLocaleDateString('pl-PL', { month: 'long', day: 'numeric', year: 'numeric' })} Przez AODC</span>
            </div>
          </div>
        </div>

        {/* Treść artykułu */}
        <div className="blog-article-content">
          <div className="blog-article-header">
            <h1 className="blog-article-title">{blog.title}</h1>
          </div>

          <div className="blog-article-body">
            <div className="blog-article-text" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default withNamespaces()(BlogDetail);
