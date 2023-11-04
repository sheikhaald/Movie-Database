const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const notFound = require("./middleware/notFoundMiddleware");
const errorhandler = require("./middleware/errorHandler");
const actorRoute = require("./api/actor/actor.routes");
const movieRoute = require("./api/movie/movie.routes");
const reviewRouter = require("./api/review/review.routes");
const path = require("path");
connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/movie", movieRoute);
app.use("/actor", actorRoute);
app.use("/review", reviewRouter);
app.use(notFound);

app.use(errorhandler);
app.use("/media", express.static("public"));

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
