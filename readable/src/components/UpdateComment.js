import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UpdateComment extends Component {

  componentWillMount() {
    this.setState({
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let openUpdateComment = {}
    let commentList = []
    let comment = {}
    let updatedComment = {}
    if(this.props.data.updateComment) {
      openUpdateComment = this.props.data.updateComment.updateComment;
      let commentsMap = this.props.data.comments.comments;
      if(commentsMap && openUpdateComment) {
        commentList = commentsMap.get(openUpdateComment.parentId)
        commentList = commentList.filter((comment) => comment.id === openUpdateComment.commentId)
        if(commentList) {
          comment = commentList[0];
        }
        updatedComment.id = comment.id
        updatedComment.body = (this.state && this.state.body && this.state.body.length > 0) ? this.state.body : comment.body
        updatedComment.timestamp = Date.now()
        updatedComment.parentId = comment.parentId
        this.props.handleUpdateComment(updatedComment);
      }
    }
  }

  handleBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  render() {
    let openUpdateComment = {}
    let commentList = []
    let comment = {}
    if(this.props.data.updateComment) {
      openUpdateComment = this.props.data.updateComment.updateComment;
      let commentsMap = this.props.data.comments.comments;
      if(commentsMap && openUpdateComment) {
        commentList = commentsMap.get(openUpdateComment.parentId)
        commentList = commentList.filter((comment) => comment.id === openUpdateComment.commentId)
        if(commentList) {
          comment = commentList[0];
        }
      }
    }
    return (
      <div>
        <div>
          <Link to="/" onClick = {() => this.props.handleBackToHomepage()}>Back to Homepage</Link>
        </div>
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>
              Body:
              <input type="text" placeholder={(comment.body && comment.body.length > 0)? comment.body : ""} name="body" onChange={this.handleBodyChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateComment;
