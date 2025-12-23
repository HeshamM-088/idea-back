const express = require("express");
const cors = require("cors");

const ideaRoutes = require("./routes/idea.routes");

const app = express();

app.use(cors());
app.use(express.json());

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
