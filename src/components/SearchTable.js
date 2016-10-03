import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import TvActions from '../actions/TvActions'
import TvStore from '../stores/TvStore';

export default class SearchTable extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.state = {
      results: TvStore.getSearchResults(),
    }
  }

  componentWillMount() {
    TvStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TvStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: TvStore.getSearchResults()
    })
  }

  _setFavorite(show) {
    let btn = document.getElementById(show.id);
    if (btn.innerHTML === 'Favorite') {
      btn.innerHTML = 'My Favorite'
    } else {
      btn.innerHTML = 'Favorite'
    }

    TvActions.sendFavorite(show);
  }

  render() {
    let {results} = this.state;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
              {
                results.map((show, i) => (
                  <tr key= {show.id}>
                    <td>{show.name}</td>
                    <td>{show.genre}</td>
                    <td><button className="btn btn-default"  id={show.id} onClick={this._setFavorite.bind(this, show)}>Favorite</button></td>
                  </tr>

                ))
              }
        </tbody>
      </table>
    )
  }

}
