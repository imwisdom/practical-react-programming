import React, { useState } from "react";

export default function Rendering2(){
    return <SelectFruit />;
}
function SelectFruit(){
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
    const [newFruits, setNewFruits] = useState('');

    function addNewFruit(){
        //fruits.push(newFruits); => fruits의 레퍼런스가 변경되지 않아서 변경사항 반영안됨
        setFruits([...fruits, newFruits]); //상태값을 불변객체로 관리하여 변경사항 반영
        setNewFruits('');
    }

    return (
        <div>
            <Select options={fruits} />
            <input
                types="text"
                value={newFruits}
                onChange={e => setNewFruits(e.target.value)}
                />
            <button onClick={addNewFruit}>추가하기</button>
        </div>
    );
}

const Select = React.memo(({ options }) => (
    <div>
        {options.map(item => (
            <p>{item}</p>
        ))}
    </div>
));