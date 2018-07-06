import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import rootReducer from './reducers/root_reducer';
import Username from './components/username';
import Users from './components/users';
import Posts from './components/posts';
import PostShow from './components/post_show';
import UserShow from './components/user_show';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(rootReducer)}>
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route path="/users/:id" component={UserShow} />
        <Route path="/users" component={Users} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/posts" component={Posts} />
        <Route path="/" component={Username} />
      </Switch>
    </div>
  </BrowserRouter>
 </Provider>
 , document.querySelector('.container'));
