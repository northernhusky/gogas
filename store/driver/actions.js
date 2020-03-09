import {AsyncStorage} from 'react-native';
import {LOGIN_START, LOGIN_SUCCESS, GET_TOKEN} from './constants'
import axios from '../../services/axios'
import {parseCookies} from '../../helpers';

export function startLoginAction() {
    return {type: LOGIN_START}
};

export function successLoginAction(token) {
    return {type: LOGIN_SUCCESS, token}
}

export function getTokenAction(token) {
    return {type: GET_TOKEN, token}
}

export function login(credentials) {

    console.log(credentials);

    return async (dispatch) => {
        axios.post(
            '/api/login',
            credentials
        ).then((response) => {
            let data = response.data;
            console.log(response.data)

            let cookies = parseCookies(response.headers['set-cookie'][0])
            AsyncStorage.setItem('token', cookies['token']).then(() => {
                dispatch(successLoginAction(cookies['token']));
            });

        })
    }
}

export function loadTokenFromStorage() {

    return async (dispatch) => { 
        try {
            let token = await AsyncStorage.getItem('token');

            console.log(token);

            dispatch(getTokenAction(token));
        } catch (error) {
            
        }
    }
    
}
