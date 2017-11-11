import axios from 'axios';

const API_KEY = '191d69a2d843d17f34d94b2c3dae7e5e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);
  // console.log('Request: ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

//  --------------------------------
// | Action flows enter middlewares |
//  --------------------------------
//                 |
// ================================== Redux-Promise Middleware
//                 V
//  --------------------------------
// | Does the action have a promise |
// | as a payload?                  |
//  --------------------------------
//          |                   |
//          V                   V
//      -----                 -----
//     | Yes |               | No  |
//      -----                 -----
//          |                   |
//          V                   V
//  ------------------    --------------------
// | Stop this action |  | Let it go through  |
//  ------------------    --------------------
//          |                               |
//          V                               |
//  --------------------------------        |
// | After promise resolves         |       |
// | after the ajax request finishes|       |
// | , create a new action          |       |
// | and send it to reducers        |       |
//  --------------------------------        |
//          |                               |
//          |                               V
//          |---------------> ---------------
//                           |    Reducers   |
//                            ---------------
