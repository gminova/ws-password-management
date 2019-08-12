"use strict";

const bcrypt = require("bcryptjs");

const hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      cb(err);
    } else {
      bcrypt.hash(password, salt, cb);
    }
  });
};

const comparePasswords = (password, hashedPassword, cb) => {
  bcrypt.compare(password, hashedPassword, cb);
};

module.exports = {
  comparePasswords,
  hashPassword
};
