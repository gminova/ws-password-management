"use strict";

const bcrypt = require("bcryptjs");

const hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      cb(err);
    } else {
      bcrypt.hash(password, salt, cb);
    }
  }) 
};

const comparePasswords = (password, hashedPassword, callback) => {
  // use bcrypt to compare the passwords and return a boolean asynchronously
  callback(new Error("TODO"));
};

module.exports = {
  comparePasswords,
  hashPassword
};
