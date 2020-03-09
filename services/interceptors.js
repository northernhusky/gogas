import axios from './axios';
import store from '../store/index';
import UserAgent from 'react-native-user-agent';



axios.interceptors.request.use(function(config) {
   
    let state = store.getState();
    if (state.driver.token) {
        config.headers['User-Agent'] = UserAgent.getUserAgent() +' /token: ' + state.driver.token;
    }

    return config;
});