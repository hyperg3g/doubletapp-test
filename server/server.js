const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const studentsRouter = require("./api/students.route");

const HOSTNAME = process.env.SERVER_HOST || "localhost";
const PORT = process.env.SERVER_PORT || 5000;

const serverAddress = `http://${HOSTNAME}:${PORT}`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("../client/build"))
app.use("/api/students", studentsRouter);

const run = () => {
	app.listen(PORT, () => console.log(`Server running at ${serverAddress}`));
};

module.exports = { run, app };
