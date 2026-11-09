const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "AgriTrace server is running" });
});

app.listen(PORT, () => {
  console.log(`AgriTrace is running at http://localhost:${PORT}`);
});
