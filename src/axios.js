import axios from 'axios';

const instance = axios.create({
    baseURl: 'https://burger-builder-c5b46.firebaseio.com/'
})

export default instance;