const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Scores Works!" }));

module.exports = router;
