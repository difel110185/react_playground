import { connect } from 'react-redux';
import React from 'react';

const SongList = (props) => {
    if (!props.song)
        return <div>Select a song</div>;

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                {props.song.title}
                <br />
                {props.song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongList);
