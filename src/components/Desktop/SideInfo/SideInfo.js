import styled from 'styled-components'
import { sizes } from '../MediaQueries';
import Chip from "@mui/material/Chip";

const Container = styled.div`
    display: none;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    max-height: 300px;
    background-color: ${({ theme }) => theme.app.colors.post_bg};
    width: 312px;
    @media only screen and (min-width: ${sizes.lg}) {
        display: flex;
    }
    @media only screen and (min-width: ${sizes.sm}){
        margin: 3em 0em;
    }
`

const TitleWrap = styled.div`
background-position: 50%;
background-repeat: no-repeat;
height: 80px;
display: flex;
align-items: flex-end;
width: 100%;
color: white;
border-radius: 5px 5px 0px 0px;
position: relative;

background-image: url("https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png")
`

const Title = styled.h2`
    margin: 5px 10px;
`

const StyledChip = styled(Chip)`
  && {
    background-color: ${({ theme }) => theme.app.colors.btn_blue};
    font-size: 12;
    font-weight: 600;
    height: 23px;
    color: white;
    margin-left: auto;
  }

  & span {
  }
`;

const Num = styled.p`
  margin: 0px;
`

const SubTitle = styled.p`
`

const Subreddit = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 5px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.app.colors.color};
`

const SubredditWrap = styled.div`
width: 100%;
`

const Button = styled.button`
    width: 80%;
    border-radius: 20px;
    border: none;
    background-color: ${({ theme }) => theme.app.colors.btn_blue};
    padding: 10px 0px;
    color: white;
`

export const SideInfo = () => {
  return (
    <Container>
        <TitleWrap>
        <Title>Subreddits</Title>
        </TitleWrap>
        <SubredditWrap>
            <Subreddit>
                <Num>1</Num>
                <SubTitle>r/AskReddit</SubTitle>
                <StyledChip label="Join" />
            </Subreddit>
            <Subreddit>
                <Num>2</Num>
                <SubTitle>r/Funny</SubTitle>
                <StyledChip label="Join" />
            </Subreddit>
            <Subreddit>
                <Num>3</Num>
                <SubTitle>r/Codecademy</SubTitle>
                <StyledChip label="Join" />
            </Subreddit>
        </SubredditWrap>
        <Button>View All</Button>
    </Container>
  )
}
