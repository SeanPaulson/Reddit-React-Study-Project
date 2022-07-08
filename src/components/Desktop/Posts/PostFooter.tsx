import React from 'react'
import { Share } from '@mui/icons-material';
import styled from 'styled-components';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Comments } from '../../PostUtils/Comments';
import { Votes } from '../../PostUtils/Votes';
import { PostFooterProps } from './DesktopPosts.model';

export const PostFooter : React.FC<PostFooterProps> = ({votes,comments}) => {

    return (
        <Footer>
            <StyledVotes count={votes} />
            <CommentsWrap>
                <Comments count={comments} />
                <p>Comments</p>
            </CommentsWrap>
            <Info>
                <Share sx={{fontSize: 19, color: "grey"}} />
                <Count>Share</Count>
            </Info>
        </Footer>
    )
}

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
    display:flex;
    padding: 0.3em 0em;
    height: 3vh;
    gap: 0.9em;
    align-items: center;
`
