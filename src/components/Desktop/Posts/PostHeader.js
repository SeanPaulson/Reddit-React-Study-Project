import React from 'react'
import styled from 'styled-components'
import { Author } from '../../Posts/Author'
import { Awards } from '../../Posts/Awards'
import Chip from "@mui/material/Chip";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
    width: 100%;
    flex: 1
`

const DesktopAuthor = styled(Author)`
    &:hover {
        text-decoration: underline;
    }
`

const StyledChip = styled(Chip)`
    && {
        background-color: #0079d3;
        font-size: 12;
        font-weight: 600;
        height: 23px;
        color: white;
        margin-left: auto;
    }
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

const DesktopAwards = styled(Awards)`
`


export const PostHeader = ({Subreddit, awardsCount}) => {
    return (
        <Container>
            <DesktopAuthor Subreddit={Subreddit} />
            <DesktopAwards awardsCount={awardsCount}  />
            <StyledChip label="Join" />
        </Container>
    )
}
