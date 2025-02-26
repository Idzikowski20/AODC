import React, { useState, useEffect } from "react";
import axios from "axios";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Funkcja do przycinania tekstu
const truncateText = (text, maxLength = 150) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const ProjectCard = ({ name, description, tags, image, source_code_link }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="background-dark blog-post">
    <div className="relative w-full h-[270px]">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-[270px] object-cover rounded-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400 rounded-2xl">
          Brak obrazka
        </div>
      )}
    </div>
      <div className="blog-box">
          <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] text-center">{name || "Bez tytułu"}</h3>
          <p className="mt-2 text-gray-300 text-[14px] text-center">{truncateText(description || "Brak opisu dla tego posta.")}</p>
        </div>

      </div>


    <div className="mt-4 text-center">
      <Link to={source_code_link} className="learn-more inline-block">
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

    {tags?.length > 0 && (
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <p key={i} className="text-[13px] text-gray-400">#{tag}</p>
        ))}
      </div>
    )}
  </Tilt>
);

const Works = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("❌ Błąd podczas pobierania blogów:", err);
        setError("Nie udało się pobrać blogów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loader flex-center">
        <span className="loader-text">⏳ Ładowanie postów...</span>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (blogs.length === 0) {
    return <div className="text-center text-gray-400">🙁 Brak postów do wyświetlenia</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="news" className="px-4">
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>📰 Blog informacyjny</h2>
      <Slider {...sliderSettings} className="blog-slider">
        {blogs.map((blog, index) => (
          <div key={`project-${index}`} className="px-2">
            <ProjectCard
              name={blog.title}
              description={blog.content}
              tags={blog.tags || []}
              image={blog.image}
              source_code_link={`/blog/${blog._id}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SectionWrapper(Works, "");
