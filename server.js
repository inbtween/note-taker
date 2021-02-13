const express = require("express");
const path = require("path");

const app = express();
// a dynamic port
const PORT = process.env.PORT || 3000;

app.use(express.static("/public"));
// ROUTES
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "index.html"));
  // res.send("The server is live");
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
