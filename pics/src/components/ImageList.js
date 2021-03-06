import React from 'react';
import ImageCard from './ImageCard.js';
import './ImageList.css';

class ImageList extends React.Component {
    state = {};

    render = () => {
        const images = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image} />
        });

        return (
            <div className="image-list">
                {images}
            </div>
        );
    }
}

export default ImageList;