import styled from 'styled-components';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled as muiStyled } from '@mui/material';
import Chip from '@mui/material/Chip';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EFEFED;
`

const PostWrap = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    background-color: white;
    margin-top: 0.2em;
    height: 40vh;
    width: 500px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-around;
`

const Left = styled.div`
    display: flex;
    text-align: center;
`

const Right = styled.div`
    display: flex;
`

const Image = styled.p`
    font-size: 20px;
`

const Content = styled.div``

const Footer = styled.div``

const SubRedditTitle = styled.h5``

// const ShowMore = styled.div``

const posts = [
    {
        Title: "r/random1",
        post: "blalablalblablalba",
    },
    {
        Title: "r/random2",
        post: "blalablalblablalba",
    },
    {
        Title: "r/random3",
        post: "blalablalblablalba",
    },
    {
        Title: "r/random4",
        post: "blalablalblablalba",
    },
    {
        Title: "r/random5",
        post: "blalablalblablalba",
    }
]

function Posts() {
    return (
        <Container>
            {posts.map  (item => (
                <PostWrap>
                    <Top>
                        <Left>
                        <AccountCircleIcon sx={{fontSize: "19px"}} />
                        <SubRedditTitle>{item.Title}</SubRedditTitle>
                        </Left>
                        <Right>
                        <Chip sx={{height: "20px"}} label="join" />
                        <MoreHorizIcon />
                        </Right>
                    </Top>
                    <Content></Content>
                    <Footer></Footer>
                </PostWrap>
            ))}
        </Container>
    )
}

export default Posts