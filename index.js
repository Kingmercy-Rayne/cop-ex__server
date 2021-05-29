const express = require("express");
const Event = require("./models/dbHelpers");

const server = express();

server.use(express.json());

const PORT = 5000;

server.get("/", (req, res) => {
  res.json("Hello rayne");
});

server.post("/api/event", (req, res) => {
  Event.add(req.body)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to add event" });
    });
});

server.get("/api/events", (req, res) => {
  Event.find()
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(500).json("There was an error");
    });
});

// ====================

const shortid = require("shortid");

console.log(shortid.generate());

// ================
server.listen(PORT, () => {
  console.log(`\n*** server running on Port ${PORT} ***\n`);
});
