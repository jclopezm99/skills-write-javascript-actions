const axios = require("axios");

const options = {
  method: "GET",
  url: "https://icanhazdadjoke.com",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
};

async function getJoke() {
  const response = await axios(options);
  return response.data.joke;
}

module.exports = getJoke;
