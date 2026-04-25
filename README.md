# 📚 React User Management App

## 📌 Deskripsi
Aplikasi ini merupakan frontend berbasis **React.js** yang terintegrasi dengan API dari Mini Project sebelumnya. Aplikasi ini memungkinkan user untuk melakukan registrasi, login, serta melihat data user.

---

## 🚀 Fitur Utama

### 🔐 Authentication
- Register User (Success & Error Handling)
- Login User (Success & Error Handling)
- Penyimpanan token menggunakan `localStorage`
- Protected Routes (halaman tertentu hanya bisa diakses setelah login)

---

### 👤 User Management
- Menampilkan daftar user (List Users)
- Menampilkan detail user (Single User)
- Fetch data dari API menggunakan Axios

---

### 📄 Pagination
- Implementasi pagination pada halaman Home/User List

---

### 📱 Responsive Design
- Tampilan responsive menggunakan Tailwind CSS & Material Tailwind
- Support desktop, tablet, dan mobile

---

## 🛠️ Library yang Digunakan

| Library | Fungsi |
|--------|--------|
| React | Frontend framework |
| React Router DOM | Routing halaman |
| Axios | HTTP request ke API |
| Tailwind CSS | Styling |
| Material Tailwind | UI Component |
| TypeScript | Type safety |

---

## 🔒 Protected Routes
Halaman berikut hanya bisa diakses setelah login:
- User Page
- User Detail Page

Jika belum login, user akan diarahkan ke halaman login.

---

## 🔗 Endpoint API yang Digunakan

### Auth
- `POST /auth/register` → Register user
- `POST /auth/login` → Login user

### User
- `GET /users` → List users
- `GET /users/:id` → Detail user

---

## ⚙️ Cara Menjalankan Project

1. Clone repository:
```bash
git clone https://github.com/username/repository-name.git