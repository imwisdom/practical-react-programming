import {createStore, applyMiddleware} from 'redux';

const middleware1 = store => next => action => {
    console.log('middleware1 start');
    const result = next(action);    //다음 미들웨어(middleware2) 호출
    console.log('middleware1 end');
    return result;
}

const middleware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action); //다음 미들웨어가 없으므로 리듀서 호출
    console.log('middleware2 end');
    return result;
}
//초기에 미들웨어 없이 리듀서만 출력
const myReducer = (state, action) => {
    console.log('myReducer');
    return state;
}

const printLog = store2 => next => action => {
    console.log(`prev state = ${JSON.stringify(store2.getState())}`);
    const result = next(action);
    console.log(`next state = ${JSON.stringify(store2.getState())}`);
    return result;
}

const myReducer2 = (state = {name: 'mike'}, action) => {
    console.log('myReducer');
    if(action.type === 'someAction'){
        return {name : 'mike2'}; //리듀서는 변경된 상태값을 리턴한다
    }
    return state;   
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({type: 'someAction'}); //액션발생시 미들웨어부터 실행

const store2 = createStore(myReducer2, applyMiddleware(printLog));
store2.dispatch({type: 'someAction'}); //액션발생시 미들웨어부터 실행



export default function Middleware(){
    return <div>실전 리액트</div>;
}