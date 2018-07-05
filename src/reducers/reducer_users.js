import _ from 'lodash';
import { FETCH_USERS } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
