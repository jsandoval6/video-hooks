import axios from 'axios';
const KEY = 'AIzaSyDF2TkjipcTIvhZUOF7LnvYusjM1jgtJmI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }

})