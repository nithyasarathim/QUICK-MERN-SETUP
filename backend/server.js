const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const MONGO_URI = "mongodb://127.0.0.1:27017/mern_template";

let dbStatus = "disconnected";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    dbStatus = "connected";
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    dbStatus = "error";
    console.error("MongoDB Connection Error:", err);
  });

app.get("/api/status", (req, res) => {
  res.json({ dbStatus });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
