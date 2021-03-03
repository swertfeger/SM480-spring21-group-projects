import React, {useState, useEffect} from "react";
import * as TwitterAPI from "../utils/TwitterAPI";
import { map, orderBy } from "lodash";

function TwitterSearch(props) {

    const [twitterData, setTwitterData] = useState(null);

    useEffect(() => {
        setTwitterData(searchTwitter("suess"));
    }, []);

    const searchTwitter = (query) => {
        return TwitterAPI.searchTweets(query);
    }

    console.log(twitterData);
    const mostRetweeted = twitterData ? orderBy(twitterData.data, ["public_metrics.retweet_count"], ["desc"]) : [];
    const top10Retweets = map(mostRetweeted.slice(0,10), tweet => ({
        text: tweet.text,
        id: tweet.id,
        count: tweet.public_metrics.retweet_count,
    }));
    console.log(top10Retweets);
    return (
        <div>
            <h1>Twitter Page</h1>
            <div>LOAD RESULTS HERE</div>
        </div>
    )
}

export default TwitterSearch;