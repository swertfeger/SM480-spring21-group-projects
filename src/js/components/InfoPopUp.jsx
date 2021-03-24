import React from 'react';
import PropTypes from "prop-types";
import "./ConnectPopUp.scss";

function InfoPopUp(props) {

    // Decides if the popup should show or not
    if(!props.show) {
        return null;
    }

    return (
        <div className="pop-up">
            <button className="no-button" onClick={props.hidePopUp}> X </button>

            {/* Popup header */}
            <h1 className="pop-up-header"> Tweet Details</h1>

            {/* Tweet ID */}
            <div> Tweet ID: 
                <span>{props.twitterID}</span>
            </div>

            {/* Date */}
            <div> Date Tweeted:
                <span>{props.date}</span>
            </div>

            {/* Name */}
            <div> Name:
                <span>{props.twitterName}</span>
            </div>

            {/* Username */}
            <div> Username:
                <span>{props.username}</span>
            </div>

            {/* Likes */}
            <div> Number of Likes:
                <span>{props.likes}</span>
            </div>

            {/* Retweets */}
            <div> Number of Retweets:
                <span>{props.retweets}</span>
            </div>

            {/* Replys */}
            <div> Number of Replys:
                <span>{props.replys}</span>
            </div>

            {/* Retweets */}
            <div> Number of Quotes:
                <span>{props.quotes}</span>
            </div>

            {/* text */}
            <div> Text:
                <span>{props.text}</span>
            </div>
            
            {/* Media URL */}
            <div> Media URL:
                <span>{props.url}</span>
            </div>
        </div>
    
    )
}

InfoPopUp.propTypes = {
    // twitter ID
    twitterID: PropTypes.string.isRequired,
    date: PropTypes.string,
    twitterName: PropTypes.string,
    username: PropTypes.string,
    retweets: PropTypes.string,
    replys: PropTypes.string,
    quotes: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    show: PropTypes.bool,
    // for hiding pop up
    hidePopUp: PropTypes.func,
}

export default InfoPopUp;