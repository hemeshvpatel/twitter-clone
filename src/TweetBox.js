import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        var date = new Date();
        var dateString = new Date().toDateString();

        //send to firebase db
        db.collection('posts').add({
            displayName: 'Twitter Guest',
            username: 'twitterguest',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png',
            date: dateString,
            timestampKey: date
        });

        //reset fields
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar alt="Dev" src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text" />
                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox
