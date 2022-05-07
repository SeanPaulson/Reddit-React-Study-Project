import Header from "./MobileNavBar/MobileNavBar";
import Posts from "./Posts/Posts";
import MobileMenu from "./MobileMenu/MobileMenu";
import styled from "styled-components";
import { useState } from "react";
import MobileMenuListItems from "./MobileMenu/MobileMenuListItems";
// import { PropaneSharp } from "@mui/icons-material";

// const [menu__btnIsOpen-m, menu__btnIsOpen-m] = useState();
const Container = styled.div`
top: 0px;
`;

function App() {

  const [menuIsOpen, setMenuIsopen] = useState(false);

  const toggleMenu = () => {
    setMenuIsopen(prev => setMenuIsopen(!prev))
      
  }



  return (
    <Container>
    <Header toggleMenu = {toggleMenu}/>
    <MobileMenu menuIsOpen={menuIsOpen} >
        <MobileMenuListItems />
    </MobileMenu>
    <Posts />
    </Container>
  );
}

export default App;
