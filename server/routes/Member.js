const express = require('express');
const rooter = express.Router();
const memberCtrl = require(__basedir + "/controller/Member.js");
//
rooter.get("/", memberCtrl.findAll);
rooter.get("/:id",memberCtrl.find)
module.exports = rooter;