import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNextFriend } from "../common/mockData";
import FriendList from "./FriendList";
import NumberSelect from "./NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "./common";
import { addFriend, setValue } from "./state";
import { getAgeLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit, getShowLimit } from "./state/selector";

export default function FriendMain(){
    //리덕스에서 액션이 처리가 되면 반환하는값의 이전값을 기억했다가 값이 변경되었을때 컴포넌트를 다시 렌더링
    const [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeShowLimit,
    ] = useSelector(state => 
        //{
        // const { ageLimit, showLimit, friends } = state.friend;
        // //redux에서 액션이 처리될때마다(friends나 agelimit이 변경되지 않아도) filter메소드가 계속 호출된다는 단점이 있음
        // const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
        // return [
        //     ageLimit,
        //     showLimit,
        //     friendsWithAgeLimit,
        //     friendsWithAgeLimit.slice(0, showLimit),
        // ]
        [
            getAgeLimit(state),
            getShowLimit(state),
            getFriendsWithAgeLimit(state),
            getFriendsWithAgeShowLimit(state),
        ]
    , shallowEqual);
    const dispatch = useDispatch();
    function onAdd(){
        dispatch(setValue('name', 'mike'));
        const friend = getNextFriend();
        dispatch(addFriend(friend));
    }
    console.log('FriendMain render');
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect
                onChange={v => dispatch(setValue('ageLimit', v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            <FriendList friends={friendsWithAgeLimit} />
            <NumberSelect
                onChange={v => dispatch(setValue('showList', v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기 (연령 제한 적용)"
            />
            <FriendList friends={friendsWithAgeShowLimit} />
        </div>
    );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];