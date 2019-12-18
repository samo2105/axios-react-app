import React, {Component} from "react";
import classes from './Layout.css'
import Aux from "../../HOC/Aux";
import Posts from "../../components/Posts/Posts";

class Layout extends Component{
    state = {
        posts: [
            {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'}
        ]
    };

    render (){
        return (
            <Aux>
                <Posts/>
            </Aux>
        )
    }
}

export default Layout;