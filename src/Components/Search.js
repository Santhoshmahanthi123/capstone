import React, { Component } from "react";
import "./Search.css";
import { AutoComplete, Icon } from "antd";
import axios from 'axios'
import { Input } from "antd";
import {Redirect} from 'react-router-dom'

const Search = Input.Search;

class Search extends Component {
  state={
    isValue: false
  }
  handleSearch =()=>{

    value => console.log(value)
    axios.get("url/",value)
      .then((response) =>{
        console.log(response)
        this.setState({
          isValue:true
        })
      })
      //create action for filtered items
      // u will get the data of 
  }
  render() {
    if(isValue){
      <Redirect to={{
        pathname: "cards",
        state={
          //will have the data of filtered items
        }
      }}/>
    }
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={this.handleSearch}
          enterButton
        />
      </div>
    );
  }
}

export default Search;
