import styled from "styled-components";
import RedditLogo from "../../../images/RedditLogo";
import { ThemeType } from "styled-components";
import HamburgerMenuSVG from "../../../images/HamburgerMenu";

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
            <button onClick={() => toggleMenu()} >
              <HamburgerMenuSVG />
            </button>
          </li>
        </ul>
      </nav>
    </AppHeader>
  );
};

const AppHeader = styled.header<{theme: ThemeType}>`
  background-color: ${({ theme }) => theme.app.colors.header};
  color: ${({ theme }) => theme.app.colors.white};
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