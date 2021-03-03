import React, {useState, useEffect} from "react";
import * as TwitterAPI from "../utils/TwitterAPI";
function TwitterSearch(props) {

    const [twitterData, setTwitterData] = useState(null);

    useEffect(() => {
        setTwitterData(searchTwitter("suess"));
    }, []);

    const searchTwitter = (query) => {
        return TwitterAPI.searchTweets(query);
    }

    return (
        <div>
            <h1>Twitter Page</h1>
            <div>LOAD RESULTS HERE</div>
        </div>
    )
}

export default TwitterSearch;