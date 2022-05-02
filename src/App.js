import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import styled from "styled-components";
import { useState } from "react";
import { PropaneSharp } from "@mui/icons-material";

// const [menu__btnIsOpen-m, menu__btnIsOpen-m] = useState();

function App() {
  const Container = styled.div`
    top: 0px;
  `;


const [menuIsopen, setMenuIsopen] = useState(true);

const toggleMenu = () => {
  if(!menuIsopen) {
    setMenuIsopen(!menuIsopen)
  }
  console.log(menuIsopen);
}


  return (
    <div className="App">
      <Container>
        <Header 
        toggleMenu = {toggleMenu}
        />
        <Posts></Posts>

      </Container>
    </div>
  );
}

export default App;
