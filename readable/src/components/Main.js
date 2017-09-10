import   React, { Component } from 'react';
import Post from './Post';

class Main extends Component {

  renderPosts = (props) => {
    const posts = this.props.data.posts.posts;
    const comments = new Map(this.props.data.comments.comments);
    if(posts){
      return(
        <div>
            {
              posts.map((post) => {
                post.commentCount = (comments.get(post.id)) ? comments.get(post.id).length : 0;
                return (
                  <div key={post.id}>
                    <Post post ={post}
                      handleEditClick={this.props.handleEditClick}/>
                  </div>
                )
              })
            }
        </div>
      );
    }


  }
  render() {
    return(
        <div>
          {this.renderPosts(this.props)}

        </div>
    )

  }
}

export default Main;
