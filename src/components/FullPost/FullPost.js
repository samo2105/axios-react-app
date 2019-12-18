import React, {Component} from "react";
import classes from './FullPost.css'
import Axios from "axios";

class FullPost extends Component {
    state = {
        selectedPost: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            if (!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.id)) {
                Axios.get("/posts/" + this.props.id)
                    .then(response => {
                        this.setState({selectedPost: response.data})
                    })
            }
        }
    }

    deletePostHandler = () => {
        Axios.delete("/posts/" + this.props.id)
            .then(response => {
                console.log(response)
            })
    };

    render() {
        let post = <p className={classes.SelectPost}>Please Select a Post!</p>;
        if (this.props.id) {
            post = <p className={classes.SelectPost}>Loading...</p>;
        }

        if (this.state.selectedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>Title: {this.state.selectedPost.title}</h1>
                    <p>Content: {this.state.selectedPost.body}</p>
                    <div className={'Edit'}>
                        <button className={classes.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }

        return post
    }
}

export default FullPost;