# Idea Refiner API (Backend)

🚀 **Full-Stack Vibe Coder Task – Stunning**

Backend API for the **Idea Refiner Hero Section**, built with **Express.js + MongoDB + Mongoose**.  
This API handles creating ideas, improving them, and refining existing ideas with user inputs.

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JavaScript (ES6)
- dotenv for environment variables
- AsyncWrapper for clean error handling

---

## 📂 File Structure

backend/
│
├── src/
│ ├── app.js # Express app, routes & middlewares
│ ├── server.js # Entry point (serverless-ready for Vercel)
│ │
│ ├── config/
│ │ └── db.js # MongoDB connection
│ │
│ ├── models/
│ │ └── Idea.model.js # Mongoose schema
│ │
│ ├── controllers/
│ │ └── idea.controller.js # Controller logic with asyncWrapper
│ │
│ ├── routes/
│ │ └── idea.routes.js # API routes
│ │
│ └── utils/
│ └── improvePrompt.js # Function to improve idea text
│ └── asyncWrapper.js # Function to handle errors
│
├── .env # Environment variables
├── package.json
└── README.md

---

## ⚡ Features

1. **Create Idea**

   - Endpoint: `POST /api/ideas`
   - Accepts a rough user idea and returns an improved version.

2. **Refine Idea**

   - Endpoint: `POST /api/ideas/:id/refine`
   - Accepts user refinements and updates the improved idea accordingly.

3. **Error Handling**

   - `asyncWrapper` automatically handles async errors.
   - Global error handler in `app.js` returns proper messages and status codes.

4. **Not Found Routes**
   - Any invalid route returns `404` with a JSON message.

---

## ⚙️ Getting Started

### 1. Clone the repository

git clone <YOUR_REPO_URL>
cd backend

### 2. Install dependencies

npm install

### 3. Create .env file

MONGO_URI=<your_mongodb_connection_string>
PORT=5000

### 4. Run the server (locally)

npm run dev

🔗 API Endpoints

/api/ideas POST Create & improve a new idea

/api/ideas/:id/refine POST Refine an existing idea

/ GET Health check
