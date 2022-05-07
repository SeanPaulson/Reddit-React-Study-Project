import styled from "styled-components";
import { useState } from "react";

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
        <div>lol</div>
    </Container>
  );
}

export default App;
