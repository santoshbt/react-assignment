import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../actions';
import { bindActionCreators } from 'redux';

import UserPosts from './user_posts';

class UserShow extends Component {
  componentDidMount(){
    if(!this.props.user){
      const { id } =  this.props.match.params;
      this.props.fetchUser(id);

    }
  }

  render() {
    const { user } = this.props;
    const { id } =  this.props.match.params;
    if(!user) {
      return <div>Loading ...</div>
    }

    return(
      <div>
        <h3>Name: {user.name}</h3>
        <h4>Email: {user.email}</h4>
        <h4>Address: {user.address.street} </h4>
        <h4>City: {user.address.city} </h4>
        <UserPosts user_id={id} />
      </div>
    )
  }
}

function mapStateToProps({ users }, ownProps){
  return { user: users[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {fetchUser})(UserShow);
