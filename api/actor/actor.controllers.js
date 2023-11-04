const Actors = require("../../models/Actors");
const movies = require("../../models/movies");

exports.createActors = async (req, res, next) => {
  try {
    const newActor = await Actors.create(req.body);

    res.status(201).json(newActor);
  } catch (error) {
    next(error);
  }
};

exports.getActor = async (req, res, next) => {
  try {
    const getAll = await Actors.find().populate({
      path: "movies",
      select: "title",
    });
    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

exports.addActorToMovie = async (req, res, next) => {
  try {
    const { actorId, movieId } = req.params;
    const findActor = await Actors.findById(actorId);
    const findMovie = await movies.findById(movieId);
    if (!findActor || !findMovie)
      return res.status(404).json("Actors or Movies not found ");
    findActor.movies.push(findMovie._id);
    findMovie.actors.push(findActor._id);
    await findActor.save();
    await findMovie.save();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateActor = async (req, res, next) => {
  try {
    await Actors.findByIdAndUpdate(req.params.actorId, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deletActor = async (req, res, next) => {
  try {
    const findId = await Actors.findById(req.params.actorId);
    if (findId) {
      await findId.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json("the actor is not found");
    }
  } catch (error) {
    next(error);
  }
};
