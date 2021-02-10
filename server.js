const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ROUTES
app.get("/", (req, res) => {
  res.send("The server is live");
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
