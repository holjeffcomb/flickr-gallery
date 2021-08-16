import React, { Component } from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

class PhotoContainer extends Component {

    render() {
        const results = this.props.images.photo;
        let photos;

        // populate photos array with Photo JSX objects
        if (results.length > 0) {
            photos = results.map(photo => 
                <Photo 
                    key={photo.id} 
                    id={photo.id} 
                    secret={photo.secret} 
                    server={photo.server} 
                    alt={this.props.alt}
                />
            );
        } else {
            return (<NoResults />);
        }



        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {
                        photos 
                    }       
                </ul>
            </div>
        );
    }

    
    
}

export default PhotoContainer;