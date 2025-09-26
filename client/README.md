✨ AI Destekli Blog Uygulaması (MERN + Google Gemini + ImageKit)

Modern bir blog uygulaması. Yapay zeka (Google Gemini) ile otomatik içerik üretme, ImageKit ile resim yükleme/optimizasyon ve MERN mimarisi ile tam yığın (full-stack) geliştirme. 🚀

🚩 Özellikler

✅ MERN Stack (MongoDB, Express, React, Node.js)

🤖 Yapay Zeka ile İçerik Üretimi (Google Gemini API üzerinden)

🖼 ImageKit Entegrasyonu (resim yükleme + otomatik optimizasyon)

💬 Yorum Yönetimi (Admin onaylı yorum sistemi)

🔒 JWT tabanlı Admin Girişi

📱 Responsive UI (TailwindCSS ile modern tasarım)

🛠 Kullanılan Teknolojiler
Katman	Teknolojiler / Araçlar
Backend	Node.js, Express, MongoDB, Mongoose
Yapay Zeka	Google Gemini (@google/genai)
Görseller	ImageKit API
Frontend	React (Vite), Context API, Tailwind CSS
Auth	JWT (JSON Web Token)

📦 Kurulum
1️⃣ Depoyu Klonla
git clone https://github.com/kullanici-adin/ai-blog-app.git
cd ai-blog-app

2️⃣ Backend Kurulumu
cd backend
npm install

.env dosyası oluştur ve şu değişkenleri ekle:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

Çalıştır:
npm run server

3️⃣ Frontend Kurulumu
cd frontend
npm install
npm run dev

📸 Ekran Görüntüleri

Admin Giriş
![WhatsApp Görsel 2025-09-26 saat 14 20 13_9c473447](https://github.com/user-attachments/assets/9129a313-185f-4e03-88a0-86dca7371b5c)

Blog ekleme/listeleme/yönetme
![WhatsApp Görsel 2025-09-26 saat 14 20 13_07fa35a0](https://github.com/user-attachments/assets/2be495b3-ac80-4e01-ba58-eb3879306626)
![WhatsApp Görsel 2025-09-26 saat 14 20 13_ee6119cd](https://github.com/user-attachments/assets/bd6fd092-7666-4319-89e7-3eaec4e2e589)

Yorumlar kısmı
![WhatsApp Görsel 2025-09-26 saat 14 20 13_a075c282](https://github.com/user-attachments/assets/4e443041-7543-47be-b884-c0a6af102ced)

Ana Sayfa
![WhatsApp Görsel 2025-09-26 saat 14 20 14_cdd85eb7](https://github.com/user-attachments/assets/0e0f79db-2df8-446e-a8b8-10839e1342a1)







