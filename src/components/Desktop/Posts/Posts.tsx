import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { PostHeader } from './PostHeader'
import { PostBody } from './PostBody'
import { Votes } from '../../PostUtils/Votes'
import { PostFooter } from './PostFooter'
import { sizes } from '../MediaQueries'
import { SideInfo } from '../SideInfo/SideInfo'
import { postsStateType } from './DesktopPosts.model'

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<postsStateType>([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`https://www.reddit.com/hot/.json?limit=10`)
        setPosts(res.data.data.children)
        console.log(posts)
      } catch (error) {
        console.log(error)
      }
    }

    getPosts()
  }, [])

  return (
    <Container>
      <PostsContainer>
        {posts?.map((item, index) => (
          <PostWrap key={index}>
            <DesktopVotes count={item.data.ups} />
            <Post>
              <PostHeader
                Subreddit={item.data.subreddit}
                awardsCount={item.data['all_awardings'].length}
              />
              <PostBody
                Title={item.data.title}
                Thumbnail={item.data.thumbnail}
                Image={item.data.url}
              />
              <PostFooter
                votes={item.data.ups}
                comments={item.data['num_comments']}
              />
            </Post>
          </PostWrap>
        ))}
      </PostsContainer>
      <SideInfo />
    </Container>
  )
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  gap: 10px;
  @media only screen and (min-width: ${sizes.sm}) {
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
  padding-top: 1em;
`

const DesktopVotes = styled(Votes)`
  display: none;
  flex-direction: column;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  background-color: ${({ theme }) => theme.app.colors.lightgray};
  .UpVotes:hover {
    background-color: rgb(144, 144, 144, 0.2);
  }
  .UpVotes {
    width: 30px;
    height: 30px;
  }
  .Count {
    margin: 0px;
    font-size: 0.8em;
    font-weight: 700;
    line-height: 16px;
    pointer-events: none;
    word-break: normal;
    color: ${({ theme }) => theme.app.colors.color};
  }
  @media only screen and (min-width: ${sizes.sm}) {
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
  @media only screen and (min-width: ${sizes.sm}) {
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
