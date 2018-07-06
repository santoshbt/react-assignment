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
    const { posts } = this.props;
    if(!posts) {
      return <div>Loading ...</div>
    }

    return(
      <div>
        <h5>Posts</h5>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchUserPosts})(UserPosts);
