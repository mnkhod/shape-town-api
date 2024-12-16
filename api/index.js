const express = require("express");
const app = express();
require('dotenv').config()

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/env-test", (req, res) => res.send(process.env.TEST));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
