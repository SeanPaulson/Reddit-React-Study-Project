import React from 'react'
import styled from 'styled-components'
import CommentsIMG from "../../images/Comments"

const Count = styled.p`
    color: grey;
    font-weight: 700;
    font-size: 12px;
    margin-left: 0.3em;
    margin-right: 0.3em;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    height: 4vh;
    border-radius: 15px;
    color: grey;
    font-size: 15px;
`

export const Comments = ({commentsCount,className}) => {
  return (
    <Info className={className}>
        <CommentsIMG color="grey" />
        <Count>{commentsCount}</Count>
    </Info>
  )
}
