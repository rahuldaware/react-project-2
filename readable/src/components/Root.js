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

  handleEditClick = (id) => {
    this.setState({...this.props,
                  activeId: id,
                  activePage: 'categoryView'});
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
                        handlePostVote={this.handlePostVote}/>}/>
              <Route exact path='/add' render={() =>
                  <Add />} />
              <Route exact path='/:category/:post_id' render={() =>
                <PostDetail data={this.props}
                            handlePostVote={this.handlePostVote}
                            handleCommentVote={this.handleCommentVote}/>} />
              <Route path='/:category' render={() =>
                <Category categories={this.props.categories}/>}/>
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
    updateVoteToComment: (id, vote, parentId) => dispatch(Actions.updateVoteToComment(id, vote, parentId))
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
