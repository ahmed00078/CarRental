const express = require("express");
var cors = require("cors");
const connection = require("./connection");
const bodyParser = require("body-parser");
process.env.TZ = "Europe/Paris";

const app = express();

const authRoute = require("./routes/authentification");
const profileRoute = require("./routes/profile");
// const produitRoute = require("./routes/produit");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use("/authentification", authRoute);
app.use("/profile", profileRoute);
// app.use("/produit", produitRoute);

module.exports = app;