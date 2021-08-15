import React from 'react'
import img from '../Images/sad-robot.JPG'

// Results not found message to display when there is no valid search submit
const NoResults = () =>{
    return(
        <div className="photo-container">
            <h2>No Results Found</h2>
                <p>
                    Refine your search and try again
                </p>
                <img src={img} alt="No Results"/>
        </div>
    )
}

export default NoResults