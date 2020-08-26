const express = require("express");

const { getUsers, getUser, createUser } = require("../controllers/users");

const router = express.Router();

// Standard routing
router.get("/all-users", (req, res) => {
    res.json({
        message: "Users route!",
    });
});

// Controller routes
router.route("/").get(getUsers);
router.route("/user/:id").get(getUser).post(createUser);

module.exports = router;
