import { useEffect, useReducer } from "react";
import store from "../common/store";
import TimelineList from "./TimelineList";
import { addTimeline } from "./state";
import { getNextTimeline } from "../common/mockData";

export default function TimelineMain(){
    const [, forceUpdate] = useReducer(v => v+1, 0);
    useEffect(() => {
        //액션이 처리될때마다 무조건 컴포넌트를 업데이트하기때문에 friend버튼클릭시에도 렌더링
        //이를 막기 위해 이전 상태값과 현재 상태값 비교
        let prevTimelines = store.getState().timeline.timelines;
        const unsubscribe = store.subscribe(() => {
            const timelines = store.getState().timeline.timelines;
            if(prevTimelines !== timelines){
                forceUpdate();
            }
            prevTimelines = timelines;
        });
        return () => unsubscribe();
    }, []);

    function onAdd(){
        const timeline = getNextTimeline();
        store.dispatch(addTimeline(timeline));
    }
    console.log('TimelineMain render');
    const timelines = store.getState().timeline.timelines;
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}