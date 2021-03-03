import React, {useState, useEffect} from "react";
import request from "../utils/request";
import { twitterSearchURL } from "../constants/TwitterAPIs";

function TwitterSearch(props) {

    const [twitterData, setTwitterData] = useState(null);

    // useEffect(() => {
    //     setTwitterData(searchTwitter());
    // }, []);

    const searchTwitter = async () => {
        const searchQuery = "seuss";
        return await request()
            .get(`${twitterSearchURL}${searchQuery}`)
            .send()
            .then((res) => {
                if (res.body) {
                   console.log(res.body);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Twitter Page</h1>
            <div>LOAD RESULTS HERE</div>
        </div>
    )
}

export default TwitterSearch;