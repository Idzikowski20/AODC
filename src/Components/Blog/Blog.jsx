import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./Blog.css"; // Import pliku CSS
import { withNamespaces } from 'react-i18next';

// Funkcja do generowania sluga z tytułu
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize('NFD') // Usuń znaki diakrytyczne
    .replace(/[\u0300-\u036f]/g, '') // Usuń znaki akcentów
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    .replace(/[^a-z0-9]+/g, '-') // Zamień znaki specjalne na myślnik
    .replace(/^-+|-+$/g, ''); // Usuń myślniki na początku i końcu
};

function blog ({ t }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://blog-backend-aodc.vercel.app/api/blogs`);
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

  if (loading) return <div className="loading-blogs">
    ⏳ Ładowanie postów...
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
  if (error) return <div className="error-blogs">{error}</div>;
  if (blogs.length === 0) return <div className="empty-blogs">🙁 Brak postów do wyświetlenia</div>;

  return (
    <>
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
            <div className="blog-meta">
              <span></span>
            </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="breadcrumb-container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  {t('Header1')}
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Blog</a>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* 📌 Siatka kart blogów */}
        <div className="blog-grid">
          {blogs.map((post) => {
            const slug = post.slug || generateSlug(post.title);
            return (
            <Link key={post._id} to={`/blog/${slug}`} className="blog-card">
              <div className="blog-card-image">
                <img
                  src={post.image || "/assets/noimage.png"}
                  alt={post.title}
                  onError={(e) => (e.target.src = "/assets/noimage.png")}
                />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-author">
                  <div className="author-avatar"></div>
                  <span>Opublikowano przez AODC</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <span className="post-date">{new Date(post.createdAt).toLocaleDateString('pl-PL', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="blog-card-action">
                  <span>Czytaj więcej &gt;</span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(blog);
