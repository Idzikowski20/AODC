import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import { Link } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams(); // id to teraz MongoDB _id
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); // Tytuł po polsku
  const [titleEng, setTitleEng] = useState(""); // Tytuł po angielsku
  const [content, setContent] = useState(""); // Treść po polsku
  const [contentEng, setContentEng] = useState(""); // Treść po angielsku
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Pobieranie danych istniejącego posta
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Używamy id do pobierania posta po id
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/id/${id}`);
        
        const { title, titleEng, content, contentEng, tags, image } = response.data;

        setTitle(title);
        setTitleEng(titleEng); // Pobieramy tytuł po angielsku
        setContent(content);
        setContentEng(contentEng); // Pobieramy treść po angielsku
        setTags(tags.join(", "));
        setImageFile(image); // Jeśli jest obrazek, ustawiamy go w stanie
      } catch (error) {
        console.error("❌ Błąd pobierania posta:", error);
        setMessage("❌ Nie udało się pobrać posta.");
      }
    };

    if (id) {
      fetchPost(); // Uruchamiamy pobieranie posta na podstawie id
    }
  }, [id]);

  // Obsługa zmian w edytorze TinyMCE
  const handleEditorChangePL = (newContent) => {
    setContent(newContent);
  };

  const handleEditorChangeEN = (newContent) => {
    setContentEng(newContent);
  };

  // Obsługa zmiany pliku
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 50 * 1024 * 1024) {
      alert("❌ Plik jest za duży. Maksymalny rozmiar to 50 MB.");
      return;
    }
    setImageFile(file);
  };

  // Aktualizacja posta
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !titleEng || !content || !contentEng) {
      setMessage("❌ Brak tytułu lub treści. Wypełnij wszystkie pola.");
      setLoading(false);
      return; // Jeśli brak tytułu lub treści, nie wysyłamy zapytania
    }

    try {
      const tagsArray = tags
        ? tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
        : [];

      const formData = new FormData();
      formData.append("title", title); // Tytuł po polsku
      formData.append("titleEng", titleEng); // Tytuł po angielsku
      formData.append("content", content);
      formData.append("contentEng", contentEng); // Treść po angielsku
      formData.append("tags", JSON.stringify(tagsArray));

      if (imageFile) {
        formData.append("image", imageFile); // Dodajemy plik obrazu
      }

      // Wysyłanie danych
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/id/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Post zaktualizowany pomyślnie!");
      setTimeout(() => navigate("/AdminPanel"), 2500); // Przekierowanie do panelu admina po 2.5 sek.
    } catch (error) {
      console.error("❌ Błąd aktualizacji posta:", error);
      setMessage(`❌ Wystąpił błąd: ${error.response?.data?.message || "Spróbuj ponownie"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header2 />
      <div className="jm-video-area">
        <div className="bluur"></div>
        <div className="bluur2"></div>
        <div className="container-fluid p-0">
          <div className="jm-projecting-wrap-blog bg-default">
            <div className="content">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-panel-container">
        <div className="admin-panel">
          <div className="edit-post-title">
            <div className="edit-post-back">
              <Link to="/AdminPanel">
                <img src="/assets/back.png" alt="back" />
              </Link>
            </div>
            <div>
              <h2>✏️ Edytuj post</h2>
            </div>
            <div className="edit-post-dot">.</div>
          </div>
          <form onSubmit={handleUpdate} className="admin-form">
            <div>
              <label className="admin-label">Tytuł (PL):</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-input"
                placeholder="Edytuj tytuł posta"
                required
              />
            </div>

            {/* Edytor dla polskiej wersji */}
            <div>
              <label className="admin-label">Treść (PL):</label>
              <Editor
                apiKey="2uiqexfbj40mkzjti964a0h0wv7a0sf4yewaihhzk1el9rk4"
                value={content}
                onEditorChange={handleEditorChangePL}
                init={{
                  width: "100%",
                  height: 400,
                  menubar: true,
                  plugins: "advlist autolink lists link image charmap preview",
                  toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            {/* Edytor dla angielskiej wersji */}
            <div>
              <label className="admin-label">Tytuł (EN):</label>
              <input
                type="text"
                value={titleEng}
                onChange={(e) => setTitleEng(e.target.value)} // Obsługuje zmianę tytułu po angielsku
                className="admin-input"
                placeholder="Enter the title in English"
                required
              />
            </div>

            <div>
              <label className="admin-label">Treść (EN):</label>
              <Editor
                apiKey="2uiqexfbj40mkzjti964a0h0wv7a0sf4yewaihhzk1el9rk4"
                value={contentEng}
                onEditorChange={handleEditorChangeEN}
                init={{
                  width: "100%",
                  height: 400,
                  menubar: true,
                  plugins: "advlist autolink lists link image charmap preview",
                  toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <div>
              <label className="admin-label">Nowy obrazek (jeśli chcesz zmienić):</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="admin-file-input"
              />
            </div>

            <div>
              <label className="admin-label">Tagi (oddzielone przecinkami):</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="admin-input"
                placeholder="np. technologia, blog, nowości"
              />
            </div>

            <button type="submit" disabled={loading} className="admin-button">
              {loading ? "Aktualizowanie..." : "Zaktualizuj post"}
            </button>
          </form>

          {message && (
            <p className={`admin-message ${message.includes("✅") ? "success" : "error"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default EditPost;
