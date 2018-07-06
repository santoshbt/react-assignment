import React, {Component} from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
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
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      )
    });

  }

  render() {
    const { users } = this.props;
    if(!users) {
      return <div>Loading ...</div>
    }

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
