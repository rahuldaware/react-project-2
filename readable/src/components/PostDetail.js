import  React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import '../css/component.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import {Link} from 'react-router-dom';
const upVote = "upVote";
const downVote = "downVote";

class PostDetail extends Component {

  handlePostVote = (id, vote) => {
    this.props.handlePostVote(id, vote);
  }

  handleCommentVote = (id, vote, parentId) => {
    this.props.handleCommentVote(id, vote, parentId);
  }

  renderComments = (comments) => {
    if(comments) {
      return(
          <div>
              {
                comments.map(comment => {
                  return(
                    <ListGroup key={comment.id}>
                      <ListGroupItem><h5 className="textLeft">{comment.body}</h5></ListGroupItem>
                      <ListGroupItem className="textLeft">{comment.author}</ListGroupItem>
                      <ListGroupItem className="Center">
                        <ButtonToolbar>
                            <Button disabled> Votes : {comment.voteScore}</Button>
                            <Button bsStyle="primary" onClick={() => this.handleCommentVote(comment.id,upVote, comment.parentId)}>
                              <span>
                                <Glyphicon glyph="thumbs-up"/>
                              </span>
                            </Button>
                            <Button bsStyle="primary" onClick={() => this.handleCommentVote(comment.id,downVote, comment.parentId)}>
                              <span>
                                <Glyphicon glyph="thumbs-down"/>
                              </span>
                            </Button>
                            <Button bsStyle="warning">
                              Edit
                            </Button>
                            <Button bsStyle="danger">Delete</Button>
                        </ButtonToolbar>
                      </ListGroupItem>
                    </ListGroup>
                  )
                })
              }
          </div>
      )
    }
  }
  render() {
    let id = ""
    if(this.props.data.location.pathname) {
      id = this.props.data.location.pathname.split("/")[2];
    }
    let posts = this.props.data.posts.posts;
    let post = null;
    const commentsMap = new Map(this.props.data.comments.comments);
    let comments = commentsMap.get(id);
    let commentCount = (comments) ? comments.length : 0;
    if(posts) {
      posts = posts.filter(post => {
        return post.id === id;
      })
      post = posts[0]
    return (
      <div className="ListGroupBackGround">
        <div>
          <Link to={`/`}>Back to Homepage</Link>
        </div>
        <Panel>
          <ListGroup >
            <ListGroupItem><h3 className="textLeft">Title: {post.title}</h3></ListGroupItem>
            <ListGroupItem><h3 className="textLeft">Body: {post.body}</h3></ListGroupItem>
            <ListGroupItem className="textLeft">{post.author}</ListGroupItem>
            <ListGroupItem className="Center">
              <ButtonToolbar>
                  <Button disabled> Comments : {commentCount}</Button>
                  <Button disabled> Votes : {post.voteScore}</Button>
                  <Button bsStyle="primary" onClick={() => this.handlePostVote(post.id,upVote)}>
                    <span>
                      <Glyphicon glyph="thumbs-up"/>
                    </span>
                  </Button>
                  <Button bsStyle="primary" onClick={() => this.handlePostVote(post.id,downVote)}>
                    <span>
                      <Glyphicon glyph="thumbs-down"/>
                    </span>
                  </Button>
              </ButtonToolbar>
            </ListGroupItem>
            <ListGroupItem>
                {this.renderComments(comments)}
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );}
    else {
      return(<div></div>);
    }
  }
}

export default PostDetail;
