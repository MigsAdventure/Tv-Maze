import API from '../API';
import AppDispatcher from '../AppDispatcher';

const TvActions = {
  fetchShowSearch(tvShow) {
    API.receivetvShowSearch(tvShow);
  },

  sendFavorite(show) {
  AppDispatcher.dispatch({
    type: 'GET_FAVORITE',
    payload: {show},
  })
  },

  removeFav(favId) {
    AppDispatcher.dispatch({
      type: 'REMOVE_FAV',
      payload: {favId},
    })
  },
}

export default TvActions;