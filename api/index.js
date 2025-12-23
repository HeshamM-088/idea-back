const express = require("express");
const cors = require("cors");

require("dotenv").config();

const ideaRoutes = require("./routes/idea.routes");
const connectDB = require("./config/db");

const app = express();

const allow_origins = [
  "https://promptly-azure.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allow_origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

connectDB();

app.use("/api/v1/ideas", ideaRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Idea Refiner API is running 🚀" });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found ❌",
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
