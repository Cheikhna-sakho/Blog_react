const express = require('express');
const rooter = express.Router();
const userCtrl = require(`${__basedir}/controller/auth`);
//
rooter.post("/register", userCtrl.register);
rooter.post("/login", userCtrl.login);
module.exports = rooter;