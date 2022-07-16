import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import NavBar from './NavBar/NavBar'
import { lightTheme, darkTheme, DesktopThemeType } from './themes'
import { Posts } from './Posts/Posts'
import { Menu } from './Menu/Menu'
import MenuItems from './Menu/MenuItems'
import { Layout } from './Layout/Layout'

const Desktop = () => {
  return (
    <Layout>
      <Container>
        <Posts />
      </Container>
    </Layout>
  )
}

const Container = styled.div<{ theme: DesktopThemeType }>`
  top: 0px;
  background-color: ${({ theme }) => theme.app.colors.body};
`

export default Desktop
