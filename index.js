const express = require("express");
const app = express();

const { config } = require("./config/index");
const menuApi = require("./routes/menu-items.js");

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require("./utils/middleware/errorHandlers.js");

const notFoundHandler = require("./utils/middleware/notFoundHandler");

// body parser
app.use(express.json());

// routes
menuApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
