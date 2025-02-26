require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const cors = require("cors");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();  // ⬅️ NAJPIERW tworzysz aplikację Express
const PORT = process.env.PORT || 5000;

// 🛡️ Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// 🌩️ Konfiguracja Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🗂️ Konfiguracja Multer + Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 800, height: 600, crop: "limit" }],
  },
});
const upload = multer({ storage });

// ✅ ROUTE testowy — Render sprawdza ten endpoint!
app.get("/", (req, res) => {
  res.send("✅ Serwer działa! Sprawdź dostępne endpointy.");
});

// 📝 Tworzenie posta
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content) return res.status(400).json({ message: "❌ Brak tytułu lub treści" });

    const parsedTags = tags ? JSON.parse(tags) : [];
    const imageUrl = req.file ? req.file.path : null;
    const blog = new Blog({ title, content, image: imageUrl, tags: parsedTags });
    const savedBlog = await blog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Błąd tworzenia posta:", err);
    res.status(500).json({ message: "❌ Błąd serwera" });
  }
});
// 📄 Pobieranie wszystkich postów
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // Pobiera wszystkie posty, najnowsze pierwsze
    res.json(blogs);
  } catch (err) {
    console.error("❌ Błąd pobierania postów:", err);
    res.status(500).json({ message: "❌ Błąd serwera przy pobieraniu postów" });
  }
});

// 📄 Pobieranie posta
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });
    res.json(blog);
  } catch (err) {
    console.error("❌ Błąd pobierania posta:", err);
    res.status(500).json({ message: "❌ Błąd serwera" });
  }
});

// 🚀 Połączenie z MongoDB i uruchomienie serwera
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Połączono z MongoDB");
  app.listen(PORT, () => console.log(`🚀 Serwer działa na porcie ${PORT}`));  // ⬅️ Wymagane przez Render!
})
.catch((err) => console.error("❌ Błąd połączenia z MongoDB:", err));
