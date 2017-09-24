import   React, { Component } from 'react';
import Post from './Post';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Main extends Component {

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
  componentDidMount() {
    this.setState({...this.props});
  }
  renderPosts = (props) => {
    let posts = this.props.data.posts.posts;
    const comments = new Map(this.props.data.comments.comments);
    const state = this.state;

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
    if(posts){
      return(
        <div>
            {
              posts.filter((post) => {
                return post.deleted === false;
              }).map((post) => {
                post.commentCount = (comments.get(post.id)) ? comments.get(post.id).length : 0;
                return (
                  <div key={post.id}>
                    <Post post ={post}
                      handleEditClick ={this.props.handleEditClick}
                      handlePostVote = {this.props.handlePostVote}
                      handleDeletePost = {this.props.handleDeletePost}
                      handleEditPost = {this.props.handleEditPost}
                      handleAddComment={this.props.handleAddComment}/>
                  </div>
                )
            })
            }
        </div>
      );
    }
  }

  renderCategoryChange = (category) => {
    this.props.handleCategoryChange(category);
    this.setState({
      ...this.props,
      categoryView: true,
      categoryForView: category
    })
  }


  renderCategories = (data) => {
    let categories = null;
    if(data) {
      categories = data.categories.categories;
    }
    if(categories) {
      return(
        <div>
          Category View :
          <select
            onChange={(event) => this.renderCategoryChange(event.target.value)}>
              <option></option>
              {
                categories.map((category) => {
                  return(
                      <option key={category.name} value={category.name}>{category.name}</option>
              )})}
          </select>
        </div>
  )}}

  render() {
    if(this.props.data.activeView && this.props.data.activeView.activeId && this.props.data.activeView.activeId.length > 0) {
      return (
        <div>
          <Redirect to={this.props.data.activeView.activeId} />
        </div>
      )
    }
    else if(this.props.data.activeView && this.props.data.activeView.activeCategory && this.props.data.activeView.activeCategory.length > 0) {
      return (
        <div>
          <Redirect to={this.props.data.activeView.activeCategory} />
        </div>
      )
    }
    return(
      <div>
        <div>
          {this.renderCategories(this.props.data)}
        </div>
        <div>
          <ButtonToolbar>
            <Button onClick= {() => this.handleSortByDate()}>Sort by Date</Button>
            <Button onClick= {() => this.handleSortByVote()}>Sort by Votes</Button>
          </ButtonToolbar>
        </div>
        <div>
          {this.renderPosts(this.props.categories)}
        </div>
        <div className="open-search">
          <Button><Link to="/add">Add Post</Link></Button>
        </div>
        </div>
    )
  }
}

export default Main;
