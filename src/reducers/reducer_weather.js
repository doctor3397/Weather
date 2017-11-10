import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concact([ action.payload.data ]); // creates a new array and contact the old with the new, return a new array
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [city, city]]
  }
  return state;
}
