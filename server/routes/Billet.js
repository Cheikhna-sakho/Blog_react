const express = require('express');
const rooter = express.Router();
const billetCtrl = require(`${__basedir}/controller/Billet`);
//
rooter.get("/", billetCtrl.findAll);
rooter.get("/:id",billetCtrl.find);
rooter.post("/new", billetCtrl.create);
rooter.put("/:id", billetCtrl.update);
rooter.delete("/:id", billetCtrl.delete);
module.exports = rooter;