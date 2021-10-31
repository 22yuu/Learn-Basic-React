import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`
const Button = styled.button`
    backgroud: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: cneter;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    
    /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능  */
    &:hvoer {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
    ${ props =>
        props.inverted &&
        css`
            backgroud: none;
            border: 2px solid white;
            color: white;
        &:hover {
            backgroud: white;
            color: black;
        }
    `};
    
    & + button {
        margin-left: 1rem;
    }
`;


const StyledComponent = () => {
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
};

export default StyledComponent;