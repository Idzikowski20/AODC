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
      {/* Sidebar Dashboard */}
      <div className={`sidebar-dashboard ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/admin">
              <FiHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/posts">
              <FaRegNewspaper /> Posty
            </Link>
          </li>
          <li>
            <Link to="/admin/stats">
              <FiBarChart2 /> Statystyki
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <FiUsers /> Użytkownicy
            </Link>
          </li>
          <li>
            <Link to="/admin/settings">
              <FiSettings /> Ustawienia
            </Link>
          </li>
        </ul>
      </div>

      {/* Główna zawartość */}
      <div className="content">
        <header>
          <button className="menu-btn" onClick={toggleSidebar}>
            <FiMenu />
          </button>
          <h1>Panel Administracyjny</h1>
        </header>

        {/* Lista postów */}
        <div className="posts">
          <h2>Wszystkie posty</h2>

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
                    <Link to={`/admin/edit/${post._id}`} className="edit-btn">
                      <FaEdit /> Edytuj
                    </Link>
                    <button className="delete-btn" onClick={() => handleDelete(post._id)}>
                      <FaTrash /> Usuń
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
