const express = require("express");

const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/api/contacts", (req, res) => {
  res.json({ message: "Get all contacts" });
});

app.listen(PORT, () => {
  console.log(`Server running on http//:localhost:${PORT}`);
});
