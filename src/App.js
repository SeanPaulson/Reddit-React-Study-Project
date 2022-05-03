import Header from "./components/MobileNavBar/MobileNavBar";
import Posts from "./components/Posts/Posts";
import Category from "./components/Category/Category"
import MobileMenu from "./components/MobileMenu/MobileMenu";
import styled from "styled-components";
import { useState } from "react";
import { PropaneSharp } from "@mui/icons-material";

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
    <div className="App">
      <Container>
        <Header toggleMenu = {toggleMenu}/>
        <MobileMenu menuIsOpen={menuIsOpen} >
          create menu list component
        </MobileMenu>
        <Category />
        <Posts />
      </Container>
    </div>
  );
}

export default App;
