import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./NavBar/NavBar";
import LoginModal from '../LoginModal/LoginModal';
import { lightTheme, darkTheme, DesktopThemeType } from "./themes";
import { Posts } from "./Posts/Posts";
import { Menu } from "./Menu/Menu";
import MenuItems from "./Menu/MenuItems";
import { Layout } from './Layout/Layout'

const Desktop = () => {
  const [menuIsOpen, setMenuIsopen] = useState(false);

  const toggleMenu = () => {
    setMenuIsopen((prev) => prev ? false : true);
  };

  const [isPopup, setIspopup] = useState(false);

  const showLoginModal = () => {
    setIspopup((prev) => prev ? false : true);
  };

  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = (isChecked: boolean) => {
    isChecked ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
    <Layout>
      <Container>
        <LoginModal showLoginModal={showLoginModal} isPopup={isPopup} />
        <NavBar handleEvent={toggleMenu} toggleModal={showLoginModal}/>
        <Menu
          currTheme={theme === "lightTheme" ? lightTheme : darkTheme}
          isMenuOpen={menuIsOpen}
        >
          <MenuItems
            currTheme={theme === "lightTheme" ? lightTheme : darkTheme}
            handleChange={toggleTheme}
          />
        </Menu>
        <Posts />
      </Container>
    </Layout>
  )
}

const Container = styled.div<{ theme: DesktopThemeType }>`
  top: 0px;
  background-color: ${({ theme }) => theme.app.colors.body};
`

export default Desktop;
