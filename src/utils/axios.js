import axios from 'axios';

const baseURL = 'https://collectionapi.metmuseum.org/public/collection/v1';

axios.defaults.baseURL = baseURL;

export default axios;
