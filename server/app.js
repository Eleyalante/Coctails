"use strict";

const PORT = process.env.PORT || 8080;


const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", function(req,res) {
  return  res.status(200).json({"test":"OK"});
})
app.listen(PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);