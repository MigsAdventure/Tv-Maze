import React, {Component} from 'react'
import TvActions from '../actions/TvActions'
import TvStore from '../stores/TvStore'


export default class ScreenShots extends Component {
  constructor() {
    super();

    this.state = {
      favorites : TvStore.getFavorites(),
    }

    this._onChange = this._onChange.bind(this);
  }


  componentWillMount() {
    TvStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TvStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      favorites: TvStore.getFavorites(),
    })
  }

  _removeFavorite(id) {
    let removeFav  = id;
    TvActions.removeFav(id);
  }


  render() {
    let {favorites} = this.state;

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
                favorites.map((show, i) => (
                  <tr key= {show.id}>
                    <td>{show.name}</td>
                    <td>{show.genre}</td>
                    <td><button className="btn btn-success" onClick={this._removeFavorite.bind(this, show.id)}>Remove</button></td>
                  </tr>

                ))
              }
        </tbody>
      </table>
    )
  }
}

