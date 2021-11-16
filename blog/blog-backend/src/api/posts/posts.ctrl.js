import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi'; // Request body 객체 검증 라이브러리

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }
    return next();
};
/*
    POST /api/posts
    {
      title: '제목',
      body: '내용',
      tags: ['태그1', '태그2']
    }
*/
export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(), // required()가 있으면 필수 항목
        body: Joi.string().required(),
        tags: Joi.array()
        .items(Joi.string())
        .required(), // 문자열로 이루어진 배열
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }
    
    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch(e) {
        ctx.throw(500,e);
    }
};

/*
    GET /api/posts
*/
export const list = async ctx => {
    // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
    // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1) {
        ctx.status = 400;
        return;
    }

    try {
        const posts = await Post.find()
        .sort({_id: -1}) // 정렬 1 : 오름차순, -1: 내림차순
        .limit(10) // 페이지 내 보여지는 게시글 개수
        .skip((page - 1) * 10)
        .lean() // lean() 메서드를 사용하지 않을 경우 밑에 ctx.body = posts ... 주석처리 되어 있는 부분으로 처리해야 함
        .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        // ctx.body = posts
        // .map(post => post.toJSON())
        // .map(post => ({
        //     ...post,
        //     body:
        //     post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        // }));

        // lean() 을 사용할 경우
        ctx.body = posts.map(post => ({
            ...post,
            body:
            post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        }));
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/posts/:id
*/
export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404; // Not Found
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
    DELETE /api/posts/:id
*/
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
    PATCH /api/posts/:id
    {
        title: '수정',
        body: '수정 내용',
        tags: ['수정', '태그']
    }
*/
export const update = async ctx => {
    const { id } = ctx.params;
    // write에서 사용한 schema와 비슷한데, requried()가 없습니다.
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    });

    const result = schema.validate(ctx.request.body);
    if( result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
            // false일 때는 업데이트되기 전의 데이터를 반환합니다.
        }).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
};
