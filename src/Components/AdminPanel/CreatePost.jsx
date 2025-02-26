import React, { useState } from "react";
import axios from "axios";
import { color } from "framer-motion";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null); // ⬅️ Plik obrazu
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

      console.log("➡️ Wysyłane dane:", { title, content, tagsArray, imageFile });

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("tags", JSON.stringify(tagsArray)); // ✅ Stringify tags
      if (imageFile) formData.append("image", imageFile); // ✅ Plik z nazwą "image"

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, formData, {
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
    <div className="admin-panel max-w-2xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">📝 Utwórz nowy post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-black  text-white"
            placeholder="Wprowadź tytuł posta"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Treść:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 rounded bg-black text-white h-40 resize-none"
            placeholder="Wprowadź treść posta"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Obrazek (plik):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-2 rounded bg-black text-white"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Tagi (oddzielone przecinkami):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 rounded bg-black text-white"
            placeholder="np. technologia, blog, nowości"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg font-semibold transition ${
            loading ? "bg-black cursor-not-allowed" : "bg-black hover:bg-secondary-dark"
          }`}
        >
          {loading ? "Tworzenie..." : "Utwórz post"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-lg font-semibold">{message}</p>}
    </div>
  );
};

export default CreatePost;
