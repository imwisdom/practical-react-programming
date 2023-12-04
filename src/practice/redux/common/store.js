import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import timelineReducer from '../timeline/state';
import timelineSaga from '../timeline/state/saga';
import friendReducer from '../friend/state';
import createSagaMiddleware from 'redux-saga'
import { all } from "redux-saga/effects";


//여러개의 리듀서를 하나로 합침
const reducer = combineReducers({
    timeline : timelineReducer,
    friend : friendReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
)
function* rootSaga(){
    yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;