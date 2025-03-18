import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import "./Blog.css"; // Import pliku CSS
import { withNamespaces } from 'react-i18next';

function blog ({ t }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                      {t('Header1')}
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
              <span>📅{t('13')} {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
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
            {t('14')}
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
          <h2 className="sidebar-title">📢 {t('15')}</h2>
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

export default withNamespaces()(blog);
