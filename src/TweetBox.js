import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar alt="Dev" src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox
