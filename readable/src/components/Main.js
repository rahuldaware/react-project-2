import   React, { Component } from 'react';
import Post from './Post';
import {Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Main extends Component {

  componentDidMount() {
    this.setState({});
  }
  renderPosts = (props) => {
    const posts = this.props.data.posts.posts;
    const comments = new Map(this.props.data.comments.comments);
    console.log(this.props.data);
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
                      handleDeletePost = {this.props.handleDeletePost}/>
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
