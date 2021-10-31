import React from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {

    const [state, dispatch] = useInputs({
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;
    
    const onChange = e => {
        dispatch(e.target);
    }

    // useEffect(()=>{
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    // useEffect(()=> {
    //     console.log('마운트될 때만 실행됩니다.')
    // }, []);

    // 특정 값이 업데이트될 때만
    // useEffect(()=>{
    //     console.log(name)
    // }, [name]);

    // 뒷정리
    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶으면 cleanup 함수를 반환
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, []);
    // const onChangeName = e => {
    //     setName(e.target.value);
    // }

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>

            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>

    );
};

export default Info;