const rentalisting = require("../data/rentalisting");
const axios = require("axios");
require("dotenv").config();

const getRentals = (req, res) => {
  res.json(rentalisting);
};

const getRentalsbyZipCode = (req, res) => {
  const zipcode = req.params.zipcode;
  console.log(req);

  const url = `https://api.rentcast.io/v1/listings/rental/long-term?zipCode=${zipcode}&status=Active&limit=100`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-Key": `${process.env.APIKEY}`,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => console.error(err));
};

module.exports = { getRentals, getRentalsbyZipCode };
