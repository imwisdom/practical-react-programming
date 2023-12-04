import { useEffect, useReducer } from "react";
import store from "../common/store";
import { addFriend } from "./state";
import { getNextFriend } from "../common/mockData";
import FriendList from "./FriendList";
import { useDispatch, useSelector } from "react-redux";

export default function FriendMain(){
    const friends = useSelector(state => state.friend.friends);
    const dispatch = useDispatch();
    function onAdd(){
        const friend = getNextFriend();
        dispatch(addFriend(friend));
    }
    console.log('FriendMain render');
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    );
}