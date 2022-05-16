import styled from "styled-components";
import RedditLogo from "../../../images/RedditLogo";
import HamburgerMenuSVG from "../../../images/HamburgerMenu";

const AppHeader = styled.header`
  background-color: #1d2535;
  color: white;
  width: 100%;
  & ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & .li__hamburgerMenu {
    align-self: center;
    flex-basis: 2rem;
    margin-right: 1rem;
  }

  & button {
    background-color: inherit;
    padding: 0;
    margin: 0;
    border: none;
  }
`;

export const Header = ({ toggleMenu }) => {
  return (
    <AppHeader>
      <nav>
        <ul>
          <li>
            <button>
              <RedditLogo color="white"></RedditLogo>
            </button>
          </li>
          <li className="li__hamburgerMenu">
            <button>
              <HamburgerMenuSVG toggleMenu={toggleMenu} color="white" />
            </button>
          </li>
        </ul>
      </nav>
    </AppHeader>
  );
};
