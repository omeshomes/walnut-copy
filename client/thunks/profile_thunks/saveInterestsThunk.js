/**
 * Created by ebadgio on 7/24/17.
 */
import axios from 'axios';
const URL = 'http://localhost:3000/';

const saveInterestsThunk = (interests) => (dispatch) => {
  axios.post(URL + 'db/save/interests', {
    interestsArray: interests
  })
    .then((success) => {
      dispatch({type: 'GET_USER_DATA'});
    })
    .catch((err) =>{
      console.log('error in saving interests', err);
    });
};
export default saveInterestsThunk;
