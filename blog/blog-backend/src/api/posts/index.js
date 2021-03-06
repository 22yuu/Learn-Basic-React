import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();


// 리팩토링 전
// posts.get('/', postsCtrl.list);
// posts.post('/', checkLoggedIn, postsCtrl.write);
// posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
// posts.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
// posts.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// 리팩토링 후( 개인적으로 가독성이 좋은 것으로 사용하면 됨 )
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;