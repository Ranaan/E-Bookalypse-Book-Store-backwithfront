const express = require("express");

const cartsController = require("../controllers/cartsController");
const authMw = require("../middlewares/authMw");
const role = require("../middlewares/checkRole");

const router = express.Router();

router.route("/api/carts/:userId")
    .get(authMw, role.userORAdmin, cartsController.getAllItems)    
    .post(authMw, role.mustUser, cartsController.addItem)

router.route("/api/carts/one/:userId")      //cartItemId in query string
        .get(authMw, role.userORAdmin, cartsController.getOneItem)
        .delete(authMw, role.mustUser, cartsController.deleteItem)

module.exports = router; 