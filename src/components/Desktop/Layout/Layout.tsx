import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Menu } from '../Menu/Menu'
import { lightTheme, darkTheme, DesktopThemeType } from '../themes'
import NavBar from '../NavBar/NavBar'
import MenuItems from '../Menu/MenuItems'

export const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsopen] = useState(false)

  const toggleMenu = () => {
    setMenuIsopen((prev) => (prev ? false : true))
  }

  const [theme, setTheme] = useState('lightTheme')

  const toggleTheme = (isChecked: boolean) => {
    isChecked ? setTheme('darkTheme') : setTheme('lightTheme')
  }

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <Container>
        <Wrap>
          <NavBar handleEvent={toggleMenu} />
          <Menu
            currTheme={theme === 'lightTheme' ? lightTheme : darkTheme}
            isMenuOpen={menuIsOpen}
          >
            <MenuItems
              currTheme={theme === 'lightTheme' ? lightTheme : darkTheme}
              handleChange={toggleTheme}
            />
          </Menu>
          {children}
        </Wrap>
      </Container>
    </ThemeProvider>
  )
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1920px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.app.colors.body};
`
