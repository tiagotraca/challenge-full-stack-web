const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sequelize = require("./db/index");
var cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/students", require("./routes/students"));
app.get("/healthcheck", (req, res) =>
  res.type("application/json").status(200).json({ status: "ok" })
);

(async () => {
  try {
    await sequelize.sync({ force: true, alter: true });
    app.listen(process.env.PORT || 4000);
  } catch (error) {
    console.error(error);
  }
})();
