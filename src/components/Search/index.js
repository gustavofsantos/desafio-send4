import React, { Component } from 'react';
import fetchSearch from '../../libs/fetchSearch';
import "./styles.css";

export default class Search extends Component {

  state = {
    search: ''
  }

  onSearchChange = (ev) => {
    const search = ev.target.value;
    this.setState({
      search
    });
  }

  doSearch = async (ev) => {
    ev.preventDefault();
    try {
      const result = await fetchSearch(this.state.search);
      this.props.onSearch(result.results);
    } catch (e) {
      // 
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <form className="searchContainer__form" onSubmit={this.doSearch}>
          <input
            className="searchContainer__search"
            type="text"
            placeholder="Type a artist name."
            onChange={this.onSearchChange}
            value={this.state.search}
          />
        </form>
      </div>
    );
  }
}