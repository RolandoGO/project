const express = require("express");
const path = require("path");
const cors = require("cors");
const errorHandler = require("./helpers/errorHandler")
const indexRouter = require("./routes")
require("dotenv").config();


const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new errorHandler("not found", 404)
    next(error)
});

// error handler
app.use((err, req, res, next) => {
 
    res.status(err.statusCode || 500).json({error: err.message || "server error"})
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
  
});

module.exports = app;
