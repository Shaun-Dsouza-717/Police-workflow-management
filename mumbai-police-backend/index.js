require("dotenv").config({ path: "./variables.env" });

//Defining the Port
const PORT = process.env.PORT || 3000;
const cors = require("cors");

//Importing modules
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

// Adding middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const officialsRouter = require("./routes/officials");
const loginRouter = require("./routes/login");
const firRouter = require("./routes/fir");
const mapRouter = require("./routes/map");
const casesRouter = require("./routes/cases");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/officials", officialsRouter);
app.use("/login", loginRouter);
app.use("/fir", firRouter);
app.use("/map", mapRouter);
app.use("/cases", casesRouter);


app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`));