const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(PORT, () => console.log("Server running..."));

