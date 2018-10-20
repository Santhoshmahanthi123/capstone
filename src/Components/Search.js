import React, { Component } from 'react';
import './Search.css'
import { AutoComplete, Icon } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

class Search extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
        <div>
             <span>
      <AutoComplete className="left"
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
     <Icon type="search" /></span>
      </div>
    );
  }
}
export default Search;