import axios from 'axios';
import store from '../store/index';
import UserAgent from 'react-native-user-agent';
 

export default axios.create({
    baseURL: "https://gogas.io",
    responseType: "json"
});



