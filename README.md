# 🛠️ Product Manager App – Backend API

A lightweight RESTful API built with **Node.js**, **Express**, and **MongoDB** to power a product management dashboard.

## 🔧 Features

- `GET /api/products` – Fetch all products
- `POST /api/products` – Add a new product
- `DELETE /api/products/:id` – Delete a product
- MongoDB Atlas integration for cloud-based storage
- CORS and JSON middleware support

## 🌍 Deployed API

[Render Live URL] - (https://prodman-backend.onrender.com/api/products)

## 📦 Tech Stack

- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Render

## 📁 Project Structure

server/
├── app.js
├── config/
│ └── db.js
├── models/
│ └── Product.js
├── routes/
│ └── productRoutes.js
├── controllers/
│ └── productController.js
├── .env
└── package.json

