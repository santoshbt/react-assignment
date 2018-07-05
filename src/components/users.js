import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { fetchUsers } from '../actions';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers(){
    return _.map(this.props.users, user => {
      return(
        <li className="list-group-item" key={user.id}>
          {user.name}
        </li>
      )
    });

  }

  render() {
    return(
      <div>
      <h3> Users </h3>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, {fetchUsers})(Users);
