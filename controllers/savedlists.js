const pool = require('../mysql/connection')
const mysql = require("mysql")
const connection = require("../mysql/connection")

const getSavedLists = (req, res) => {
    connection.query("SELECT * FROM Saved Properties", (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows)
    });
  }

  const getSavedListbyId = (req, res) =>{
    const SavedListbyId = req.params.id
    const replacements = [SavedListbyId]
    connection.query("SELECT * FROM Saved Properties WHERE ID = ?" , replacements,
    (err, rows) => {
        if(err) {
          console.log({message: "Error occured:" + err});
          return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows);
      } )
  }

  const createSavedList = (req, res) =>{
    console.log('inside create saved item')
    const { PropertyId, UserId } = req.body
    const replacements = [UserId, PropertyId]
    connection.query("INSERT INTO `Saved Properties` (UserId, PropertyId ) VALUES (?,?)" , replacements,  (err, rows) => {
        if(err) {
          console.log({message: "Error occured:" + err});
          return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows);
      } )


  }

  

  module.exports = {getSavedLists, getSavedListbyId, createSavedList}