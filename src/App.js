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
    this.setState({
      searchValue: search
    });
    this.fetchData(search);
    
  }

  fetchData = (search) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${this.state.searchValue}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({images: responseData});
      }); 
  }

  render() {
    return (
      <Router>
        <div className="container">      
          <SearchForm onSubmit={this.handleSubmit} />
          <Nav />
          <PhotoContainer />
        </div>
      </Router> 
      
    );
  }

  
}

export default App;
