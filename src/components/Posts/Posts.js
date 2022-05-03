import styled from 'styled-components';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import UpVote from "../UpVote"
import DownVote from "../DownVote"
import Comments from "../Comments"
import Share from "../Share"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
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
    font-weight: 500;
    font-size: 14px;
`

const Image = styled.img`
    width: 15px;
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
                        <Chip sx={{color: "white",fontSize: 12,fontWeight: "600",height: "23px",backgroundColor: "#0079D3"}} label="Join" />
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
                                <UpVote color="grey" />
                                <Count>9.3k</Count>
                                <DownVote color="grey" />
                            </Info>
                            <Info>
                                <Image src='https://www.redditstatic.com/gold/awards/icon/gold_64.png'/>
                                <Image src='https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&height=64&auto=webp&s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb'/>
                                <Image src='https://www.redditstatic.com/gold/awards/icon/silver_64.png'/>
                                <Count>5</Count>
                            </Info>
                            <Info>
                                <Comments color="grey" />
                                <Count>545</Count>
                            </Info>
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

export default Posts