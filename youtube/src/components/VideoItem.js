import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
    state = {video: this.props.video};

    onVideoClick = () => {
        this.props.onVideoSelect(this.state.video);
    };

    render = () => {
        return (
            <div className="item video-item" onClick={this.onVideoClick}>
                <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title} className="ui image" />
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;