import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, FETCH_USER_POSTS } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_USER_POSTS:
        return action.payload.data;
    default:
      return state;
  }
}
