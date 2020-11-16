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
        var timestamp = date.getTime();
        var dateString = new Date().toDateString();

        //send to firebase db
        db.collection('posts').add({
            atimestampKey: timestamp,
            displayName: 'Twitter Guest',
            username: 'twitterguest',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg',
            date: dateString,
            fulldate: date
        });

        //reset fields
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar alt="Dev" src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg" />
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
