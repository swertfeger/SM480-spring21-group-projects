const {Router} = require("express");
const twitterApi = require('../api/twitter_api');
const router = Router();

router.get('/twitter-search', twitterApi.searchTweets);

module.exports = router;