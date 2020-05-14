import React from 'react';

class VideoDetail extends React.Component {
    state = {};

    render = () => {
        if (!this.props.video)
            return <div></div>;

        return (
            <div>
                <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} title="video player" />>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;