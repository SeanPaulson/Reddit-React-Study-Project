import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../../themes';
import NavBar from "./NavBar/NavBar";
import { Posts } from "./Posts/Posts";
import { Container } from './Container';
// import { useState } from "react";



function Desktop() {

  // const [menuIsOpen, setMenuIsopen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuIsopen(prev => setMenuIsopen(!prev))
      
  // }



  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <NavBar />
        <Posts />
      </Container>
    </ThemeProvider>
  );
}

export default Desktop;
