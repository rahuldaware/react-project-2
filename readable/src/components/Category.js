import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';

class Category extends Component {

  renderPosts = (props) => {
    let category = ''
    if(props.data.location.pathname) {
      category = props.data.location.pathname.split("/")[1];
    }
    let posts = null
    let allPosts = props.data.posts.posts
    if(allPosts) {
        posts = allPosts.filter((post) => {
          return post.category === category;
        });
    }
    const comments = new Map(this.props.data.comments.comments);
    if(posts) {
      return(
        posts.map((post) => {
          post.commentCount = (comments.get(post.id)) ? comments.get(post.id).length : 0;
          return (
            <div key={post.id}>
              <Post post ={post}
                handleEditClick ={this.props.handleEditClick}
                handlePostVote = {this.props.handlePostVote}/>
            </div>
          )
      }))
    }
  }
  render() {
    return (
        <div>
          <div>
            <Link to="/" onClick = {() => this.props.handleBackToHomepage()}>Back to Homepage</Link>
          </div>
          <div>
            {this.renderPosts(this.props)}
          </div>
        </div>
    );
  }
}

export default Category;
