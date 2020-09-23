const express = require("express");
const router = express.Router();
const youtubeController = require("../app/controllers/youtubeController");
const analyticsController = require("../app/controllers/analytics/analyticsController");

router.post("/youtube", youtubeController.createYoutubeDoc);
router.delete("/youtube/:id", youtubeController.deleteYoutubeDoc);

router.post("/analytics", analyticsController.createAnalyticsDoc);
router.get(
  "/analyticsByDay/:storeId/:smyd/:emyd",
  analyticsController.getAnalyticsDocByDay
);

module.exports = router;
