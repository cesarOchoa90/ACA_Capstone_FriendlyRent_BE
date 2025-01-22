const pool = require("../mysql/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const create = async (req, res) => {
  const { FirstName,LastName,Phone, Email, id } = req.body;

  // Abstract the variables values
  pool.query(
    `INSERT INTO Users (id, FirstName, LastName, Phone, Email) 
    VALUES (?, ?, ?, ?, ?)`,
    // Dependency array
    [id, FirstName, LastName,Phone, Email],
    (err, results, fields) => {
      if(err){

        return res.json({status:409, message:"User already created"})
      }
      console.log(results)
      res.json({
        status:200, message:"User added", results
      });
    }
  );
};

module.exports = {
  create,
};