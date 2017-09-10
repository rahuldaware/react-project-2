import React from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import '../css/component.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
class Post extends React.Component {
 handleEditClick = (event) => {
   this.props.handleEditClick(this.props.post.id);
 }
  render() {
    const post = this.props.post;
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
                  <Button bsStyle="primary">
                    <span>
                      <Glyphicon glyph="thumbs-up"/>
                    </span>
                  </Button>
                  <Button bsStyle="primary">
                    <span>
                      <Glyphicon glyph="thumbs-down"/>
                    </span>
                  </Button>
                  <Button bsStyle="warning" onClick={this.handleEditClick}>Edit</Button>
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
