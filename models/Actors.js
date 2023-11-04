const { model, Schema } = require("mongoose");

const ActorSchema = new Schema({
  name: String,
  age: Number,
  movies: [{ type: Schema.Types.ObjectId, ref: "movie" }],
});

module.exports = model("actor", ActorSchema);
