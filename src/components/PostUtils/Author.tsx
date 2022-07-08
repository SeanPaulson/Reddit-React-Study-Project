import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

import { AuthorProps } from './PostUtils.mode';

export const Author : React.FC<AuthorProps> = ({ Subreddit }) => {

  return (
    <Left >
    <AccountCircleIcon sx={{fontSize: "23px"}} />
    <SubRedditTitle >r/{Subreddit}</SubRedditTitle>
    <CircleIcon sx={{fontSize: "5px",opacity: 0.5}} />
    <Time>5h</Time>
    </Left>
  )
}

const SubRedditTitle = styled.h5`
    font-weight: 500;
    margin: 0px;
    padding: 0;
    color: ${({ theme }) => theme.app.colors.author_color};
`

const Time = styled.h5`
    padding: 0;
    margin: 0;
    font-weight: 400;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
    & svg {
      fill: ${({ theme }) => theme.app.colors.color}
      }
`
