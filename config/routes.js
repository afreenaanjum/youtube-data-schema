const express = require("express");
const router = express.Router();
const youtubeController = require("../app/controllers/youtubeController");

router.post("/youtube", youtubeController.createYoutubeDoc);
router.delete("/youtube/:id", youtubeController.deleteYoutubeDoc);

module.exports = router;
