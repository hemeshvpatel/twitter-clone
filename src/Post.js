import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core"

//Icons
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, timestamp, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar alt="Dev" src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Twitter Guest <span className="post__headerSpecial"><VerifiedUserIcon className="post__badge" />@twitterguest</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter Clone with ReactJS</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>

        </div>
    )
}

export default Post
