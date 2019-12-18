import React, {Component} from "react";
import classes from './Layout.css'
import Aux from "../../HOC/Aux";
import Posts from "../../components/Posts/Posts";
import Axios from "axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Layout extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 10);
                this.setState({posts: posts, error: false});
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    };


    render() {
        return (
            <Aux>
                <FullPost id={this.state.selectedPostId} />
                <NewPost/>
                <Posts postList={this.state.posts} selectedPost={this.postSelectedHandler} error={this.state.error}/>
            </Aux>
        )
    }
}

export default Layout;