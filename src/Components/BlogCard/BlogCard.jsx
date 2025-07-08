import React, { useState, useEffect } from "react";
import axios from "axios";
import { withNamespaces } from 'react-i18next';

const BlogCard = ({ t, i18n }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        console.log("Dane pobrane:", response.data);
        setBlogs(response.data);
      } catch (err) {
        console.error("Błąd podczas pobierania blogów:", err);
        setError(t('blogLoadError'));
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [t]);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader-text">{t('loading')}</span>
          <span className="load"></span>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-400">{t('noPosts')} 🙁</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-bold">{i18n.language === 'en' ? (blog.titleEng || blog.title) : blog.title}</h3>
              <p>{i18n.language === 'en' ? (blog.contentEng || blog.content) : blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withNamespaces()(BlogCard);
