import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'
import driverReducer from "./driver/reducer";
import driverRootSaga from './driver/sagas';

const reducer = combineReducers({
    driver: driverReducer,
    form: formReducer
});

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(driverRootSaga)

window.store = store;


export default store;