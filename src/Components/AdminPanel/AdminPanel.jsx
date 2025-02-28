import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiBarChart2, FiSettings, FiMenu } from "react-icons/fi";
import { FaRegNewspaper, FaTrash, FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  console.log(import.meta.env.VITE_API_URL);


  // Pobieranie postów
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setPosts(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania postów:", err);
        setError("Nie udało się pobrać postów.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Usuwanie posta
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Czy na pewno chcesz usunąć ten post?");
    if (!confirmDelete) return;
  
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
      alert("✅ Post usunięty pomyślnie!");
    } catch (err) {
      console.error("❌ Błąd usuwania posta:", err);
      alert("❌ Nie udało się usunąć posta.");
    }
  };
  

  return (
    <div className="admin-container">
      {/* Główna zawartość */}
      <div className="admin-content">
        
        <header>
          <h1>Panel Administracyjny</h1>
        </header>
        
        <div className="tab-container">
        <input className="tab tab--1" id="tab1" name="tab" type="radio" />
        <label for="tab1" className="tab_label">Posty</label>

        <input className="tab tab--2" id="tab2" name="tab" type="radio" />
        <label for="tab2" className="tab_label">Ustawienia</label>

        <input className="tab tab--3" id="tab3" name="tab" type="radio" />
        <label for="tab3" className="tab_label">Wyloguj</label>

        <div className="indicator"></div>
        <div className="scroller"></div>
      </div>


        {/* Lista postów */}
        <div className="posts">
          <div className="posts-box">
          <h2>Wszystkie posty</h2>
          <Link to='/CreatePost'>
          <button class="cssbuttons-io-button">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
              </svg>
                <span>Dodaj post</span>
          </button>
          </Link>
          </div>
          {loading ? (
            <p>Ładowanie postów...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : posts.length === 0 ? (
            <p className="empty">Brak postów do wyświetlenia.</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post._id} className="post-item">
                  <div className="post-info">
                    <img
                      src={post.image || "/placeholder-image.jpg"}
                      alt={post.title}
                      className="post-thumbnail"
                      onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                    />
                    <span>{post.title}</span>
                  </div>
                  <div className="post-actions">
                    <Link to={`/AdminPanel/edit/${post._id}`} className="edit-btn">
                      <FaEdit /> Edytuj
                    </Link>
                    {/* <button className="button-delete" onClick={() => handleDelete(post._id)}>
                    <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                  </button> */}
                  <button className="delete" onClick={() => handleDelete(post._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> 
                </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
