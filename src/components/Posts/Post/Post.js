import React from "react";
import classes from './Post.css'

const post = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.body}</p>
        <p>{props.userId}</p>
        <p>{props.id}</p>
    </div>
);

export default post;