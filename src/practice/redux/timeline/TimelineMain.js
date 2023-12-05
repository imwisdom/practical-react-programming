import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../common/mockData";
import TimelineList from "./TimelineList";
import { actions } from "./state";

export default function TimelineMain(){
    const [currentText, setCurrentText] = useState('');
    const text = useSelector(state => state.timeline.text);
    const dispatch = useDispatch();
    const timelines = useSelector(state => state.timeline.timelines);
    const isLoading = useSelector(state => state.timeline.isLoading);
    const error = useSelector(state => state.timeline.error);
    function onAdd(){
        const timeline = getNextTimeline();
        dispatch(actions.addTimeline(timeline));
    }
    function onLike(e){
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find(item => item.id === id);
        dispatch(actions.requestLike(timeline));
    }
    console.log('TimelineMain render');
    function onChangeText(e){
        const text = e.target.value;
        dispatch(actions.trySetText(text));
        setCurrentText(text);
    }
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike} />
            {isLoading && <p>전송 중...</p>}
            {!!error && <p>에러 발생: {error}</p>}
            <input type="text" value={currentText} onChange={onChangeText}></input>
            {!!text && <p>{text}</p>}
        </div>
    );
}