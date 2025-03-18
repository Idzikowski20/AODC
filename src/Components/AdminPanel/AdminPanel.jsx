import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; 
import { auth } from "../../config/firebaseConfig";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import "./AdminPanel.css";
import { AiOutlineUserDelete } from "react-icons/ai";

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Stan dla wyszukiwania
  const [visiblePosts, setVisiblePosts] = useState(2); // Liczba widocznych postów
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const navigate = useNavigate();

  // Pobieranie postów
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        setPosts(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania postów:", err);
        setError("Nie udało się pobrać postów.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [API_URL]);

  // Obsługa wylogowania
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/Login"); 
    } catch (error) {
      console.error("❌ Błąd podczas wylogowywania:", error);
    }
  };

  // Obsługa usuwania posta
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Czy na pewno chcesz usunąć ten post?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/api/blogs/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
      alert("✅ Post usunięty pomyślnie!");
    } catch (err) {
      console.error("❌ Błąd usuwania posta:", err);
      alert("❌ Nie udało się usunąć posta.");
    }
  };

  // Funkcja filtrowania postów na podstawie wyszukiwanego tekstu
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Funkcja do wyświetlania kolejnych postów
  const loadMorePosts = () => {
    setLoading(true); // Ustawienie stanu ładowania
    setTimeout(() => {
      setVisiblePosts(visiblePosts + 5); // Dodanie 5 postów
      setLoading(false); // Zakończenie ładowania
    }, 1000); // Czas ładowania (1s)
  };

  return (
    <div className="admin-container">
      <div className="bluur"></div>
      <div className="bluur2"></div>
      <div className="admin-content">
        <header>
          <h1 className="admin-panel-title">Panel Administracyjny</h1>
        </header>

        <div className="admin-panel-buttons-con">
          <div>
            <button className="admin-panel-buttons" onClick={handleLogout}>
              <AiOutlineUserDelete /> Wyloguj
            </button>
          </div>
        </div>

        <div className="posts">
          <div className="posts-box">
            <h2>Wszystkie posty</h2>
            <Link to='/CreatePost'>
              <button className="cssbuttons-io-button-admin">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                </svg>
                <span>Dodaj post</span>
              </button>
            </Link>
          </div>

          {/* Pole wyszukiwania */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Wyszukaj posty..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Ustawienie wartości wyszukiwania
            />
          </div>

          {loading ? (
            <p>Ładowanie postów...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : filteredPosts.length === 0 ? (
            <p className="empty">Brak postów do wyświetlenia.</p>
          ) : (
            <ul>
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <li key={post._id} className="admin-post-item">
                  <div className="post-info">
                    <img
                      src={post.image || "/assets/noimage.png"}
                      alt={post.title}
                      className="post-thumbnail"
                      onError={(e) => (e.target.src = "/assets/noimage.png")}
                    />
                    <span>{post.title}</span>
                  </div>
                  <div className="post-actions">
                    <Link to={`/Blog/${post._id}`} className="edit-btn">
                      <img src="/assets/see.png" alt="see post"/>
                    </Link>
                    <Link to={`/AdminPanel/edit/${post._id}`} className="edit-btn">
                      <FaEdit />
                    </Link>
                    <button className="delete" onClick={() => handleDelete(post._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                        <path 
                          fill="#6361D9" 
                          clipRule="evenodd" 
                          fillRule="evenodd" 
                          d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638Z"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Przycisk do ładowania więcej postów */}
          {filteredPosts.length > visiblePosts && (
            <button className="load-more" onClick={loadMorePosts}>
              {loading ? "Ładowanie postów..." : "Pokaż więcej postów"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
