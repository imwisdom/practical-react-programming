import React, { useRef, useEffect, useState, useCallback } from 'react';

export default function Ref(){
    
    const inputRef = useRef();
    const [showText, setShowText] = useState(true);
    // 생성된 ref 객체를 사용하여 참조된 dom을 가져옴
    return (
        <div>
            {showText && <input type="text" ref={inputRef} />}
            <button onClick={() => setShowText(!showText)}>
                텍스트 보이기/가리기
            </button> 
            <button onClick={() => inputRef.current && inputRef.current.focus()}>
                텍스트로 이동
            </button>
        </div>
    );
}



function InputAndSave({inputRef}){
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button>저장</button>
        </div>
    );
}

const Button = React.forwardRef(function ({onClick}, ref){
    return (
        <button onClick={onClick} ref={ref}>
            저장
        </button>
    );
});