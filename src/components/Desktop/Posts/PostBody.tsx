import React from 'react'
import styled from 'styled-components'
import { DesktopThemeType } from '../themes'

import { PostBodyProps } from './DesktopPosts.model'

export const PostBody : React.FC<PostBodyProps> = ({Title,Thumbnail, Image}) => {
  return (
    <Container>
        <ContentTitle>{Title}</ContentTitle>
        {Thumbnail === "self" ? <></> : <ContentImage src={Image} />}
    </Container>
  )
}

const Container = styled.div<{theme: DesktopThemeType}>`
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1.5vh;
    align-items:center;
    background-color: ${({ theme }) => theme.app.colors.post_bg};
    padding: 0em 0.3em;
    max-height: 100%;
    max-width: 100%;
`

const ContentTitle = styled.p`
    margin: 0px;
    font-weight: 600;
    align-Self: flex-start;
`

const ContentImage = styled.img`
    max-height: 512px;
    max-width: 100%;
    object-fit: cover;
`