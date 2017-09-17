import  React, { Component } from 'react';
import Main from './Main';
import PostDetail from './PostDetail';
import Category from './Category';
import Add from './Add';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import { withRouter } from 'react-router';

class Root extends Component {

  handleEditClick = (id, category) => {
    const activeIdObject = {
      id: id,
      category: category
    }
    this.props.updateEditClick(activeIdObject);
  }

  handlePostVote = (id, vote) => {
    this.props.updateVoteToPost(id, vote.trim()).then(() => {
      this.setState({...this.props});
    })
  }

  handleCommentVote =(id, vote, parentId) => {
    this.props.updateVoteToComment(id, vote, parentId).then(() => {
      this.props.fetchComments(parentId).then(() => {
          this.setState({...this.props});
      })
    })
  }

  handleCategoryChange = (category) => {
    this.props.handleCategoryChange(category);
    console.log(category);
  }

  handleBackToHomepage = (category) => {
    this.props.handleBackToHomepage();
    this.setState({...this.props});
  }

  handleAddPost = (post) => {
    this.props.handleAddPost(post);
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchAllPosts().then(() => {
      const posts = this.props.posts.posts;
      posts.forEach((post) => {
          this.props.fetchComments(post.id).then(() => {
            this.setState({...this.props});
          })
      })
    }
    );
  }
  render() {
    return (
        <div className="App">
            <Switch>
              <Route exact path='/' render={() =>
                  <Main data={this.props}
                        handleEditClick={this.handleEditClick}
                        handlePostVote={this.handlePostVote}
                        handleCategoryChange={this.handleCategoryChange}
                        handleBackToHomepage={this.handleBackToHomepage}
                        />}/>
              <Route exact path='/add' render={() =>
                  <Add data={this.props}
                      handleBackToHomepage={this.handleBackToHomepage}
                      handleAddPost = {this.handleAddPost}/>} />
              <Route exact path='/:category/:post_id' render={() =>
                <PostDetail data={this.props}
                            handlePostVote={this.handlePostVote}
                            handleCommentVote={this.handleCommentVote}
                            handleBackToHomepage={this.handleBackToHomepage}/>} />
              <Route path='/:category' render={() =>
                <Category data={this.props}
                  handlePostVote={this.handlePostVote}
                  handleCommentVote={this.handleCommentVote}
                  handleEditClick={this.handleEditClick}
                  handleBackToHomepage={this.handleBackToHomepage}/>}/>
            </Switch>
          </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(Actions.fetchCategories()),
    fetchAllPosts: () => dispatch(Actions.fetchAllPosts()),
    fetchComments: (id) => dispatch(Actions.fetchComments(id)),
    updateVoteToPost: (id, vote) => dispatch(Actions.updateVoteToPost(id, vote)),
    updateVoteToComment: (id, vote, parentId) => dispatch(Actions.updateVoteToComment(id, vote, parentId)),
    updateEditClick: (id) => dispatch(Actions.updateEditClick(id)),
    handleCategoryChange: (category) => dispatch(Actions.updateCategory(category)),
    handleBackToHomepage: () => dispatch(Actions.handleBackToHomepage()),
    handleAddPost: (post) => dispatch(Actions.handleAddPost(post))
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments,
    activeView: state.activeView
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
