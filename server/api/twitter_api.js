const _ = require("lodash");
const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAALJJLQEAAAAAMM88hKMMvNEShgxOIHEH8dIra%2BA%3DwwpyafVEeYGDtJMDNjQF0eNDLXWv8QMXblkrzBcfjNDQsZZtLv";
const TWITTER_API_BASE = "https://api.twitter.com/2";
const endpointURL = `${TWITTER_API_BASE}/tweets/search/recent`;

const needle = require('needle');

async function searchTweets (req, res) {
    console.log(req.query);
    try {
        // Make request
        const response = await getRequest(req.query['query']);
        if(response.data) {
            res.status(200).json(mapTweetAndUser(response));
        } else {
            res.status(200).json({ data: [] });
        }
    } catch (err) {
        res.status(500);
        res.render('error', { error: err });
    }
}

exports.searchTweets = searchTweets;


function mapTweetAndUser(results) {
    const { data, includes:{ users }} = results;
    return _.map(data, tweet => ({
        ...tweet,
        user: _.find(users, user => user.id === tweet.author_id),
    }))
}

async function getRequest(query) {

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        "query": query,
        "tweet.fields": "author_id,text,created_at,public_metrics,attachments", // Edit optional query parameters here
        "expansions": "author_id",
        "user.fields": "profile_image_url",
        "max_results": "100"
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${TWITTER_BEARER_TOKEN}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}