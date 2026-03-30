const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

app.listen(3000, () => console.log("running"));
