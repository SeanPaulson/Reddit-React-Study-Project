import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

const SubRedditTitle = styled.h5`
    font-weight: 500;
    margin: 0px;
    padding: 0;
`

const Time = styled.h5`
    color: grey;
    padding: 0;
    margin: 0;
    font-weight: 400;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
`



export const Author = ({Subreddit,className}) => {
  return (
    <Left className={className}>
    <AccountCircleIcon sx={{fontSize: "23px"}} />
    <SubRedditTitle className="Subreddit">r/{Subreddit}</SubRedditTitle>
    <CircleIcon sx={{fontSize: "5px",opacity: 0.5}} />
    <Time>5h</Time>
    </Left>
  )
}
