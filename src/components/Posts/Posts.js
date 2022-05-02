import styled from 'styled-components';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import { ArrowDownward, ArrowUpward, Comment, EmojiEvents, IosShare } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50vh;
    height: 150vh;
    background-color: #EFEFED;
`

const PostWrap = styled.div`
    display: flex;
    background-color: white;
    margin-top: 0.4em;
    flex-direction: column;
    height: 18vh;
    padding: 0em 1em;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    width: 100%;
    flex: 1
`

const SubRedditTitle = styled.h5``

const Time = styled.h5`
    color: grey;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
    text-align: center;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em
`

const Content = styled.div`
    display: flex;
    flex: 2;
    align-items:center;
    justify-content: space-between;
`

const ContentTitle = styled.p`
    margin: 0px;
    align-Self: flex-start;
`

const ContentImage = styled.img`
    width: 70px;
    height: 40px;

`

const Footer = styled.div`
    flex: 1;
    display:flex;
    justify-content: space-between;
`

const Count = styled.p`
    color: grey;
    font-size: 15px;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid grey;
    padding: 0em 0.5em;
    height: 3vh;
    border-radius: 15px;
    color: grey;
    font-size: 15px;
    ${Count}:not(:first-child) {
        margin-left: 0.2em;
        margin-right: 0.2em;
    }
`

// const ShowMore = styled.div``

const posts = [
    {
        Title: "r/random1",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random2",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random3",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random4",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random5",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random6",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random7",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    },
    {
        Title: "r/random8",
        post: "blalablalblablalba",
        img: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
    }
]

function Posts() {
    return (
        <Container>
            {posts.map  ((item,index) => (
                <PostWrap key={index}>
                    <Top>
                        <Left>
                        <AccountCircleIcon sx={{fontSize: "19px"}} />
                        <SubRedditTitle>{item.Title}</SubRedditTitle>
                        <CircleIcon sx={{fontSize: "5px",opacity: 0.5}} />
                        <Time>5h</Time>
                        </Left>
                        <Right>
                        <Chip sx={{color: "white",fontWeight: "500",height: "23px",backgroundColor: "#0079D3"}} label="Join" />
                        <MoreHorizIcon sx={{fontSize: "15px"}} />
                        </Right>
                    </Top>
                    <Content>
                        <ContentTitle>{item.post}</ContentTitle>
                        <ContentImage src={item.img} />
                    </Content>
                    <Footer>
                        <Left>
                            <Info>
                                <ArrowUpward sx={{fontSize: "18px"}} />
                                <Count>9.3k</Count>
                                <ArrowDownward sx={{fontSize: "18px"}} />
                            </Info>
                            <Info>
                                <EmojiEvents sx={{fontSize: "18px"}}/>
                                <EmojiEvents sx={{fontSize: "18px"}}/>
                                <Count>5</Count>
                            </Info>
                            <Info>
                                <Comment sx={{fontSize: "18px"}} />
                                <Count>545</Count>
                            </Info>
                        </Left>
                        <Right>
                            <Info>
                                <IosShare sx={{fontSize: "18px"}} />
                                <Count>Share</Count>
                            </Info>
                        </Right>
                    </Footer>
                </PostWrap>
            ))}
        </Container>
    )
}

export default Posts