import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    });

  }

  render() {
    return(
      <div>
      <h3> Posts </h3>
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

export default connect(mapStateToProps, {fetchPosts})(Posts);
