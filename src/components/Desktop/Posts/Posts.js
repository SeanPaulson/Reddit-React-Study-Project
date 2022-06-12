import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import { Votes } from '../../Posts/Votes';
import { PostFooter } from './PostFooter';
import { sizes } from '../MediaQueries';
import { SideInfo } from '../SideInfo/SideInfo';

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    gap: 10px;
    @media only screen and (min-width: ${sizes.sm}){
        margin: 3em;
    }
    @media only screen and (min-width: ${sizes.lg}) {
        width: 640px;
    }
    color: ${({ theme }) => theme.app.colors.color};
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const StyledVotes = styled(Votes)`
    display: none;
    flex-direction: column;
    height: 10vh;
    .UpVotes:hover {
        background-color: rgb(144,144,144, 0.2);
    }
    .UpVotes {
        width: 20px;
        height: 20px;
    }
    .Count {
        margin: 0px;
        color: black;
        font-size: 11px;
        font-weight: 700;
        line-height: 16px;
        pointer-events: none;
        word-break: normal;
        color: ${({ theme }) => theme.app.colors.lightgray};
    }
    @media only screen and (min-width: ${sizes.sm}){
        display: flex;
    }
`

const PostWrap = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.app.colors.post_bg};
    max-height: 700px;
    border: 1.5px solid rgb(135, 138, 140, 0.7);
    &:hover {
        cursor: pointer;
        border: 1.5px solid rgb(135, 138, 140);
    }
    @media only screen and (min-width: ${sizes.sm}){
        width: 100%;
        border-radius: 5px;
    }
`

const Post = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.app.colors.post_bg};
    flex-direction: column;
    min-height: 13vh;
    width: 97%;
`

export const Posts = () => {

    const [posts, setPosts] = useState()

    useEffect(()=> {
        const getPosts = async() => {
            try {
                const res = await axios.get(`https://www.reddit.com/hot/.json?limit=10`)
                setPosts(res.data.data.children)  
                console.log(posts)
            } catch (error) {
                console.log(error)
            }
        }
        
        getPosts()
    },[])

    return (
        <Container>
            <PostsContainer>
                {posts?.map((item,index) => (
                    <PostWrap key={index}>
                        <StyledVotes voteCount={item.data.ups} />
                        <Post>
                        <PostHeader Subreddit={item.data.subreddit} awardsCount={item.data["all_awardings"].length} />
                        <PostBody Title={item.data.title} Thumbnail={item.data.thumbnail} Image={item.data.url} />
                        <PostFooter votes={item.data.ups} comments={item.data["num_comments"]} />
                        </Post>
                    </PostWrap>
                ))}
            </PostsContainer>
            <SideInfo />
        </Container>
    )
}
