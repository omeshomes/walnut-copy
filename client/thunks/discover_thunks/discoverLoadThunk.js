/**
 * Created by ebadgio on 7/24/17.
 */
import axios from 'axios';
const URL = 'http://localhost:3000/';

const discoverLoadThunk = (dispatch) => {
  axios.get(URL + 'db/get/discoverinfo', {})
        .then((response) => {
          console.log('discover response', response);
          dispatch({
            type: 'GET_DISCOVER_DATA_DONE',
            defaultFilters: response.data.defaultFilters,
            otherFilters: response.data.otherFilters,
            posts: response.data.posts
          });
        })
        .catch((err) => {
          console.log('error in discoverThunk', err);
          dispatch({type: 'GET_DISCOVER_DATA_ERROR'});
        });
};

export default discoverLoadThunk;
