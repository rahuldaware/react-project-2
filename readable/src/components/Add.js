import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UUID from 'uuid';

class Add extends Component {
  componentWillMount() {
    this.setState({
    })
  }
  handleSubmit =(event) => {
    event.preventDefault();
    const state = this.state;
    if(state.title && state.body && state.author && state.category) {
      let post = {}
      post.id = UUID()
      post.timestamp = Date.now()
      post.title = state.title
      post.body = state.body
      post.author = state.author
      post.category = state.category
      this.props.handleAddPost(post);
    }
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }
  handleBodyChange = (event) => {
    this.setState({body: event.target.value});
  }
  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  }
  handleCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }
  render() {

    return (
        <div>
          <div>
            <Link to="/" onClick = {() => this.props.handleBackToHomepage()}>Back to Homepage</Link>
          </div>
          Add
          <form onSubmit={(event) => this.handleSubmit(event)}>

              <label>
                Title:
                  <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
              </label>

              <label>
                Body:
                  <input type="text" name="body" value={this.state.body} onChange={this.handleBodyChange}/>
              </label>

              <label>
                Author:
                  <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange}/>
              </label>

              <label>
                Category:
                    <input type="text" name="category" value={this.state.category} onChange={this.handleCategoryChange}/>
              </label>
                <input type="submit" value="Submit" />

          </form>
        </div>
    );
  }
}

export default Add;
