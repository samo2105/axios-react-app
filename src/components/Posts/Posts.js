import React from "react";
import classes from './Posts.css'
import Post from "./Post/Post";

const posts = (props) => {
    const posts = props.posts;

    return(
        posts.forEach(post => {
            return <Post title={post.title} body={post.body} userId={post.userId} id={post.id}/>
        })
    )
};

export default posts;