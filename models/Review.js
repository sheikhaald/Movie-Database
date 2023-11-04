const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  review: String,
  movies: { type: Schema.Types.ObjectId, ref: "movie" },
});

module.exports = model("review", ReviewSchema);
