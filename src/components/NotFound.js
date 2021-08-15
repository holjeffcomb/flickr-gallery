import React from 'react';
import img from '../Images/koda-sad.png'

const NotFound = () => {
    return(
        <div className="photo-container">
            <h2>404 Page Not Found</h2>
            <p>
                <strong>Check URL and try again</strong>
            </p>
            <img src={img} alt="Page Not Found" />
        </div>
    )
}

export default NotFound;