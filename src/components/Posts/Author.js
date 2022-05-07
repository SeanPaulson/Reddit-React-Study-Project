import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

const SubRedditTitle = styled.h5`
    font-weight: 500;
    margin: 0px;
`

const Time = styled.h5`
    color: grey;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
    text-align: center;
`



export const Author = ({Subreddit}) => {
  return (
    <Left>
    <AccountCircleIcon sx={{fontSize: "23px"}} />
    <SubRedditTitle>r/{Subreddit}</SubRedditTitle>
    <CircleIcon sx={{fontSize: "5px",opacity: 0.5}} />
    <Time>5h</Time>
    </Left>
  )
}
