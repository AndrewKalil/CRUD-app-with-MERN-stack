const router = require("express").Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/auth");
const bcrypt = require("bcrypt");
const userSchema = require("../models/users");

//Sign in
router.post("/login", (req, res, next) => {
  let getUser;
  userSchema
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "Authentication failed" });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({ message: "Authentication Failed" });
      }
      let jwtToken = jwt.sign(
        {
          email: getUser.email,
          userId: getUser._id,
        },
        "longer-secret-is-better",
        {
          expiresIn: "2h",
        }
      );
      res
        .status(200)
        .json({
          token: jwtToken,
          expiresIn: 7200,
          msg: { id: getUser._id, name: getUser.name, email: getUser.email },
        })
        .catch((err) => {
          return res.status(401).json({ message: "Authentication failed" });
        });
    });
});

// sign up
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((response) => {
        res.status(201).json({ message: "User created!", result: response });
      })
      .catch((err) => {
        return res.status(500).json({ error: err });
      });
  });
});

router.route("/users").get(authorize, (req, res) => {
  userSchema.find((error, response) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(response);
    }
  });
});

module.exports = router;
