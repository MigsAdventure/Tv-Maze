import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';


let _searchResults = [];
let _favorites = [];
 
class TvStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      let {type, payload} = action;
      switch(type) {

        case 'RECEIVE_SEARCH_RESULTS':

          let tvShows = payload.tvShowResults.map(tvShow => {
          let obj = {
          name: tvShow.show.name,
          id: tvShow.show.id,
          genre: tvShow.show.genres
        }
        return obj;
        });

       _searchResults = tvShows;
        this.emit('CHANGE');
        break;

        case 'GET_FAVORITE' :
          let fav = payload.show;
          _favorites.push(fav);
        this.emit('CHANGE')
        break;

        case 'REMOVE_FAV':
        let undeletedFav = _favorites.filter( fav => {
          if (payload.favId === fav.id) {
            return;
          } else {
            return fav;
          }
        })
        _favorites = undeletedFav;
        this.emit('CHANGE');
        break;
      }//end of switch
    }) //end of dispatcher
  }//end of constructor

 startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _searchResults;
  }

  getFavorites() {
    return _favorites;
  }

}

export default new TvStore();