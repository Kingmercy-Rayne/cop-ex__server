const express = require("express");

const server = express();

server.use(express.json());

const PORT = 5000;

server.get("/", (req, res) => {
  res.json("Hello rayne");
});

server.listen(PORT, () => {
  console.log(`\n*** server running on Port ${PORT} ***\n`);
});
