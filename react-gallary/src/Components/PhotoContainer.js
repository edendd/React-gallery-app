import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import NotFound from './NotFound';
import Photo from './Photo';

function PhotoContainer (props) {

// iterates the array of the live photo on flicker 
    let photos = props.data.map (photo => 
        <Photo
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={photo.id}
        />
    );

    // return the picture inside div container saw it will be able to be passed to the ul.
return (
    <div className="photo-container">
    {(props.loading) ? <p>Loading</p> :
    (!props.data.length && !props.loading) ? <NotFound/> :
    <div>
        <h2> Results: {props.title} </h2>
        <ul> {photos} </ul>
    </div>
    }
</div>
  );
}



export default withRouter(PhotoContainer)  