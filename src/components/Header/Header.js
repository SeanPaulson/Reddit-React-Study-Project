import styled from "styled-components";
import RedditLogo from "../RedditLogo";
import HamburgerMenu from "../../HamburgerMenu";

const App_Header = styled.header`
    background-color: #1d2535;
    color: white;
  `;

  const List_Container = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `;

  const Menu__Btn = styled.ul`
    align-self: center;
    flex-basis: 2rem;
    margin-right: 1rem;
  `;

const Header = ({ toggleMenu }) => {
  
  return (
    <App_Header>
      <nav>
        <List_Container>
          <li>
            <RedditLogo color="white"></RedditLogo>
          </li>
          <Menu__Btn>
            <HamburgerMenu toggleMenu={toggleMenu} color="white" />
          </Menu__Btn>
        </List_Container>
      </nav>
    </App_Header>
  );
};

export default Header;
