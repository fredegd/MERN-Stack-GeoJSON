const express = require("express");

const {createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,} = require("../controllers/users")

const userRouter =  express.Router()

userRouter.post("/", createUser)
userRouter.get("/", getUsers)
userRouter.get("/:id", getUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)


module.exports = userRouter;