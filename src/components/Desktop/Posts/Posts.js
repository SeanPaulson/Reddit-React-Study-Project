import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Author } from '../../Posts/Author'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 0.6em;
    min-height: 250vh;
    align-items: center;
    background-color: #DAE0E6;
`

const PostWrap = styled.div`
    display: flex;
    background-color: white;
    margin-top: 0.4em;
    flex-direction: column;
    min-height: 13vh;
    width: 97%;
    padding: 0vw 1vw;
    border-top: 1px solid rgb(135, 138, 140, 0.7);
    border-bottom: 1px solid rgb(135, 138, 140, 0.7);
    &:hover {
        cursor: pointer;
        border: 1px solid rgb(135, 138, 140);
    }
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
    height: 100%;
    text-align: center;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em
`

export const Posts = () => {

    const [posts, setPosts] = useState()

    useEffect(()=> {
        const getPosts = async() => {
            try {
                const res = await axios.get(`https://www.reddit.com/hot/.json?limit=10`)
                setPosts(res.data.data.children)  
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    },[])

    return (
        <Container>
            {posts?.map((item,index) => (
                <PostWrap key={index}>
                    <PostHeader Subreddit={item.data.subreddit} awardsCount={item.data["all_awardings"].length} />
                    <PostBody Title={item.data.title} Thumbnail={item.data.thumbnail} Image={item.data.url} />
                    <PostFooter votes={item.data.ups} comments={item.data["num_comments"]} />
                </PostWrap>
            ))}
        </Container>
    )
}
