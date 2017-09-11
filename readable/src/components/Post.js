import React from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import '../css/component.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

const upVote = "upVote";
const downVote = "downVote";
class Post extends React.Component {
 handleEditClick = (id) => {
   this.props.handleEditClick(id);
 }
 handlePostVote = (id, vote) => {
   this.props.handlePostVote(id, vote);
 }

  render() {
    const post = this.props.post;
    if(this.state && this.state.editClick) {
      return <Redirect push to="/:category/:post_id" />
    }
    return (

      <div className="ListGroupBackGround">
        <Panel>
          <ListGroup >
            <ListGroupItem><h3 className="textLeft">{post.title}</h3></ListGroupItem>
            <ListGroupItem className="textLeft">{post.author}</ListGroupItem>
            <ListGroupItem className="Center">
              <ButtonToolbar>
                  <Button disabled> Comments : {post.commentCount}</Button>
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

                  <Button bsStyle="warning" onClick={() => this.handleEditClick(post.id)}>
                    <Link to={`/${post.category}/${post.id}`}>Edit</Link>
                  </Button>
                  <Button bsStyle="danger">Delete</Button>
              </ButtonToolbar>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default Post;
