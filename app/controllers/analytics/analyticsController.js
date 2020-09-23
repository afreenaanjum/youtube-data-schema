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

module.exports.getAnalyticsDocByDay = (req, res) => {
  const startDay = Number(req.params.smyd);
  const end = Number(req.params.emyd);
  const storeId = req.params.storeId;
  let response = {};
  response["status"] = false;
  response["data"] = [];

  if (startDay === end) {
    Analytics.aggregate()
      .match({
        _id: storeId,
      })
      .project({
        days: {
          $filter: {
            input: "$days",
            cond: {
              $eq: ["$$this._id", startDay],
            },
          },
        },
      })
      .then((doc) => {
        if (doc) {
          response["status"] = true;
          response["message"] = "success in fetching details";
          response["data"] = doc[0] && [{}];
          res.status(200).json(response);
        } else {
          response["status"] = true;
          response["message"] = `Data not existing`;
          res.status(200).send({
            response,
          });
        }
      })
      .catch((err) => {
        response["message"] = `${err}`;
        res.status(500).json(response);
      });
  } else {
    Analytics.aggregate()
      .match({
        _id: storeId,
      })
      .project({
        days: {
          $filter: {
            input: "$days",
            cond: {
              $gte: ["$$this._id", startDay],
            },
          },
          $filter: {
            input: "$days",
            cond: {
              $lte: ["$$this._id", end],
            },
          },
        },
      })
      .exec()
      .then((doc) => {
        if (doc) {
          console.log(typeof doc, doc);
          response["status"] = true;
          response["message"] = "success in fetching details";
          response["data"] = doc[0];
          res.status(200).json(response);
        } else {
          response["status"] = true;
          response["message"] = `Data not existing`;
          res.status(200).send({
            response,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        response["message"] = `${err}`;
        res.status(500).json(response);
      });
  }
};
