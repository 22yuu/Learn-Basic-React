// eslint-disable-next-line
import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
// function App() {
//   // const name = '리액트';
//   // const style = {
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16 // 단위를 생략하면 px로 지정됨.
//   // }
//   // return <div style={style}>{name}</div>;
//   // return <div className="react">{name}</div>

//   // return (
//   //   <MyComponent name="React" favoriteNumber={1}>
//   //     리액트
//   //   </MyComponent>
//   // );
 
//   //return <Counter/>
//   // return <Say/>
//   // return <EventPractice/>
//   // return <ValidationSample/>
//   return <ScrollBox/>
// }

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}
export default App;
