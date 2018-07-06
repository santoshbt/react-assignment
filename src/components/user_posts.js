import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserPosts } from '../actions';

class UserPosts extends Component {
  componentWillMount(){
    this.props.fetchUserPosts(this.props.user_id);
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    });

  }

  render() {
    return(
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
    )
  }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchUserPosts})(UserPosts);
