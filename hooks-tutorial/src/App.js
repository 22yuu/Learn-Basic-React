// eslint-disable-next-line
import React, { useState } from 'react';
import Average from './Average';
import Counter from './Counter';
import Info from './Info';

function App() {
  // return <Counter/>

  // const [visible, setVisible] = useState(false);

  // return (
  //   <div>
  //     <button onClick={() => {
  //       setVisible(!visible);
  //     }} > {visible? '숨기기' : '보이기'}</button>
  //     <hr/>
  //     {visible && <Info/>}
  //   </div>
  // )

  return <Info/>
  // return <Average />;
}

export default App;
