import React, { Component } from 'react';
import Photo from './Photo';
class PhotoContainer extends Component {

    

    render () {

        let photos;

        if (this.props.images.photo) {
            photos = this.props.images.photo.map(photo => {
                return <Photo id={photo.id} secret={photo.secret} server={photo.server}/>
            });
        }

        console.log(photos);



        

        

        // const photos = this.props.images.photos.map(photo => {
        //     return {
        //         id: photo.id,
        //         secret: photo.secret,
        //         server: photo.server
        //     }
        // });

        

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>

                    {
                        photos ? photos : <p>Loading...</p>
                    }

                    
                    <li>
                        <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
                    </li>
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
}

export default PhotoContainer;