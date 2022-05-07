import { Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Author } from '../../Posts/Author'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Votes } from '../../Posts/Votes';
import { Awards } from '../../Posts/Awards';
import { Comments } from '../../Posts/Comments';
import { Share } from '@mui/icons-material';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 250vh;
    align-items: center;
    background-color: #DAE0E6;
`

const PostWrap = styled.div`
    display: flex;
    background-color: white;
    margin-top: 0.4em;
    flex-direction: column;
    min-height: 15vh;
    width: 95%;
    padding: 0vw 10vw;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
    width: 100%;
    flex: 1
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1.5vh;
    align-items:center;
    justify-content: space-between;
`

const ContentTitle = styled.p`
    margin: 0px;
    font-weight: 600;
    align-Self: flex-start;
`

const ContentImage = styled.img`
    width: 100%;
    height: 100%;
`

const Footer = styled.div`
    flex: 1;
    min-height: 5vh;
    display:flex;
    justify-content: space-between;
`

const Count = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 14px;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #EDEFF1;
    padding: 0em 0.5em;
    height: 3vh;
    border-radius: 15px;
    color: grey;
    font-size: 15px;
    ${Count}:not(:first-child) {
        margin-left: 0.3em;
        margin-right: 0.3em;
    }
`

const COUNT_FORMATS =
[
  {
    letter: '',
    limit: 1e3
  },
  {
    letter: 'K',
    limit: 1e6
  }
];

export const Posts = () => {

    const [posts, setPosts] = useState()

    const FormatNumbers = (value) => {
        const format = COUNT_FORMATS.find(format => (value < format.limit));

        value = (1000 * value / format.limit);
        value = Math.round(value * 10) / 10;
      
        return (value + format.letter);
    }

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
                    <Top>
                        <Left>
                            <Author Subreddit={item.data.subreddit} />
                            <Awards awardsCount={item.data["all_awardings"].length} />
                        </Left>
                        <Right>
                        <Chip sx={{color: "white",fontSize: 12,fontWeight: "600",height: "23px",backgroundColor: "#0079D3"}} label="Join" />
                        <MoreHorizIcon sx={{fontSize: "15px"}} />
                        </Right>
                    </Top>
                    <Content>
                        <ContentTitle>{item.data.title}</ContentTitle>
                        {item.data.thumbnail === "self" ? <></> : <ContentImage src={item.data.url} />}
                    </Content>
                    <Footer>
                        <Left>
                            <Votes voteCount={FormatNumbers(item.data.ups)} />
                            <Comments commentsCount={FormatNumbers(item.data["num_comments"])} />
                        </Left>
                        <Right>
                            <Info>
                                <Share color="grey" />
                                <Count>Share</Count>
                            </Info>
                        </Right>
                    </Footer>
                </PostWrap>
            ))}
        </Container>
    )
}
