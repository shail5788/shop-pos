const User = require("./../models/users");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res, next) => {
  console.log(req.body);

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    gender: req.body.gender,
    dob: req.body.dob
  });
  console.log(newUser);
};
exports.login = (req, res, next) => {
  console.log(req.body);
};
