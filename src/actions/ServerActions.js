import AppDispatcher from '../AppDispatcher';


const ServerActions = {
  sendSearchResults(tvShowResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: {tvShowResults},
    })
  },

}

export default ServerActions;