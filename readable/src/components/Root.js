import  React, { Component } from 'react';
import Main from './Main';
import PostDetail from './PostDetail';
import Category from './Category';
import Add from './Add';
import AddComment from './AddComment';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import UpdateComment from './UpdateComment';
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
  }

  handleBackToHomepage = (category) => {
    this.props.handleBackToHomepage();
    this.props.handleEditPost(null);
    this.props.handleAddComment(null);
    this.setState({...this.props});
  }

  handleAddPost = (post) => {
    this.props.handleAddPost(post);
  }

  handleEditPost = (id) => {
    this.props.handleEditPost(id);
    this.setState({...this.props});
  }

  handleDeletePost = (id) => {
    this.props.handleDeletePost(id);
  }

  handleDeleteComment = (id, parentId) => {
    this.props.handleDeleteComment(id, parentId);
    this.props.fetchComments(parentId).then(() => {
        this.setState({...this.props});
    })
  }
  handleAddComment = (parentId) => {
    this.props.handleAddComment(parentId);
  }

  handlePostComment = (comment) => {
    this.props.handlePostComment(comment, comment.parentId);
    this.setState({...this.props});
  }

  handleUpdatePost =(post) => {
    let id = post.id;
    let body = {}
    body.title = post.title
    body.body = post.body
    this.props.handleUpdatePost(id, body);
  }

  handleUpdateComment = (updatedComment) => {
    let parentId = updatedComment.parentId
    let id = updatedComment.id
    let body = {}
    body.body = updatedComment.body
    body.timestamp = updatedComment.timestamp
    this.props.handleUpdateComment(id, parentId, body);
  }

  openUpdateComment = (parentId, commentId) => {
    var openCommentUpdate = {}
    openCommentUpdate.parentId = parentId;
    openCommentUpdate.commentId = commentId;
    this.props.openUpdateComment(openCommentUpdate);
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
                        fetchCategories={this.props.fetchCategories}
                        fetchAllPosts={this.props.fetchAllPosts}
                        fetchComments={this.props.fetchComments}
                        handleEditClick={this.handleEditClick}
                        handlePostVote={this.handlePostVote}
                        handleCategoryChange={this.handleCategoryChange}
                        handleBackToHomepage={this.handleBackToHomepage}
                        handleDeletePost={this.handleDeletePost}
                        handleEditPost = {this.handleEditPost}
                        handleAddComment={this.handleAddComment}
                        />}/>
              <Route exact path='/add' render={() =>
                  <Add data={this.props}
                      handleBackToHomepage={this.handleBackToHomepage}
                      handleAddPost = {this.handleAddPost}
                      handleUpdatePost ={this.handleUpdatePost}
                      />} />
              <Route exact path='/:category/:post_id' render={() =>
                <PostDetail data={this.props}
                            handlePostVote={this.handlePostVote}
                            handleCommentVote={this.handleCommentVote}
                            handleBackToHomepage={this.handleBackToHomepage}
                            handleDeleteComment={this.handleDeleteComment}
                            handleAddComment={this.handleAddComment}
                            openUpdateComment={this.openUpdateComment}
                            />} />
              <Route exact path='/comment' render={() =>
                  <AddComment data={this.props}
                              handleAddComment={this.handleAddComment}
                              handleBackToHomepage={this.handleBackToHomepage}
                              handlePostComment={this.handlePostComment}/>}/>
              <Route exact path='/updateComment' render={() =>
                  <UpdateComment data={this.props}
                                handleBackToHomepage={this.handleBackToHomepage}
                                handleUpdateComment={this.handleUpdateComment}/>}/>
              <Route exact path='/:category' render={() =>
                <Category data={this.props}
                  handlePostVote={this.handlePostVote}
                  handleCommentVote={this.handleCommentVote}
                  handleEditClick={this.handleEditClick}
                  handleBackToHomepage={this.handleBackToHomepage}
                  handleDeletePost={this.handleDeletePost}/>}/>
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
    handleAddPost: (post) => dispatch(Actions.handleAddPost(post)),
    handleEditPost: (id) => dispatch(Actions.handleEditPost(id)),
    handleDeletePost: (id) => dispatch(Actions.handleDeletePost(id)),
    handleDeleteComment: (id, parentId) => dispatch(Actions.handleDeleteComment(id, parentId)),
    handleAddComment: (parentId) => dispatch(Actions.handleAddComment(parentId)),
    handlePostComment: (comment, parentId) => dispatch(Actions.handlePostComment(comment, parentId)),
    handleUpdatePost: (id, body) => dispatch(Actions.handleUpdatePost(id, body)),
    handleUpdateComment: (id, parentId, body) => dispatch(Actions.handleUpdateComment(id, parentId, body)),
    openUpdateComment: (openCommentUpdate) => dispatch(Actions.openUpdateComment(openCommentUpdate))
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments,
    activeView: state.activeView,
    editPost: state.editPost,
    addComment: state.addComment,
    updateComment: state.updateComment
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
