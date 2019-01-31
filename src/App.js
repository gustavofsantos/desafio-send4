import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route path="/" exact component={SearchPage} />
          <Route path="/artist/:artistId" component={ArtistPage} />
        </div>
      </Router>
    );
  }
}

export default App;
