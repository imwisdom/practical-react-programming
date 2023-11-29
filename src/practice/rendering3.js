import { useEffect, useState } from "react";

export default function Rendering3() {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });

    if (flag) {
        return (
            <div>
                <p key="apple">사과</p>
                <p key="banana">바나나</p>
            </div>
        );
    }else{  //key를 적용하여 변경된 돔에 대해서만 상태변경 => 효율적인 렌더링
        return (
            <div>
                <p key="apple">사과</p>
                <p key="pineapple">파인애플</p>
                <p key="banana">바나나</p>
            </div>
        );
    }
}

// function Counter(){
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         const id = setTimeout(() => setCount(prev => prev+1), 100);
//         return () => clearTimeout(id);
//     });
//     return <p>count : {count}</p>
// }