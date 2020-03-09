
import axios from '../../services/axios';


export function loginApi(credentials) {
    return axios.post(
        '/api/login',
        credentials
    );
}

export function cardListApi() {
    return axios.get(
        '/api/cards/list'
    );
}