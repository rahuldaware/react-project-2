import  React, { Component } from 'react';
import Main from './Main';
import PostDetail from './PostDetail';
import Category from './Category';
import Add from './Add';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/add' component={Add} />
                <Route path='/:category/:post_id' component={PostDetail} />
                <Route path='/:category' component={Category} />

              </Switch>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default Root;
