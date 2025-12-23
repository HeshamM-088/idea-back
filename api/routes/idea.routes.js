const express = require("express");
const router = express.Router();

const { createIdea, refineIdea } = require("../controllers/idea.controller");

router.post("/", createIdea);

router.post("/:id/refine", refineIdea);

module.exports = router;
