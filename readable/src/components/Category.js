import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Category extends Component {

  handleSortByDate = () => {
    this.setState({...this.props,
                  sortByDate : 1,
                  sortByVote: null})
  }
  handleSortByVote = () => {
    this.setState({...this.props,
                  sortByDate : null,
                  sortByVote: 1});
  }

  renderPosts = (props) => {
    let category = ''
    let state = this.state;
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
    if(state && state.sortByVote) {
      posts = posts.sort((a, b) => {
        return b.voteScore - a.voteScore;
      })
    }
    if(state && state.sortByDate) {
      posts = posts.sort((a, b) => {
        return b.timestamp - a.timestamp;
      })
    }
    if(posts) {
      return(
        posts.filter((post) => {
          return post.deleted === false;
        }).map((post) => {
          post.commentCount = (comments.get(post.id)) ? comments.get(post.id).length : 0;
          return (
            <div key={post.id}>
              <Post post ={post}
                handleEditClick ={this.props.handleEditClick}
                handlePostVote = {this.props.handlePostVote}
                handleDeletePost = {this.props.handleDeletePost}/>
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
            <ButtonToolbar>
              <Button onClick= {() => this.handleSortByDate()}>Sort by Date</Button>
              <Button onClick= {() => this.handleSortByVote()}>Sort by Votes</Button>
            </ButtonToolbar>
          </div>
          <div>
            {this.renderPosts(this.props)}
          </div>
        </div>
    );
  }
}

export default Category;
