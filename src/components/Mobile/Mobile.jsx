import Header from "./NavBar/MobileNavBar";
import MobilePosts from "./Posts/MobilePosts";
import MobileMenu from "./Menu/MobileMenu";
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
    <MobileMenu menuIsOpen={menuIsOpen} >
        <MobileMenuListItems />
    </MobileMenu>
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
