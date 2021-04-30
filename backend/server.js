const express = require("express");
// const session = require("express-session");
// const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//config file to keep secret variables
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

//ensure that data is being parsed
app.use(express.json());
app.use(cors());

// establish connection with mongoDB
const mongooseConnection = require("./database/connection");
mongooseConnection();

//logger for my server
app.use(morgan("tiny"));

// //session key
// app.use(
//   session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.get("/", (req, res) => {
  res.send({ message: "This is an API" });
});

const auth = require("./routes/auth.routes");
app.use("/api/auth", auth);

const rental = require("./routes/rental.routes");
app.use("/api/data", rental);

app.listen(PORT, () => {
  console.log(`The server is now running on http://localhost:${PORT}`);
});
