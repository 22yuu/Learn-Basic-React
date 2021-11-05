// import React,  { useCallback, useState } from 'react';
// // import { Route, Routes } from 'react-router-dom';
// import NewsPage from './pages/NewsPage';
// import NewsList from './components/NewsList';
// import axios from 'axios';
// import Categories from './components/Categories';

// const App = () => {
//   // return (
//   //   <Routes>
//   //     <Route path="/:category?" component={NewsPage} />;
//   //   </Routes>
//   // )

//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//   <>
//   <Categories category={category} onSelect={onSelect}/>
//   <NewsList category={category}/>
//   </>
//   )
// };

// export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;