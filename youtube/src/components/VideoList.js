import React from 'react';
import VideoItem from './VideoItem.js';

class VideoList extends React.Component {
    state = {};

    render = () => {
        const videoList = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
        });

        return <div className="ui relaxed divided list">{videoList}</div>
    }
}

export default VideoList;