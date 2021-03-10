import React, {useState, useEffect} from "react";
import * as TwitterAPI from "../utils/TwitterAPI";
import { map, orderBy } from "lodash";
import Card from "../components/Card";
function TwitterSearch(props) {

    const [twitterData, setTwitterData] = useState([]);

    useEffect(() => {
        searchTwitter("suess");
    }, []);

    const searchTwitter = async (query) => {
        const results = await TwitterAPI.searchTweets(query);
        setTwitterData(results);
    }

    if(!twitterData.length) {
        return <div>LOADING</div>
    }

    const retweetResults = orderBy(twitterData, ["public_metrics.retweet_count"], ["desc"]);
    const topResults = map(retweetResults.slice(0,10), tweet => ({
        text:tweet.text,
        ...tweet.public_metrics
    }));

    console.log("topResults", topResults);
    console.log(topResults.length);

    console.log("TWITTER: ", twitterData);
    const mostRetweeted = twitterData ? orderBy(twitterData, ["public_metrics.retweet_count"], ["desc"]) : [];

    return (
        <Card>
            {map(mostRetweeted.slice(0,10), tweet => (
                <Card>
                    <p>{tweet.text}</p>
                    <p>Retweets: {tweet.public_metrics.retweet_count}</p>
                </Card>
            ))}
        </Card>
    )
}

export default TwitterSearch;