import React from "react";

import { savePostComment } from "../services/ApiService";

export default class AddPostComment extends React.Component {

    state = {
        post_id: 0
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("dsdsds", nextProps.post_id)
        this.setState({post_id: nextProps.post_id})


    }
    addComment = () => {
        console.log('add comment')

        const comment = {
            name: 'name',
            email: 'test@test.pl',
            body: 'basdasdas',
            post_id: this.state.post_id
        }
        savePostComment(comment)
        this.props.callbackFromAddComment(this.state.post_id)
    }


    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" className='lableComent'>Your Coment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" onClick={this.addComment} className="btn btn-success">Add Coment </button>
            </div>
        )
    }
}
