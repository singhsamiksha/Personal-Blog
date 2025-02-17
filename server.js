const express = require("express");
const router = require("./routes/article.route.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

mongoose.connect("mongodb://localhost:27017/personalblog");

const db = mongoose.connection;

db.on("open", () => {
    console.log("Database is connected successfully...");
});

db.on("error", (error) => {
    console.error("Database connection error:", error);
});

app.use("/articles", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
