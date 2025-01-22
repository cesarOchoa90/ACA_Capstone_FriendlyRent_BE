const pool = require('../mysql/connection')
const mysql = require("mysql")
const connection = require("../mysql/connection")

const getUsers = (req, res) => {
    connection.query("SELECT * FROM Users", (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows)
    });
  }

  const getUserbyId = (req, res) =>{
    const UserbyId = req.params.id
    console.log("userById", UserbyId)
    const replacements = [UserbyId]
    connection.query("SELECT * FROM Users WHERE ID = ?" , replacements,
    (err, rows) => {
        if(err) {
          console.log({message: "Error occured:" + err});
          return res.status(500).send("An unexpected error occurred")
        }
        console.log("rows",rows)
        res.json(rows);
      } )
  }

  // const createUser = (req, res) =>{
  //   const { ID, FirstName, LastName, Phone, Email } = req.body
  //   const replacements = [ID, FirstName, LastName, Phone, Email]
  //   connection.query(`INSERT INTO Users (ID, FirstName, LastName, Phone, Email ) VALUES (?,?,?,?,?)` , replacements,  (err, rows) => {
  //       if(err) {
  //         console.log({message: "Error occured:" + err});
  //         return res.status(500).send("An unexpected error occurred")
  //       }
  //       res.json(rows);
  //     } )


  // }

  

  module.exports = {getUsers, getUserbyId}