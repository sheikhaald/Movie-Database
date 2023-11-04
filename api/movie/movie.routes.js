const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");
const {
  createMovies,
  deletMovie,
  updateMovie,
  getMovie,
} = require("./movie.controllers");

router.post("/", upload.single("picture"), createMovies);

router.get("/", getMovie);
router.post("/", createMovies);

router.delete("/:movieId", deletMovie);

router.put("/:movieId", updateMovie);

module.exports = router;
