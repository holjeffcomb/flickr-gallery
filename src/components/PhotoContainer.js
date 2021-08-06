import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    const { match: {params}} = props;
    console.log(params.query);

    let photos;

    if (props.images.photo) {
        photos = props.images.photo.map(photo => <Photo key={photo.id} id={photo.id} secret={photo.secret} server={photo.server} />);
    } 



    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>

                {
                    photos ? photos : <p>Loading...</p>
                }

                
                { 
                    //Not Found 
                }
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
    
}

export default PhotoContainer;