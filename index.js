const express = require("express");
const cors = require('cors');
const app = express();
const route =require("./Router/router")

app.use(express.json());
app.use(cors())
app.use(route);


app.listen(3000);