import React from 'react'
import { Share } from '@mui/icons-material'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import { Comments } from '../../PostUtils/Comments'
import { Votes } from '../../PostUtils/Votes'
import { PostFooterProps } from './DesktopPosts.model'
import { sizes } from '../MediaQueries'

export const PostFooter: React.FC<PostFooterProps> = ({ votes, comments }) => {
  return (
    <Footer>
      <StyledVotes count={votes} />
      <CommentsWrap>
        <Comments count={comments} />
        <Title>Comments</Title>
      </CommentsWrap>
      <Info>
        <Share />
        <Title>Share</Title>
      </Info>
    </Footer>
  )
}

const Title = styled.p`
  color: grey;
  font-weight: 600;
  font-size: 1em;
  margin: 0px;
`

const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 2vh;
  color: grey;
  font-weight: 700;
  gap: 5px;
  padding: 7px;
  border-radius: 5px;
  &:hover {
    background-color: rgb(144, 144, 144, 0.2);
  }
`

const StyledVotes = styled(Votes)`
  padding: 1em;
  display: none;
  .UpVotes {
    width: 20px;
    height: 20px;
    color: red;
    border-radius: 5px;
  }
  .UpVotes:hover {
    background-color: rgb(144, 144, 144, 0.2);
  }

  @media only screen and (max-width: ${sizes.sm}) {
    display: flex;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  color: grey;
  margin-right: auto;
  ${Title}:not(:first-child) {
    margin-left: 0.3em;
    margin-right: 0.3em;
  }
  &:hover {
    background-color: rgb(144, 144, 144, 0.2);
  }
`

const Footer = styled.div`
  display: flex;
  padding: 0.3em 0em;
  gap: 0.9em;
  align-items: center;
  font-size: 13px;

  svg {
    width: 22px;
    height: 22px;
  }
`
