const express = require("express")
const router = express.Router()
const controller = require("../Controller/user.controller")

router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.put)
router.delete("/:id", controller.del)

module.exports = app => app.use("/users", router)