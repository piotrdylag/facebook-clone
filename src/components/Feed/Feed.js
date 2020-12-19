import React, {useEffect, useState} from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "firebase/firebase"

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ))
    }, []);

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default Feed;