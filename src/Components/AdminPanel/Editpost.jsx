import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/Footer2";
import { Link } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Pobieranie danych istniejącego posta
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        const { title, content, tags } = response.data;

        setTitle(title);
        setContent(content);
        setTags(tags.join(", ")); // Łączenie tagów w string
      } catch (error) {
        console.error("❌ Błąd pobierania posta:", error);
        setMessage("❌ Nie udało się pobrać posta.");
      }
    };

    fetchPost();
  }, [id]);

  // Obsługa zmian w edytorze TinyMCE
  const handleEditorChange = (newContent) => {
    setContent(newContent);
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

    if (!title || !content) {
      setMessage("❌ Brak tytułu lub treści. Wypełnij wszystkie pola.");
      setLoading(false);
      return; // Jeśli brak tytułu lub treści, nie wysyłamy zapytania
    }

    try {
      const tagsArray = tags
        ? tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
        : [];

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("tags", JSON.stringify(tagsArray));

      if (imageFile) {
        formData.append("image", imageFile); // Dodajemy plik obrazu
      }

      // Wysyłanie danych
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, formData, {
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
              <label className="admin-label">Tytuł:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-input"
                placeholder="Edytuj tytuł posta"
                required
              />
            </div>

            <div>
              <label className="admin-label">Treść:</label>
              <Editor
                apiKey="2uiqexfbj40mkzjti964a0h0wv7a0sf4yewaihhzk1el9rk4"
                value={content}
                onEditorChange={handleEditorChange}
                init={{
                  selector: 'textarea#basic-example',
                  width: "100%",
                  height: 500,
                  menubar: true,
                  autosave_ask_before_unload: true,
                  autosave_interval: '30s',
                  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                  toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | removeformat | code fullscreen preview",
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:21px }'
                }}
              />
              <div className="zalecenia-con">
              </div>
              <p>Pierwszy akapit nie powinien być większy niż 15px.</p>
            </div>

            <div>
              <label className="admin-label">Nowy obrazek (jeśli chcesz zmienić):</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="admin-file-input"
              />
              <p>Maksymalny rozmiar to 50MB</p>
              <p>Dopuszczalne formy: PNG,JPEG,JPG,WEBP</p>
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
