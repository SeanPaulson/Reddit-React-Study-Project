import styled from "styled-components";
import RedditLogo from "../../images/RedditLogo";
import HamburgerMenu from "../../images/HamburgerMenu";

const AppHeader = styled.header`
    background-color: #1d2535;
    color: white;
  `;

  const ListContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `;

  const MenuBtn = styled.li`
    align-self: center;
    flex-basis: 2rem;
    margin-right: 1rem;
  `;

const Header = ({ toggleMenu }) => {
  
  return (
    <AppHeader>
      <nav>
        <ListContainer>
          <li>
            <RedditLogo color="white"></RedditLogo>
          </li>
          <MenuBtn>
            <HamburgerMenu toggleMenu={toggleMenu} color="white" />
          </MenuBtn>
        </ListContainer>
      </nav>
    </AppHeader>
  );
};

export default Header;
