import { takeLatest, takeEvery, call, put, all} from "redux-saga/effects";
import { LOGIN as login, SET_TOKEN, LOAD_TOKEN, CARDS_API_REQUEST, CARDS_API_SUCCESS, CARDS_API_FAILURE} from './constants';
import formActionSaga from 'redux-form-saga';
import { SubmissionError } from 'redux-form';
import { loginApi, cardListApi } from './api';
import { AsyncStorage } from 'react-native';
import { parseCookies } from '../../helpers';


// Our worker Saga: will perform the async increment task
export function* loginSaga(action) {
    let formData = new FormData()
    formData.append('phone', action.payload.phone);
    formData.append('password', action.payload.password);

    let { data, headers } = yield call(loginApi, formData);

    if (data.status == 'OK') {
        let cookies = parseCookies(headers['set-cookie'][0])
        yield AsyncStorage.setItem('token', cookies['token']);
        yield put({ type: SET_TOKEN, token: cookies['token'] });
        yield put(login.success());
    } else {
        const formError = new SubmissionError({
            _error: data.message
        });


        yield put(login.failure(formError));
    }

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* loginWatcherSaga() {
    yield takeEvery(login.REQUEST, loginSaga)
}

export function* loadTokenSaga() {
    let token = yield AsyncStorage.getItem('token');
    console.log(token);
    yield put({ type: SET_TOKEN, token });
}

export function* loginTokenWatherSaga() { 
    yield takeEvery(LOAD_TOKEN, loadTokenSaga)
}

export function* getCardsSaga() {
    let { data, headers } = yield call(cardListApi);

    if (data.status == 'OK') {
        yield put({ type: CARDS_API_SUCCESS, cards: data.payload});
    } else {
        yield put({ type: CARDS_API_FAILURE});
    }
}

export function* getCardsWatherSaga() {
    yield takeEvery(CARDS_API_REQUEST, getCardsSaga)
}

export default function* drivertRootSaga() {
    yield all(
        [
            loginWatcherSaga(),
            loginTokenWatherSaga(),
            getCardsWatherSaga(),
            formActionSaga()
        ]
    );
}