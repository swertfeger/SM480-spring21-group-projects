import * as TwitterAPI from "../api/TwitterAPI";
import * as ActionTypes from "../constants/ActionTypes";

export const SearchTweets = (query) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.TWEET_SEARCH_STARTED
        });

        TwitterAPI.searchTweets(query)
            .then((res) => {
                // do stuff
                dispatch({
                    type: ActionTypes.TWEET_SEARCH_LOADED,
                    tweets: res,
                });
            })
            .catch((err) => {
                // do something
                dispatch({
                    type: ActionTypes.TWEET_SEARCH_ERROR
                });
            })
    }
}