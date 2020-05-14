import axios from 'axios';

const API_KEY = 'AIzaSyBCsqvCYxsmW79ZDGV5aw_VBT_tqVPiouo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});