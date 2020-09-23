const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateSchema = new Schema({
  _id: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const youtubeSchema = new Schema({
  _id: String, //This will make sure of custom doc id
  name: {
    type: String,
    required: true,
  },
  videoId: {
    type: Number,
    // required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isNewVideo: {
    type: Boolean,
    required: true,
  },
  body: [dateSchema], //Sub collection and its body in postman

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

youtubeSchema.pre("save", function (next) {
  let videoId = 1;
  let youtubeDoc = this;
  console.log("here", youtubeDoc);
  if (youtubeDoc.isNew && !youtubeDoc.videoId) {
    Youtube.find({}, function (err, youtubeVideos) {
      if (err) throw err;
      videoId = youtubeVideos.length + 1;
      youtubeDoc.videoId = videoId;
      next();
    });
  } else {
    next();
  }
});

const Youtube = mongoose.model("Youtube", youtubeSchema);

module.exports = {
  Youtube,
};
