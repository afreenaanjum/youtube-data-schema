const { Youtube } = require("../models/youtube");

/*{
     "name"  :"test",
    "image" : "test image",
   "title" :"test title",
   "isNewVideo" : false,
   "url" : "sample url",
   "videoId" : 56,
   "_id" :"parent",
   "body" : [{"date" : "Fri Jun 22 2018 11:02:01", "_id" : "Sub doc"}] POST REQUEST
} */
module.exports.createYoutubeDoc = (req, res) => {
  let youtubeDoc = new Youtube(req.body);
  youtubeDoc
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.deleteYoutubeDoc = (req, res) => {
  const id = req.params.id;
  Youtube.findOneAndDelete({ _id: id })
    .then((doc) => {
      if (doc) {
        res.status(StatusCode.success).json({});
      } else {
        res.status(404).send("Dcoument not found!");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({});
    });
};
