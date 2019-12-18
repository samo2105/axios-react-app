import React from "react";
import classes from './Post.css'

const post = (props) => {
    return (
        <div className={classes.Post}>
            <p>Title: {props.title}</p>
            <p>Body: {props.body}</p>
            <p>UserId: {props.userId}</p>
            <p>Id: {props.id}</p>
            <button onClick={props.clicked}>Ver Post</button>
        </div>
    )
};

export default post;