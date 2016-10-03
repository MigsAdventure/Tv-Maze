import {get} from 'axios';
import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  receivetvShowSearch(tvShow) {
    get(`http://api.tvmaze.com/search/shows?q=${tvShow}`)
    .then(tvShow => {
      ServerActions.sendSearchResults(tvShow.data);
    })
    .catch(err => {
      console.log('err ', err);
    })
  },

}

export default API;