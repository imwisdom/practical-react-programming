import { produce } from "immer";
import { createStore } from "redux";

export default function Store(){
    return <div>실전 리액트</div>
}

function createReducer(initialState, handlerMap){
    return function (state = initialState, action){
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if(handler){
                handler(draft, action);
            }
        });
    }
}
const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT: state => (state.value += 1),
});
const store = createStore(reducer);

let prevState;
store.subscribe(() => {
    const state = store.getState();
    if (state === prevState){
        console.log('상태값 없음');
    }else{
        console.log('상태값 변경됨');
    }
    prevState = state;
});

//각 액션에 대한 처리가 끝난 뒤 subscribe 호출
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'OTHER_ACTION'});
store.dispatch({type: 'INCREMENT'});