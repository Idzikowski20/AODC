import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE
import Header2 from "../Header/Header2";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Content przechowuje tekst z edytora
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Funkcja do obsługi zmian w edytorze
  const handleEditorChange = (newContent) => {
    setContent(newContent);  // Zmieniamy stan content na nowy tekst z edytora
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
      formData.append("title", title);
      formData.append("content", content);  // Zmieniamy content na ten z edytora
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
              <Editor
                apiKey="2uiqexfbj40mkzjti964a0h0wv7a0sf4yewaihhzk1el9rk4"
                value={content}
                onEditorChange={handleEditorChange}  // Używamy handleEditorChange
                init={{
                  selector: 'textarea#basic-example',
                  width: "100%",
                  height: 500,
                  menubar: true,
                  autosave_ask_before_unload: true,
                  owerpaste_allow_local_images: true,
                  autosave_interval: '30s',
                  autosave_prefix: '{path}{query}-{id}-',
                  autosave_restore_when_empty: false,
                  contextmenu: 'link image table',
                  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
                  toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:21px }'
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
      </div>
    </>
  );
};

export default CreatePost;
