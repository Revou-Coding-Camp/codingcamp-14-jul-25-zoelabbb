# Codingcamp RevoU - Website Project

## 📖 Deskripsi

Website responsive multi-halaman yang dibuat sebagai submission untuk Codingcamp RevoU. Project ini menampilkan profil perusahaan, fasilitas, form interaktif, dan galeri pencapaian dengan implementasi JavaScript untuk interaktivitas.

## ✨ Fitur Utama

- **Responsive Design** - Optimal di Desktop, Tablet, dan Mobile
- **Interactive Welcome Message** - JavaScript prompt untuk personalisasi nama pengguna
- **Real-time Form Preview** - Preview data form secara real-time
- **Form Validation** - Validasi komprehensif untuk semua input
- **Smooth Navigation** - Navigasi antar halaman yang smooth
- **Modern UI/UX** - Design modern dengan gradient dan animasi
- **Cross-browser Compatible** - Bekerja di semua browser modern

## 📁 Struktur Project

```
codingcamp-revou/
├── assets/
│   ├── css/
│   │   └── style.css          # Single CSS file untuk seluruh project
│   ├── js/
│   │   └── script.js          # Single JavaScript file untuk seluruh project
│   └── img/
│       └── logo/
│           └── logo-revou.svg # Logo RevoU
├── index.html                 # Halaman utama dengan hero section
├── profile.html              # Halaman profil perusahaan (foto banner, about, vision/mission)
├── achievement.html          # Halaman pencapaian dan prestasi
├── contact.html              # Halaman kontak dengan form
└── README.md                 # Dokumentasi project
```

## 🎯 Halaman Website

### 1. **Home Page** (`index.html`)

- Hero section dengan welcome message yang dapat dipersonalisasi
- Section "Our Facilitation" dengan 3 fasilitas utama
- Form "Message Us" dengan preview real-time
- Statistics display (138 x 478)

### 2. **Our Profile** (`profile.html`)

- Photo banner dengan gambar tim
- About the Company section
- Vision & Mission dalam layout card
- Team profile dengan foto dan detail

### 3. **Achievement** (`achievement.html`)

- Grid layout untuk menampilkan pencapaian
- 9 achievement items dengan tanggal dan deskripsi
- Hover effects dan animasi

### 4. **Contact** (`contact.html`)

- Form kontak dengan validasi lengkap
- Informasi kontak (email, phone, address, social media)
- Business hours information
- Contact icons dengan emoji

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantik dan accessible
- **CSS3** - Styling modern dengan Flexbox & Grid
- **JavaScript (ES6+)** - Interaktivitas dan validasi form
- **Media Queries** - Responsive design untuk semua device
- **SVG** - Logo scalable vector graphics

## 📱 Responsive Design

Website ini menggunakan mobile-first approach dengan breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Media Queries Features:

- Adaptive navigation (horizontal → vertical)
- Flexible grid layouts
- Scalable typography
- Touch-friendly buttons dan forms

## ⚡ JavaScript Features

### 1. **Welcome Message System**

```javascript
// Personalized welcome message dengan localStorage
initializeWelcomeMessage();
```

### 2. **Real-time Form Preview**

```javascript
// Live preview untuk Message Us form
updatePreview();
```

### 3. **Form Validation**

- Nama minimal 2 karakter
- Tanggal lahir validation (umur 5-100 tahun)
- Gender selection required
- Pesan minimal 10 karakter

### 4. **Interactive Elements**

- Smooth scrolling navigation
- Active page highlighting
- Hover animations
- Real-time clock display

## 🎨 Design System

### Color Palette

- **Primary**: #007bff (Blue)
- **Secondary**: #667eea → #764ba2 (Gradient)
- **Background**: #f5f5f5 (Light Gray)
- **Text**: #333 (Dark Gray)
- **Accent**: #ffd700 (Gold)

### Typography

- **Font Family**: Arial, sans-serif
- **Headings**: 1.5rem - 3rem
- **Body**: 1rem
- **Line Height**: 1.6

### Components

- Cards dengan shadow effects
- Gradient backgrounds
- Rounded corners (4px-12px)
- Smooth transitions (0.3s ease)

## 🚀 Cara Menjalankan Project

1. **Clone repository**

```bash
git clone https://github.com/Revou-Coding-Camp/codingcamp-14-jul-25-zoelabbb.git
```

2. **Buka di browser**

```bash
# Buka file index.html langsung di browser
# Atau gunakan live server
```

3. **Atau menggunakan Python HTTP Server**

```bash
cd codingcamp-revou
python3 -m http.server 3000
# Buka http://localhost:3000
```

## 🔧 Development Workflow

Project ini mengikuti workflow development yang terstruktur:

1. ✅ **Feature Branch Development**
2. ✅ **Single CSS File** (style.css only)
3. ✅ **Single JavaScript File** (script.js only)
4. ✅ **Responsive Design** dengan media queries
5. ✅ **Form Validation** & real-time preview
6. ✅ **Welcome Speech** dengan JavaScript
7. ✅ **Profile Page** dengan photo banner, about company, vision/mission

## 📋 Checklist Features

- [x] Slicing sesuai mockup
- [x] Profile page dengan photo banner, about company, vision/mission
- [x] Navigation dari navbar "Our Profile"
- [x] Design kreatif dengan informasi lengkap
- [x] Welcome speech "Hi Name" dengan JavaScript untuk isi nama
- [x] Validasi form "Message Us" & tampilkan value saat submit
- [x] Responsive design (Desktop & Mobile)
- [x] Single CSS file (style.css)
- [x] Single JavaScript file (script.js)

## 👨‍💻 Author

**Alif Ryuu (zoelabb)**

- GitHub: [@zoelabb](https://github.com/zoelabb)
- LinkedIn: [alifryuu](https://www.linkedin.com/in/alifryuu)
- Instagram: [@makudonaru\_](https://www.instagram.com/makudonaru_)

## 📄 License

© 2025 Alif Ryuu (zoelabb). All rights reserved.

---

_Dibuat dengan ❤️ untuk RevoU Coding Camp_
