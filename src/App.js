import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import SearchPhotoContainer from './components/SearchPhotoContainer';
import URLPhotoContainer from './components/URLPhotoContainer';
import ApiKey from './config';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

let history = createBrowserHistory();
let defaultSearchValue = 'house';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.fetchData(defaultSearchValue);
  }

  handleSubmit = (search) => {
    history.push(`/search/${search}`);    
    this.fetchData(search);
    
  }

  fetchData = (search) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({images: responseData.photos});
      }); 
  }

  render() {
    return (
      <Router>
        <div className="container">  
          <SearchForm onSubmit={this.handleSubmit} />
          <Nav />

          <Route 
            exact path="/" 
            render={
              () => <SearchPhotoContainer images={this.state.images} /> 
            }   
          />

          <Route 
            path="/search/:query" 
            render={
              (props) => <URLPhotoContainer {...props} images={this.state.images} /> 
            }   
          />
        </div>
      </Router> 
      
    );
  }

  
}

export default App;