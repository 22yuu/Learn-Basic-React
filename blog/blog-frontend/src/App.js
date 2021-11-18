import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={LoginPage} path='/login' exact />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={PostPage} path='/@:username/:postId' exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={WritePage} path="/write" exact />

    </>
  );
}

export default App;
