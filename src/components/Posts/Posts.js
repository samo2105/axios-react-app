import React from "react";
import classes from './Posts.css'
import Post from "./Post/Post";

const posts = (props) => {

    let allPosts = <p>Something Went Wrong!</p>;

    if (!props.error) {
        allPosts = props.postList.map(post => ( <Post key={post.id} title={post.title} body={post.body} userId={post.userId} id={post.id} clicked={() => props.selectedPost(post.id)}/> ));
    }

    return (
        <div className={'Posts'}>
            {allPosts}
        </div>
    )
};

export default posts;