require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

