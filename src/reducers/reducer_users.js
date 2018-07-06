import _ from 'lodash';
import { FETCH_USERS, FETCH_USER } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_USER:      
        return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
