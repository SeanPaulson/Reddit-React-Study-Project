import { KeyboardArrowDown, LocalFireDepartment } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 10vh;
    flex-direction: column;
    gap: 1em;
    padding: 1em 1em 0.1em 1em;
    background-color: white;
`

const Title = styled.h1`
    font-size: 26px;
    margin: 0px;
`

const Sort = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    color: grey;
    height: 20%;
`

const StyledButton = styled.div`
    display:flex;
    align-items: center;
    gap: 0.2em;
`

const CAT = styled.p`
    font-size: 15px;
`

const Topics = styled.div`
    display: ${prop => prop.open};
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 0px 1000px black;
    padding: 1em;
    gap: 1em;
`

const TopicItems = styled.button`
    width: 20%;
    font-size: 17px;
    border: none;
    background: none;
`

export default function Category({category}) {
    const [menuStatus, setMenuStatus] = useState(false)

    const handleCategory = (e) => {
        console.log(e.target)
    }

    useEffect(() => {},[menuStatus])

  return (
    <Container>
        <Title>Popular</Title>
        <Sort>
            <StyledButton onClick={() => menuStatus ? setMenuStatus(false) : setMenuStatus(true)} >
                <CAT>{category}</CAT>
                <KeyboardArrowDown />
            </StyledButton>
            <Topics
            open={menuStatus ? "flex" : "none"}
            >
                <TopicItems onClick={(e) => {handleCategory(e)}}>Hot</TopicItems>
                <TopicItems onClick={(e) => {handleCategory(e)}}>Top</TopicItems>
            </Topics>
        </Sort>
    </Container>
  )
}
