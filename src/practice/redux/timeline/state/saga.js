import { actions, types } from ".";
import { all, call, put, takeLeading } from 'redux-saga/effects';
import { callApiLike } from "../../common/api";

export function* fetchData(action) {
    yield put(actions.setLoading(true)); // put : redux 액션 dispatch
    yield put(actions.addLike(action.timeline.id, 1));
    yield put(actions.setValue('error', ''));
    try{
        yield call(callApiLike);
    }catch(error){
        yield put(actions.setValue('error', error));
        yield put(actions.addLike(action.timeline.id, -1));
    }
    yield put(actions.setLoading(false)); //api 호출 후 로딩을 false로 변경
}
export default function* (){
    // all : 제너레이터 함수들 병행 실행
    // takeLeading : 먼저 호출된 액션이 처리되는것을 보장
    yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}