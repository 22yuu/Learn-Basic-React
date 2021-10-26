// eslint-disable-next-line
import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  const name = '리액트';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: 16 // 단위를 생략하면 px로 지정됨.
  // }
  // return <div style={style}>{name}</div>;
  // return <div className="react">{name}</div>

  // return (
  //   <MyComponent name="React" favoriteNumber={1}>
  //     리액트
  //   </MyComponent>
  // );
 
  //return <Counter/>
  return <Say/>
}

export default App;
