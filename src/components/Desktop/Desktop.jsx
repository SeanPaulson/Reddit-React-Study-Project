import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./NavBar/NavBar";
import { lightTheme, darkTheme } from './themes';
import { Posts } from "./Posts/Posts";
// import { useState } from "react";

const Container = styled.div`
top: 0px;
background-color: ${({ theme }) => theme.app.colors.body};
`;

function Desktop() {

  // const [menuIsOpen, setMenuIsopen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuIsopen(prev => setMenuIsopen(!prev))
      
  // }

  const [theme, setTheme] = useState('darkTheme');

  const toggleTheme = () => {
    theme === 'lightTheme' ? setTheme('darkTheme') : setTheme('lightTheme');
  }

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <Container>
          <NavBar />
          <Posts />
      </Container>
    </ThemeProvider>
  );
}

export default Desktop;
