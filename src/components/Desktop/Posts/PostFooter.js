import React from 'react'
import { Comments } from '../../Posts/Comments';
import { Votes } from '../../Posts/Votes';
import { Share } from '@mui/icons-material';
import styled from 'styled-components';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Count = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 14px;
`

const CommentsWrap = styled.div`
    display: flex;
    align-items: center;
    height: 2vh;
    color: grey;
    font-weight: 700;
    font-size: 12px;
    padding: 7px;
    border-radius: 5px;
    &:hover {
        background-color: rgb(144,144,144, 0.2);
    }
`

const StyledVotes = styled(Votes)`
    padding: 0px;
    .UpVotes {
        width: 20px;
        height: 20px;
        color: red;
        border-radius: 5px;
    }
    .UpVotes:hover {
        background-color: rgb(144,144,144, 0.2);
    }

`

const Info = styled.div`
    display:flex;
    align-items: center;
    padding: 7px;
    height: 2vh;
    border-radius: 5px;
    color: grey;
    font-size: 20px;
    margin-right: auto;
    ${Count}:not(:first-child) {
        margin-left: 0.3em;
        margin-right: 0.3em;
    }
    &:hover {
        background-color: rgb(144,144,144, 0.2);
    }
`

const Footer = styled.div`
    margin: 0.5em 0em;
    display:flex;
    height: 3vh;
    gap: 0.9em;
    align-items: center;
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

export const PostFooter = ({votes,comments}) => {

    const FormatNumbers = (value) => {
        const format = COUNT_FORMATS.find(format => (value < format.limit));

        value = (1000 * value / format.limit);
        value = Math.round(value * 10) / 10;
      
        return (value + format.letter);
    }

    return (
        <Footer>
            <StyledVotes voteCount={FormatNumbers(votes)} />
            <CommentsWrap>
                <Comments commentsCount={FormatNumbers(comments)} />
                <p>Comments</p>
            </CommentsWrap>
            <Info>
                <Share sx={{fontSize: 19}} color="grey" />
                <Count>Share</Count>
            </Info>
        </Footer>
    )
}
