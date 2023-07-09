if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const WEATHER_API = process.env.WEATHER_API;
const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
console.log(req.body)
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=41.747532&lon=-74.086891&appid=${WEATHER_API}
    `;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => res.json(data.data.current));
});

app.listen(3000, () => {
  console.log("Server Started");
});
