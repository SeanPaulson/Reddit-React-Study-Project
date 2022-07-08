import React from 'react'
import styled from 'styled-components'

import UpVote from '../../images/UpVote';
import DownVote from "../../images/DownVote"
import {FormatNumbers} from "../../utils"
import { VotesProps } from './PostUtils.mode';

export const Votes : React.FC<VotesProps> = ({count, color,className}) => {

    return (
        <Wrapper className={className} >
            <UpVotes className="UpVotes" color={color || 'gray'} />
            <Count className="Count">{FormatNumbers(count)}</Count>
            <DownVotes className="UpVotes" color="grey" />
        </Wrapper>
    )
}

const Count = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 14px;
`

const UpVotes = styled(UpVote)`
    padding: 0.3em;
`

const DownVotes = styled(DownVote)`
    padding: 0.3em;
`

export const Wrapper = styled.div`
    display:flex;
    align-items: center;
    padding: 0em 0.5em;
    height: 3vh;
    border-radius: 15px;
    color: grey;
    font-size: 15px;
    ${Count}:not(:first-child) {
        margin-left: 0.3em;
        margin-right: 0.3em;
    }
`