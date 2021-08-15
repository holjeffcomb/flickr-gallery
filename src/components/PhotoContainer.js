import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoContainer = (props) => {

    const results = props.images.photo;
    let photos;

    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo 
                key={photo.id} 
                id={photo.id} 
                secret={photo.secret} 
                server={photo.server} 
                alt={photo.title}
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

export default PhotoContainer;