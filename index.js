const express = require("express");
const cors = require("cors")
const users = require("./routes/users");
const rentals = require("./routes/rentals");
const savedlists = require("./routes/savedlists");
const signin = require("./routes/signin");
const signup = require("./routes/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
 

const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4003;


function authenticateToken(req, res, next) {
  // Get meta information for request
  const authHeader = req.headers.authorization;
  console.log({ auth: req.headers.authorization });

  // Store the token in variable
  const token = authHeader && authHeader.split(" ")[1];
  console.log({ token });

  // What if no token
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "tacos", (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    console.log(req.user);
    next();
  });
}


app.use(express.json());
app.use(users);
app.use(signin);
app.use(signup);
app.use(authenticateToken, rentals);
app.use(authenticateToken, savedlists);


app.get("/", (req, res) => {
  res.json("welcome to friendly rent backend");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

//* these are the commands to follow to kill a port 
// to fix the address already in use error
// lsof -i :4003 <- whichever port the error gives you
//and this will return the pid:
// kill -9 PID
