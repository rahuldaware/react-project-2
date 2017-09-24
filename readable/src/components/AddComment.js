import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UUID from 'uuid';

class AddComment extends Component {

  componentWillMount() {
    this.setState({
    })
  }

    handleSubmit = (event) => {
      event.preventDefault();
      const state = this.state;
      if(this.props.data.location.pathname) {
        let comment = {}
        let parentId = this.props.data.addComment.parentId;
        comment.id = UUID()
        comment.timestamp = Date.now()
        comment.parentId = parentId
        comment.body = state.body
        comment.author = state.author
        this.props.handlePostComment(comment);
      }

    }
    handleBodyChange = (event) => {
      this.setState({body: event.target.value});
    }
    handleAuthorChange = (event) => {
      this.setState({author: event.target.value});
    }
    render() {
      return (
        <div>
          <div>
            <Link to="/" onClick = {() => this.props.handleBackToHomepage()}>Back to Homepage</Link>
          </div>
          <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <label>
                  Body:
                    <input type="text" name="body" value={this.state.body} onChange={this.handleBodyChange}/>
                </label>

                <label>
                  Author:
                    <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}/>
                </label>
                  <input type="submit" value="Submit" />

            </form>
          </div>
        </div>
      );
    }
}

export default AddComment;
