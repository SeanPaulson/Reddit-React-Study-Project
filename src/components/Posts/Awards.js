import React from 'react'
import styled from 'styled-components'


const Count = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 14px;
`

const Image = styled.img`
    width: 15px;
`

const Info = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #EDEFF1;
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

export const Awards = ({awardsCount, className}) => {
  return (
    <Info className={className}>
        <Image src='https://www.redditstatic.com/gold/awards/icon/gold_64.png'/>
        <Image src='https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&height=64&auto=webp&s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb'/>
        <Image src='https://www.redditstatic.com/gold/awards/icon/silver_64.png'/>
        <Count>{awardsCount}</Count>
    </Info>
  )
}
