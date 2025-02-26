import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const tagsArray = tags
        ? tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
        : [];

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("tags", JSON.stringify(tagsArray));
      if (imageFile) formData.append("image", imageFile);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Post utworzony pomyślnie!");
      setTitle("");
      setContent("");
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
    <div className="admin-panel">
      <h2>📝 Utwórz nowy post</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div>
          <label className="admin-label">Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="admin-input"
            placeholder="Wprowadź tytuł posta"
            required
          />
        </div>

        <div>
          <label className="admin-label">Treść:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="admin-textarea"
            placeholder="Wprowadź treść posta"
            required
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

        <button
          type="submit"
          disabled={loading}
          className="admin-button"
        >
          {loading ? "Tworzenie..." : "Utwórz post"}
        </button>
      </form>

      {message && (
        <p className={`admin-message ${message.includes("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CreatePost;
