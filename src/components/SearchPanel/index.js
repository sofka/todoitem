import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchText: ''
  }

  onChangeSearchText = (e) => {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
    this.props.searchItems(searchText);
  }
  render() {

    return (
      <input className="search-panel"
        type="text"
        placeholder="input text for search"
        onChange={this.onChangeSearchText}
        value={this.state.searchText}
      />
    );
  }
};

