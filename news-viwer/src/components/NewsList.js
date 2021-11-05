import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https//google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
    const [loading, response, error ] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3a5bca759a3c4f7e8faf03b2e38363c4`,
        );
    }, [category]);
    
    // 대기 중일 때
    if(loading) {
        return <NewsListBlock> 대기중...</NewsListBlock>
    }
    // 아직 articles 값이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const { articles } = response.data;

    // articles 값이 유효할 때
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
}

export default NewsList;