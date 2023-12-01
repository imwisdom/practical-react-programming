const friends = [
    { name: '친구1', age: 15},
    { name: '친구2', age: 20},
    { name: '친구3', age: 25},
    { name: '친구4', age: 30},
];
const timelines = [
    { desc: '점심이 맛있었다', likes: 0},
    { desc: '나는 멋지다', likes: 10},
    { desc: '호텔에 놀러갔다', likes: 20},
    { desc: '비싼 핸드폰을 샀다', likes: 30},
];

function makeDataGenerator(items){
    let itemIndex = 0;
    return function getNextData(){
        const item = items[itemIndex % items.length];
        itemIndex += 1;
        return { ...item, id: itemIndex };
    };
}
export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);