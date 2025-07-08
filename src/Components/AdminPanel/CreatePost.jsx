import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE
import { Link } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState(""); // Tytuł po polsku
  const [titleEng, setTitleEng] = useState(""); // Tytuł po angielsku
  const [content, setContent] = useState(""); // Treść po polsku
  const [contentEng, setContentEng] = useState(""); // Treść po angielsku
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Funkcje do obsługi edytorów
  const handleEditorChangePL = (newContent) => {
    setContent(newContent); // Ustawia treść polską
  };

  const handleEditorChangeEN = (newContent) => {
    setContentEng(newContent); // Ustawia treść angielską
  };

  // Funkcja obsługująca zmianę tytułu po angielsku
  const handleTitleEngChange = (e) => {
    setTitleEng(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const tagsArray = tags
        ? tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
        : [];

      const formData = new FormData();
      formData.append("title", title); // Tytuł po polsku
      formData.append("titleEng", titleEng); // Tytuł po angielsku
      formData.append("content", content);
      formData.append("contentEng", contentEng); // 📌 WAŻNE!
      formData.append("tags", JSON.stringify(tagsArray));
      if (imageFile) formData.append("image", imageFile);

      console.log("📤 Wysyłane dane:", Object.fromEntries(formData)); // LOGUJEMY PRZED WYSŁANIEM

      await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Post utworzony pomyślnie!");
      setTitle("");
      setTitleEng(""); // Resetujemy tytuł angielski
      setContent("");
      setContentEng(""); // RESETUJEMY
      setImageFile(null);
      setTags("");
    } catch (error) {
      console.error("❌ Błąd tworzenia posta:", error.response?.data || error.message);
      setMessage(`❌ Wystąpił błąd: ${error.response?.data?.message || "Spróbuj ponownie"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              <h2>📝 Utwórz nowy post</h2>
            </div>
            <div className="edit-post-dot">.</div>
          </div>
          <form onSubmit={handleSubmit} className="admin-form">
            <div>
              <label className="admin-label">Tytuł (PL):</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-input"
                placeholder="Wprowadź tytuł posta"
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
                onChange={handleTitleEngChange} // Obsługuje zmianę tytułu po angielsku
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
              <label className="admin-label">Obrazek (plik):</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
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
              {loading ? "Tworzenie..." : "Utwórz post"}
            </button>
          </form>

          {message && (
            <p className={`admin-message ${message.includes("✅") ? "success" : "error"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
