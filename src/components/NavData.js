// import ApiKey from '../config';

let cats = {};
let dogs = {};
let computers = {};

fetch(
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e6016b13c20029b297b76bc3c1ecd9b2&tags="cats"&per_page=24&format=json&nojsoncallback=1`
)
  .then((response) => response.json())
  .then((responseData) => {
    cats = responseData.photos;
  });

fetch(
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e6016b13c20029b297b76bc3c1ecd9b2&tags="dogs"&per_page=24&format=json&nojsoncallback=1`
)
  .then((response) => response.json())
  .then((responseData) => {
    dogs = responseData.photos;
  });

fetch(
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e6016b13c20029b297b76bc3c1ecd9b2&tags="computers"&per_page=24&format=json&nojsoncallback=1`
)
  .then((response) => response.json())
  .then((responseData) => {
    computers = responseData.photos;
  });

export { cats, dogs, computers };
