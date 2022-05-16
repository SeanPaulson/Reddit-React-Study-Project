import { Header } from "./Header/Header";
import MobilePosts from "./Posts/MobilePosts";
import { StyledMenu } from "./Menu/Menu.styled";
import styled from "styled-components";
import { useState } from "react";
import MobileMenuListItems from "./Menu/MobileMenuListItems";
import Category from '../Mobile/Category/Category'

const Container = styled.div`
top: 0px;
`;

function Mobile() {

  const [menuIsOpen, setMenuIsopen] = useState(false);

  const toggleMenu = () => {
    setMenuIsopen(prev => setMenuIsopen(!prev))
  }



  return (
    <Container>
    <Header toggleMenu = {toggleMenu}/>
    <StyledMenu menuIsOpen={menuIsOpen} >
        <MobileMenuListItems />
    </StyledMenu>
    <Category category='Category'/>
    <MobilePosts />
    <MobilePosts />
    <MobilePosts />
    <MobilePosts />
    <MobilePosts />
    </Container>
  );
}

export default Mobile;
