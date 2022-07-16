import React from 'react'
import styled from 'styled-components'

import CommentsIMG from "../../images/Comments"
import { CommentsProps } from './PostUtils.mode'

export const Comments : React.FC<CommentsProps> = ({count,className}) => {
  return (
    <Info className={className}>
        <CommentsIMG color="grey" />
        <Count>{count}</Count>
    </Info>
  )
}

const Count = styled.p`
    color: grey;
    font-weight: 700;
    font-size: 1em;
    margin-left: 0.3em;
    margin-right: 0.3em;
    margin: 0px;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    height: 4vh;
    border-radius: 15px;
    color: grey;
    gap: 5px;
`
