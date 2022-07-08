import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import NavBar from "./NavBar/NavBar";
import { lightTheme, darkTheme, DesktopThemeType } from "./themes";
import { Posts } from "./Posts/Posts";
import { Menu } from "./Menu/Menu";
import MenuItems from "./Menu/MenuItems";

const Desktop = () => {
  const [menuIsOpen, setMenuIsopen] = useState(false);

  const toggleMenu = () => {
    setMenuIsopen((prev) => prev ? false : true);
  };


  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = (isChecked) => {
    isChecked ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <Container>
        <NavBar handleEvent={toggleMenu} />
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
    </ThemeProvider>
  );
}

const Container = styled.div<{theme: DesktopThemeType}>`
  top: 0px;
  background-color: ${({ theme }) => theme.app.colors.body};
`;

export default Desktop;
