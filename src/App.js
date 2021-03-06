import "./css/index.css";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";
import { cats, dogs, computers } from "./components/NavData";
// import ApiKey from "./config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import loading from "./Images/loading-2.gif";

class App extends Component {
  state = {
    images: [],
    isLoading: true,
    searchValue: "desert",
  };

  // fetch default images upon loading app
  componentDidMount() {
    this.search(this.state.searchValue);
  }

  // method to handle forward/back buttons
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.search(this.props.location.pathname.replace("/search/", ""));
    }
  }

  // fetch data from api and update state
  search = (query) => {
    this.setState({ isLoading: true });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e6016b13c20029b297b76bc3c1ecd9b2&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoading: false,
          images: responseData.photos,
          searchValue: query,
        });
        console.log("SEARCH");
        console.log(this.state.images);
      });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm onSubmit={this.search} history={this.props.history} />

          <Nav />

          {this.state.isLoading ? (
            <img src={loading} alt="Loading" />
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PhotoContainer
                    images={this.state.images}
                    alt={this.state.searchValue}
                    search={this.search}
                  />
                )}
              />

              <Route
                path="/cats"
                render={() => (
                  <PhotoContainer
                    images={cats}
                    alt="Cats"
                    search={this.search}
                  />
                )}
              />

              <Route
                path="/dogs"
                render={() => (
                  <PhotoContainer
                    images={dogs}
                    alt="Dogs"
                    search={this.search}
                  />
                )}
              />

              <Route
                path="/computers"
                render={() => (
                  <PhotoContainer
                    images={computers}
                    alt="Computers"
                    search={this.search}
                  />
                )}
              />

              <Route
                exact
                path="/search/:query"
                render={({ match }) => (
                  <PhotoContainer
                    images={this.state.images}
                    alt={match.params.query}
                    search={this.search}
                  />
                )}
              />

              <Route render={() => <NotFound />} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
