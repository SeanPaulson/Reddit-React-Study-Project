import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Category from "./components/Category/Category"
import MobileMenu from "./components/MobileMenu/MobileMenu";
import styled from "styled-components";
import { useState } from "react";
import { PropaneSharp } from "@mui/icons-material";

// const [menu__btnIsOpen-m, menu__btnIsOpen-m] = useState();

function App() {
  const Container = styled.div`
    top: 0px;
  `;


const [menuIsopen, setMenuIsopen] = useState(false);

const toggleMenu = () => {
    setMenuIsopen(prev => setMenuIsopen(!prev))
  console.log(menuIsopen);
}


  return (
    <div className="App">
      <Container>
        <Header 
        toggleMenu = {toggleMenu}
        />
<<<<<<< HEAD
        <Posts></Posts>
=======
        <Category />
        <Posts />
>>>>>>> origin/main
      </Container>
    </div>
  );
}

export default App;
