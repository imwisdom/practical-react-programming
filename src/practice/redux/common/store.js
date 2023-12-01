import { combineReducers, createStore } from "redux";
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

//여러개의 리듀서를 하나로 합침
const reducer = combineReducers({
    timeline : timelineReducer,
    friend : friendReducer,
});
const store = createStore(reducer);
export default store;