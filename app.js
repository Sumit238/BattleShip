const express = require("express");
const uniqid = require("uniqid");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const { env } = require("process");
app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("view");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("public"));

const port = 3000;
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/playArena", (req, res) => {
  res.render("layout/playArena");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/deployships", (req, res) => {
  res.render("deployShips");
});
app.get("/privateroom", (req, res) => {
  const pvtRoomPath = "/room/" + uniqid();
  res.send(pvtRoomPath);
});
