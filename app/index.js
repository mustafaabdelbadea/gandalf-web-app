const express = require("express");
const path = require("path");
const moment = require("moment-timezone");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/colombo", function (req, res) {
  const colomboTime = moment().tz("Asia/Colombo").format("YYYY-MM-DD HH:mm:ss");
  res.send(`<h1>Current time in Colombo: ${colomboTime}</h1>`);
});

app.get("/gandalf", (req, res) => {
  const filename = "gandlaf.webp";
  const imagePath = path.join(__dirname, "images", filename);

  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Image not found");
    }
  });
});

app.listen(port, () => {
  console.log(`Gandalf app listening on port ${port}`);
});
