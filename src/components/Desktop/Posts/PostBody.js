import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1.5vh;
    align-items:center;
    justify-content: space-between;
`

const ContentTitle = styled.p`
    margin: 0px;
    font-weight: 600;
    align-Self: flex-start;
`

const ContentImage = styled.img`
    width: 100%;
    height: 100%;
`

export const PostBody = ({Title,Thumbnail, Image}) => {
  return (
    <Container>
        <ContentTitle>{Title}</ContentTitle>
        {Thumbnail === "self" ? <></> : <ContentImage src={Image} />}
    </Container>
  )
}
