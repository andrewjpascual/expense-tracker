const express = require("express"); // allows us to create a simple server
const dotenv = require("dotenv"); // allows us to create global variables
const colors = require("colors"); // allows us to have colors in the console
const morgan = require("morgan"); // morgan lets us see what routes are hit
const connectDB = require("./config/db");

// this is to access the config.env
dotenv.config({ path: "./config/config.env" });

// call the function
connectDB();

// bring the file in and mount the router
const transactions = require("./routes/transactions");

const app = express();

// Allows us to use the body parser
app.use(express.json());

// use the transactions route
app.use("/api/v1/transactions", transactions);

// accessing the global port variable
const PORT = process.env.PORT || 5000;

// put the port in a config file, then use dotenv to get variable to listen through the port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
