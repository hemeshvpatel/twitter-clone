import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    //runs based on given condition
    useEffect(() => {
        //code...to get a snapshot from firebase db and map through it to get an array of data
        //doc.data is access to all data in collection
        db.collection('posts').onSnapshot(snapshot =>
            (setPosts(snapshot.docs.map(doc => doc.data())))
        )
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Posts */}
            <FlipMove>
                {posts.reverse().map(post => (
                    <Post
                        key={post.timestampKey}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        date={post.date} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
