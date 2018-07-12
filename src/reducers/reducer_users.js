import _ from 'lodash';
import { FETCH_USERS, FETCH_USER } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      // return _.mapKeys(action.payload.data, 'id');
        console.log("State is ", state);
        return action.payload
    case FETCH_USER:      
        // const post = action.payload;
        // const newstate = {...state};
        // newstate[post.id] = post.id;
        // return newstate

        return {[action.payload.id]: action.payload , ...state};
        
    default:
      return state;
  }
}
