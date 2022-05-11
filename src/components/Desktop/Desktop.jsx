import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import { Posts } from "./Posts/Posts";
// import { useState } from "react";

const Container = styled.div`
top: 0px;
`;

function Desktop() {

  // const [menuIsOpen, setMenuIsopen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuIsopen(prev => setMenuIsopen(!prev))
      
  // }



  return (
    <Container>
        <NavBar />
        <Posts />
    </Container>
  );
}

export default Desktop;
