const mongoose = require("mongoose");

//db configuration
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/youtube", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("error connectong to the db", err);
  });

module.exports = mongoose;
