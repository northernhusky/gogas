import {SET_TOKEN, LOGIN, CARDS_API_REQUEST, CARDS_API_SUCCESS, CARDS_API_FAILURE} from './constants';

const initialState = {
    token: null,
    isLoading: false,
    cards: null,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token };
        case 'LOGIN_REQUEST':
            return { ...state, isLoading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, isLoading: false };
        case 'LOGIN_FAILURE':
            return { ...state, isLoading: false };
        case CARDS_API_REQUEST:
            return { ...state, isLoading: true };
        case CARDS_API_SUCCESS:
            return { ...state, isLoading: false, cards: action.cards };
        case CARDS_API_FAILURE:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};

export default rootReducer;
