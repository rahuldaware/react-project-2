import React from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import '../css/component.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
class Post extends React.Component {

  render() {
    return (
      <div className="ListGroupBackGround">
        <Panel>
          <ListGroup >
            <ListGroupItem><h3 className="textLeft">Title</h3></ListGroupItem>
            <ListGroupItem className="textLeft">Author</ListGroupItem>
            <ListGroupItem className="Center">
              <ButtonToolbar>
                  <Button disabled>No of Comments</Button>
                  <Button disabled>Current Score</Button>
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
                  <Button bsStyle="warning">Edit</Button>
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
