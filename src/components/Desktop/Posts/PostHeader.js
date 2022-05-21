import React from 'react'
import styled from 'styled-components'
import { Author } from '../../Posts/Author'
import { Awards } from '../../Posts/Awards'
import Chip from "@mui/material/Chip";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 5vh;
    align-items: center;
    width: 100%;
    flex: 1;
`

const DesktopAuthor = styled(Author)`
    .Subreddit:hover {
        text-decoration: underline;
    }
    color: ${({ theme }) => theme.app.colors.color};
    padding: 0em 0.3em 0em 0.3em;
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
    border: none;
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
