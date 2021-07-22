import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import ApiKey from './config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: 'money',
      images: []
    };
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${this.state.searchValue}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({images: responseData});
      }); 
  }

  handleSubmit = (search) => {
    search.preventDefault();
    console.log(search);
    console.log(this.state.searchValue);
    this.setState(() => {
      return {searchValue: search}
    });
    console.log(this.state.searchValue);
  }

  render() {
    return (
      <Router>
        <div className="container">      
          <SearchForm searchValue={this.state.searchValue} onSubmit={this.handleSubmit} />
          <Nav />
          <PhotoContainer />
          <h1>{ApiKey}</h1>
        </div>
      </Router> 
      
    );
  }

  
}

export default App;
