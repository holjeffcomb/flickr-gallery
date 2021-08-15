import ApiKey from '../config';

let cats = {};
let dogs = {};
let computers = {};

fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags="cats"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
        cats = responseData.photos;
    }); 

fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags="dogs"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
        dogs = responseData.photos;
    }); 

fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags="computers"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
        computers = responseData.photos;
    }); 

export {cats, dogs, computers};