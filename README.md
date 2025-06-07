# dev-connect
DevConnect is a backend-first application designed to manage a developer’s online portfolio and professional presence. Think of it as the backend engine behind a custom version of LinkedIn or Dev.to

## 🚀 Features

- User registration and login (JWT Auth)
- Role-based access control (User/Admin)
- CRUD operations for:
  - Projects
  - Blogs
  - Skills
  - Work Experience
  - Testimonials
  - Contact Messages
- File uploads (project screenshots, profile pictures)
- Email notifications (e.g., contact form)
- Swagger documentation
- MongoDB Aggregation for basic analytics
- Secure HTTP headers and input sanitization

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Auth**: JWT, Refresh Tokens
- **Docs**: Swagger (OpenAPI)
- **Deployment**: Render / Railway / Cyclic (MongoDB Atlas)

---

## 📂 Folder Structure

```
devConnect/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── swagger/
├── .env
├── server.js

```
