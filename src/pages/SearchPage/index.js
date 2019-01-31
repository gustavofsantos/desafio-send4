import React, { Component } from 'react';
import Search from '../../components/Search';
import ResultsPage from '../ResultsPage';
import NoResults from '../../components/NoResults';

import './styles.css';

export default class SearchPage extends Component {

  state = {
    result: []
  }

  onSearch = (result) => {
    this.setState({
      result
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Search onSearch={this.onSearch} />
        </div>
        <div>
          {
            this.state.result.length ?
              <ResultsPage results={this.state.result} />
            :
              <NoResults />
          }
        </div>
      </div>
    );
  }
}