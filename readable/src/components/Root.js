import  React, { Component } from 'react';
import Main from './Main';
import PostDetail from './PostDetail';
import Category from './Category';
import Add from './Add';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';


class Root extends Component {
  handleEditClick = (id) => {
    console.log(id);
    
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
            <BrowserRouter>
              <div>
                <Switch>
                  <Route exact path='/' render={() =>
                      <Main data={this.props}
                        handleEditClick={this.handleEditClick}/>}/>
                  <Route exact path='/add' render={() =>
                      <Add />} />
                  <Route path='/:category/:post_id' render={() =>
                    <PostDetail />} />
                  <Route path='/:category' render={() =>
                    <Category categories={this.props.categories}/>}/>
                </Switch>
              </div>
            </BrowserRouter>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(Actions.fetchCategories()),
    fetchAllPosts: () => dispatch(Actions.fetchAllPosts()),
    fetchComments: (id) => dispatch(Actions.fetchComments(id))
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
