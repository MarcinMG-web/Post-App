import React from "react";
import {getPostComments, getUserPosts, getUsers} from "../services/ApiService";
import AddPostComment from "./AddPostComment";
import UserDetails from "./UserDetails";

export default class PostComments extends React.Component {
    state = {
        comments: [],
        post_id: '',
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const comments = await getPostComments(this.props.post_id)
        this.setState({ post_id: this.props.post_id })
        this.setState({comments: comments})

    }

    // async componentWillReceiveProps(nextProps, nextContext) {
    //     const comments = await getPostComments(nextProps.post_id)
    //     this.setState({ post_id: nextProps.post_id })
    //     this.setState({comments: comments})
    //
    // }
    addCommentCallback (dataFromChild) {
        console.log('emmit info', dataFromChild)
        const comments = getPostComments(dataFromChild)
        console.log('comments', comments)
        this.setState({comments: comments})
    }
    render() {
        return (
            <div>
                {this.state.comments.map(comment => <div className="card-body" key={comment.id}>
                    <p className="card-text">{comment.title}<br/>
                        {comment.body}</p>
                </div>)}
                <AddPostComment
                    post_id={this.props.post_id}
                    callbackFromAddComment={this.addCommentCallback}

                />
            </div>
        )
    }
}
