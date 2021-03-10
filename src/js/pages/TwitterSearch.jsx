import React, {useState, useEffect} from "react";
import * as TwitterAPI from "../utils/TwitterAPI";
import { map, orderBy } from "lodash";
import Card from "../components/Card";
function TwitterSearch(props) {

    const [twitterData, setTwitterData] = useState({});

    useEffect(() => {
        setTwitterData(searchTwitter("suess"));
    }, []);

    const searchTwitter = (query) => {
        return TwitterAPI.searchTweets(query);
    }

    const retweetResults = orderBy(twitterData.data, ["public_metrics.retweet_count"], ["desc"]);
    const topResults = map(retweetResults.slice(0,10), tweet => ({
        text:tweet.text,
        ...tweet.public_metrics
    }));

    console.log(topResults);
    console.log(topResults.length);

    console.log(twitterData);
    const mostRetweeted = twitterData ? orderBy(twitterData.data, ["public_metrics.retweet_count"], ["desc"]) : [];
    const top10Retweets = map(mostRetweeted.slice(0,10), tweet => ({
        text: tweet.text,
        id: tweet.id,
        count: tweet.public_metrics.retweet_count,
    }));
    console.log(top10Retweets);
    return (
        <Card>
            <Card>
                <p>{topResults.text}</p>
                <p>Likes: {topResults.like_count}</p>
                <p>Quotes: {topResults.quote_count}</p>
                <p>Replies: {topResults.reply_count}</p>
                <p>Retweets: {topResults.retweet_count}</p>
            </Card>
            <Card>
                <p>{topResults.text}</p>
                <p>Likes: {topResults.like_count}</p>
                <p>Quotes: {topResults.quote_count}</p>
                <p>Replies: {topResults.reply_count}</p>
                <p>Retweets: {topResults.retweet_count}</p>
            </Card>
            <Card>
                <p>{topResults.text}</p>
                <p>Likes: {topResults.like_count}</p>
                <p>Quotes: {topResults.quote_count}</p>
                <p>Replies: {topResults.reply_count}</p>
                <p>Retweets: {topResults.retweet_count}</p>
            </Card>
        </Card>
    )
}

export default TwitterSearch;