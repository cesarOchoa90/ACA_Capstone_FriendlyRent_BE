const pool = require("../mysql/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  debugger
  return jwt.sign({user}, "tacos");
};

const signin = (req, res) => {
  const { Password, Email } = req.body;

  pool.query(
    `SELECT * FROM Users WHERE Email = '${Email}'`,
    async (err, results) => {
      if (err) {
        console.log(err);
      }

      console.log("return results",results[0].Password, Password);

      const hashedPassword = results[0].Password

      const match = await bcrypt.compare(Password, hashedPassword);
      console.log("test",match)

      if (match) {
        const token = generateToken(results[0]);
        res.json({
          token,
          // user: req.user,
        });
      } else {
        res.sendStatus(403);
      }
    }
  );
};

module.exports = {
  signin,
};