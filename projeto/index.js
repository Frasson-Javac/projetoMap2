const port = 3000;
const express = require('express');
const Routesapi = require("./modulo/routes/api")

const path = require("path");

const app = express();
app.use("/api", Routesapi);
app.use("/", express.static(path.join(__dirname, "page")))




app.listen(port, () => {

    console.log("SERVER RODANDO");
});