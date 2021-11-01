import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value],
    );

    /*
        버튼의 onClick으로도 구현 가능 코드는 책 참조 p279~280
        그러면 왜 onClick 이벤트가 아닌 onSubmit 이벤트를 사용하는 것인가?
        onSubmit 이벤트의 경우 사용자가 키보드의 'Enter'키를 눌렀을 때도 이벤트가 발생하는 반면
        onClick 같은 경우에는 keyPress 로직을 따로 작성해야하기 때문에 onSubmit을 사용
    */

    return (
        <form className="TodoInsert" onSubmit={onSubmit}> 
            <input placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;