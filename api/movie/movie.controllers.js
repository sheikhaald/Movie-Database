const Actors = require("../../models/Actors");
const movies = require("../../models/movies");

exports.createMovies = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.picture = req.file.path.replace("\\", "/");
    }
    const newMovie = await movies.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

exports.getMovie = async (req, res, next) => {
  try {
    const movie = await movies.find();

    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    await movies.findByIdAndUpdate(req.params.movieId, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deletMovie = async (req, res, next) => {
  try {
    const findId = await movies.findById(req.params.movieId);
    if (findId) {
      await findId.deleteOne();
      res.status(204).end();
    } else {
      res.status(400).json("movie not found");
    }
  } catch (error) {
    next(error);
  }
};
