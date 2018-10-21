import React, { Component } from "react";
import "./Search.css";
import { AutoComplete, Icon } from "antd";

import { Input } from "antd";

const Search = Input.Search;

class Search extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default Search;
