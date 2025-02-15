const express = require("express");

const app = new express();
const port = 5000;

app.listen(port, ()=>{ console.log(`Server is running on the port ${port}`)});
