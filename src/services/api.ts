import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = Constants.manifest.extra ? Constants.manifest.extra.API_URL : "";

const api = axios.create({
    baseURL: baseURL,
});

export default api;