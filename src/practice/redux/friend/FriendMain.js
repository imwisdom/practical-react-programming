import { useEffect, useReducer } from "react";
import store from "../common/store";
import { addFriend } from "./state";
import { getNextFriend } from "../common/mockData";
import FriendList from "./FriendList";

export default function FriendMain(){
    const [, forceUpdate] = useReducer(v => v+1, 0);
    useEffect(() => {
        //액션이 처리될때마다 무조건 컴포넌트를 업데이트하기때문에 timeline버튼클릭시에도 렌더링
        //이를 막기 위해 이전 상태값과 현재 상태값 비교
        let prevFriends = store.getState().friend.friends;
        const unsubscribe = store.subscribe(() => {
            const friends = store.getState().friend.friends;
            if(prevFriends !== friends){
                forceUpdate();
            }
            prevFriends = friends;
        });
        return () => unsubscribe();
    }, []);

    function onAdd(){
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log('FriendMain render');
    const friends = store.getState().friend.friends;
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    );
}