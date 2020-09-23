const { Analytics } = require("../../models/analytics/analytics");

module.exports.createAnalyticsDoc = (req, res) => {
  let analyticsDoc = new Analytics(req.body);
  analyticsDoc
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
