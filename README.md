# BlogApp

# ✨ AI Destekli Blog Uygulaması (MERN + Google Gemini + ImageKit)

> Modern bir blog uygulaması. Yapay zeka (Google Gemini) ile otomatik içerik üretme, ImageKit ile resim yükleme/optimizasyon ve MERN mimarisiyle tam yığın (full-stack) geliştirme.


## 🚀 Özellikler
- ✅ **MERN Stack (MongoDB, Express, React, Node.js)**
- 🤖 **Yapay Zeka ile İçerik Üretimi** (Google Gemini API üzerinden)
- 🖼️ **ImageKit Entegrasyonu** (resim yükleme + otomatik optimizasyon)
- 💬 **Yorum Yönetimi** (Admin onaylı yorum sistemi)
- 🔒 **JWT tabanlı Admin Girişi**
- 📱 **Responsive UI** (TailwindCSS ile modern tasarım)

---

## 🛠️ Kullanılan Teknolojiler

| Katman        | Teknolojiler / Araçlar                     |
|---------------|---------------------------------------------|
| **Backend**   | Node.js, Express, MongoDB, Mongoose         |
| **Yapay Zeka**| Google Gemini (`@google/genai`)             |
| **Görseller** | ImageKit API                                |
| **Frontend**  | React (Vite), Context API, Tailwind CSS     |
| **Auth**      | JWT (JSON Web Token)                        |

---

## 📸 Ekran Görüntüleri

### 🔑 Admin Girişi
<img width="488" height="478" alt="adminlogin" src="https://github.com/user-attachments/assets/69378847-b766-4925-8dc6-2d23f22eaafc" />

### 🔑 Admin Dashboard
<img width="938" height="723" alt="Ekran görüntüsü 2025-09-08 131946" src="https://github.com/user-attachments/assets/28fa1cfc-ef76-42e6-9fc5-626fceb027bd" />

### 📝 Yeni Blog Ekleme/Generate with Ai
<img width="915" height="782" alt="image" src="https://github.com/user-attachments/assets/078a0985-9520-43c9-92f7-f98bf9ee6aab" />

### 📚 Blog Listesi
<img width="907" height="405" alt="image" src="https://github.com/user-attachments/assets/9febcc52-2fca-4fb3-9396-aa8ef5d404e8" />


### 💬 Yorum Yönetimi
<img width="872" height="347" alt="image" src="https://github.com/user-attachments/assets/92e26dba-c5bb-4173-9532-aed99560f70d" />

### 💬 Yorum Ekleme
<img width="868" height="620" alt="Ekran görüntüsü 2025-09-08 132413" src="https://github.com/user-attachments/assets/472da3de-6569-47d9-96c8-a7b034de992c" />

### 📚 Ana Sayfa
<img width="1714" height="798" alt="image" src="https://github.com/user-attachments/assets/17c84e89-172b-46d5-b405-91dedf7fe347" />


## ⚙️ Kurulum ve Çalıştırma

### 1️⃣ Gereksinimler
- Node.js (v18 veya üstü)
- MongoDB (lokal veya Atlas)
- ImageKit hesabı
- Google Gemini API anahtarı


2️⃣ Backend Çalıştırma
cd server
npm install
npm run server

3️⃣ Frontend Çalıştırma
cd client
npm install
npm run dev


📖 Kullanım

http://localhost:5173 adresinden frontend açılır.

Admin giriş bilgileriyle panele giriş yapılır.

Yeni blog yazısı eklenebilir veya “AI ile içerik oluştur” butonuyla otomatik yazı üretilebilir.

Yorumlar admin paneli üzerinden onaylanabilir.

