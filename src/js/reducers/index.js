import { combineReducers } from "redux";
import * as ActionTypes from "../constants/ActionTypes"

function twitter(state={}, action) {
    switch (action.type) {
        case ActionTypes.TWEET_SEARCH_STARTED:
            return {
                loading: true,
            };
        case ActionTypes.TWEET_SEARCH_LOADED:
            return {
                loading: false,
                tweets: action.tweets,
            };
        case ActionTypes.TWEET_SEARCH_ERROR:
            return {
                loading: false
            }
        default:
            return state;
    }
}


export default combineReducers({ twitter });
