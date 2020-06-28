import React from "react";

import { getUserPosts } from "../services/ApiService";
import PostComments from "./PostComments";

export default class UserDetails extends React.Component {


    state = {
        posts: [],
        user_id: '',
        i: 0,
        endList: false
    }


 

    async componentDidMount() {
        const posts = await getUserPosts(this.props.user_id)
        this.setState({ posts: posts })
    }

    nextPost = () => {
        if (this.state.posts.length !== this.state.i+1) {
            this.setState({i: this.state.i+1})
        } else {
            this.setState({i: 0})
        }
    }


    render() {
        return (
            <div> { this.state.posts[this.state.i] ?
                    <div className="card" key={this.state.posts[this.state.i].id}>
                        <div className="card-header">
                            {this.state.posts[this.state.i].id}<br/>
                            {this.state.posts[this.state.i].title}<br/>
                            {this.state.posts[this.state.i].body}
                        </div>
                        <button type="button" onClick={this.nextPost} className="btn btn-primary">More Post</button>
                    </div> : <div className="card" >
                    <div className="card-header">
                       Post
                    </div>
                    <button type="button" onClick={this.nextPost} className="btn btn-primary">More Post</button>
                </div>
                }
                { this.state.posts[this.state.i] ? <PostComments post_id={this.state.posts[this.state.i].id} /> : <div></div> }


            </div>
        )
    }
}
