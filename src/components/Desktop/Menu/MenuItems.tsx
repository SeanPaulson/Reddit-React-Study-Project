import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { signOut, useSession } from 'next-auth/react'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Switch,
} from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { MenuItemsProps } from './Menu.model'

const MenuItems: React.FC<MenuItemsProps> = ({ handleChange }) => {
  const { data: session, status } = useSession()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <UL>
      <ListItemButton disableRipple={true} onClick={handleClick}>
        <ListItemText primary="Settings" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse component="div" in={open} unmountOnExit>
        <List className="subList">
          <ListItemButton disableRipple={true}>
            <ListItemText primary="Dark Mode" />
            <Switch onChange={(e) => handleChange(e.target.checked)} />
          </ListItemButton>
        </List>
      </Collapse>
      {session ? (
        <ListItemButton onClick={() => signOut()}>logout</ListItemButton>
      ) : (
        <p>login</p>
      )}
    </UL>
  )
}

const UL = styled(List)`
  color: ${({ theme }) => theme.app.colors.color};
  font-size: 14px;
  & .subList {
    padding: 0;
    height: fit-content;
    display: flex;
  }

  & .login {
    border-top: 1px solid ${({ theme }) => theme.app.colors.gray};
  }
`

export default MenuItems
