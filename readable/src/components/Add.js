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
    let post = {}
    let id = {}
    let posts = {}
    let title = {}
    let body = {}
    let author = {}
    let category = {}
    if(this.props.data && this.props.data.posts && this.props.data.editPost) {
      id = this.props.data.editPost.editPost
      posts = this.props.data.posts.posts;
      if(posts) {
        post = posts.filter(p => {
          return p.id === id
        })[0]
        if(post) {
          title = post.title
          body = post.body
          author = post.author
          category = post.category
        }
      }
    }

    return (
        <div>
          <div>
            <Link to="/" onClick = {() => this.props.handleBackToHomepage()}>Back to Homepage</Link>
          </div>
          Add
          <form onSubmit={(event) => this.handleSubmit(event)}>

              <label>
                Title:
                  <input type="text" name="title" placeholder={title.length>0 ? title : ""} value={this.state.title} onChange={this.handleTitleChange}/>
              </label>

              <label>
                Body:
                  <input type="text" name="body" placeholder={body.length>0 ? body : ""} value={this.state.body} onChange={this.handleBodyChange}/>
              </label>

              <label>
                Author:
                  <input type="text" name="author" placeholder={author.length>0 ? author : ""} value={this.state.author} onChange={this.handleAuthorChange}/>
              </label>

              <label>
                Category:
                    <input type="text" name="category" placeholder={category.length>0 ? category : ""} value={this.state.category} onChange={this.handleCategoryChange}/>
              </label>
                <input type="submit" value="Submit" />

          </form>
        </div>
    );
  }
}

export default Add;
