const { model, Schema } = require("mongoose");

const MoviesSchema = new Schema({
  title: String,
  picture: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "actor" }],
  review: [{ type: Schema.Types.ObjectId, ref: "review" }],
});

module.exports = model("movie", MoviesSchema);
