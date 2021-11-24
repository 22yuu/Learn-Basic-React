import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PaginationContainer from '../components/posts/PaginationContainer';
import PostListContainer from '../components/posts/PostListContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer/>
            <PostListContainer/>
            <PaginationContainer/>
        </>
    );
};

export default PostListPage;