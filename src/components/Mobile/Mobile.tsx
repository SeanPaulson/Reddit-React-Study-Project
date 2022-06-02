import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from '../../themes';
import { Header } from "./Header/Header";
import MobilePosts from "./Posts/MobilePosts";
import { StyledMenu } from "./Menu/Menu";
import MobileMenuListItems from "./Menu/MobileMenuListItems";
import Category from "./Category/Category";
import { StyledContainer } from "./styles/StyledContainer";
import { boolean } from "joi";




function Mobile() {

  const [menuIsOpen, setMenuIsopen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuIsopen(!menuIsOpen);
  }

  const [theme, setTheme] = useState('lightTheme');

  const toggleTheme = () => {
    theme === 'lightTheme' ? setTheme('darkTheme') : setTheme('lightTheme');
  }

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <StyledContainer>
        <Header toggleMenu = {toggleMenu}/>
        <StyledMenu menuIsOpen={menuIsOpen} >
            <MobileMenuListItems toggleTheme={toggleTheme}/>
        </StyledMenu>
        <Category category='Category'/>
        <MobilePosts />
        <MobilePosts />
        <MobilePosts />
        <MobilePosts />
        <MobilePosts />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default Mobile;
