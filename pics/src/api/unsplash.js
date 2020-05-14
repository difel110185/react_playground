import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eba76221ce40310127f864f0ec2efa809b81664c153be41562da99d8939cae34'
    }
});