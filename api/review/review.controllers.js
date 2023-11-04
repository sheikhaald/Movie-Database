const Review = require("../../models/Review");
const movies = require("../../models/movies");

exports.getAllreview = async (req, res, next) => {
  try {
    const review = await Review.find();
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await movies.findById(movieId);
    if (!movie) return res.status(404).json("movie not found");
    req.body.movie = movie._id;
    const review = movie._id;
    const newCreate = await Review.create(req.body);
    movie.Review.push(newCreate);
    await movie.save();
    res.status(201).json(newCreate);
  } catch (error) {
    next(error);
  }
};

exports.getSpecific = async (req, res, next) => {
  try {
    const { movieId } = req.param;
    const findReview = await Review.find({ movie: movieId });
    res.status(200).json(findReview);
  } catch (error) {
    next(error);
  }
};
