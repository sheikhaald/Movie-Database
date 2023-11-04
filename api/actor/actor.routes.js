const express = require("express");
const {
  getActor,
  createActors,
  deletActor,
  updateActor,
  addActorToMovie,
} = require("./actor.controllers");
const router = express.Router();

router.get("/", getActor);
router.post("/", createActors);
router.put("/:actorId/:movieId", addActorToMovie);
router.put("/:actorId", updateActor);
router.delete("/:actorId", deletActor);

module.exports = router;
