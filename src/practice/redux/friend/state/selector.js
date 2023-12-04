import { createSelector } from "reselect";

const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

//createSelector => 메모이제이션 가능
//값 변경이 없을경우 filter연산 x
export const getFriendsWithAgeLimit = createSelector(
    [getFriends, getAgeLimit],
    (friends, ageLimit) => friends.filter(item => item.age <= ageLimit),
);
export const getFriendsWithAgeShowLimit = createSelector(
    [getFriendsWithAgeLimit, getShowLimit],
    (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
)