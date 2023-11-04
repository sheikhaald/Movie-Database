const express = require("express");
const {
  createReview,
  getSpecific,
  getAllreview,
} = require("./review.controllers");
const router = express.Router();
router.get("/", getAllreview);
router.post("/:movieId", createReview);
router.get("/:movieId", getSpecific);

module.exports = router;
