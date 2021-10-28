import React, {useState} from 'react';

const IterationSAMPLE = () => {
    const [names, setNames] = useState ([
        {id: 1, text:'눈사람' },
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNmaes = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNmaes);
        setInputText('');
    };
    const onEnterKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyPress={onEnterKeyPress}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSAMPLE;