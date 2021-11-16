import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();


// 리팩토링 전
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

// 리팩토링 후( 개인적으로 가독성이 좋은 것으로 사용하면 됨 )
// posts.get('/', postsCtrl.list);
// posts.post('/', postsCtrl.write);

// const post = new Router(); // /api/posts/:id
// post.get('/:id', postsCtrl.read);
// post.delete('/:id', postsCtrl.remove);
// post.patch('/:id', postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;