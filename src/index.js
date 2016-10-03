import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import TvStore from './stores/TvStore'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import SearchTable from './components/SearchTable'
import FavoritesList from './components/FavoritesList'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
    <IndexRoute component={SearchPage}/>
    <Route path='/searchResults' component={SearchTable}/>
    <Route path='/favorites' component={FavoritesList}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
