import { KeyboardArrowDown, LocalFireDepartment } from '@mui/icons-material'
import { Button,Menu, MenuItem } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 10vh;
    flex-direction: column;
    gap: 1em;
    padding: 1em 1em 0.1em 1em;
`

const Title = styled.h1`
    font-size: 26px;
    margin: 0px;
`

const Sort = styled.div`
    display: flex;
    color: grey;
    height: 20%;
    align-items: center;
`

const StyledButton = styled.div`
    display:flex;
    align-items: center;
    gap: 0.2em;
`

const CAT = styled.p`
    font-size: 15px;
`

const ViewChange = styled.div``

export default function Category() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Container>
        <Title>Popular</Title>
        <Sort>
            <StyledButton onClick={handleClick} >
                <LocalFireDepartment sx={{fontSize: 15}} />
                <CAT>Hot</CAT>
                <KeyboardArrowDown />
            </StyledButton>
            <Menu
            sx={{".MuiMenu-paper": {width: "100%", borderRadius: 0}}}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
                <MenuItem onClick={handleClose}><LocalFireDepartment sx={{fontSize: 15}} />Hot</MenuItem>
                <MenuItem onClick={handleClose}>Top</MenuItem>
            </Menu>
        </Sort>
        <ViewChange></ViewChange>
    </Container>
  )
}
