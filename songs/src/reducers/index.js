import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'I want it that way',
            duration: '2:15'
        },
        {
            title: 'Macarena',
            duration: '3:45'
        },
        {
            title: 'All Start',
            duration: '5:00'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG')
        return action.payload

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});