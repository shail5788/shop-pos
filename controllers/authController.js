const User = require("./../models/users");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      gender: req.body.gender,
      dob: req.body.dob
    });
    console.log(newUser);
    res.json(newUser);
  } catch (exp) {
    res.json(exp);
  }
};
exports.login = (req, res, next) => {
  console.log(req.body);
};
