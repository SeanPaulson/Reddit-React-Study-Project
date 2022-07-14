import styled from "styled-components";
import { PersonOutlineOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import { Chip } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import { SearchBar } from "../../SearchBar/SearchBar";
import Logo from "../../../images/Logo";
import { NavBarProps } from "./NavBar.model";

const NavBar : React.FC<NavBarProps> = ({ handleEvent, toggleModal }) => {



  const mobileViewMatch = useMediaQuery('(min-width: 615px)');
  return (
    <Header>
      <nav>
        <UL>
          <Button>
            <Logo width="2rem" />
          </Button>
          <StyledSearchBar />
          {mobileViewMatch && <LoginChip label="Log In" onClick={toggleModal}/>}
          {mobileViewMatch && <SignupChip label="Sign Up" onClick={toggleModal}/>}
          <HoverButton onClick={handleEvent}>
            <PersonOutlineOutlined sx={{ color: "gray", width: "2rem" }} />
            <ExpandMoreOutlined sx={{ color: "gray" }} />
          </HoverButton>
        </UL>
      </nav>
    </Header>
  );
};

const Button = styled.button`
  background-color: inherit;
  border-style: none;
  border-color: white;
  border-width: 1px;
  margin: 0;
  padding: 3px 0;
  &:hover {
    border-radius: 5px;
    border-color: lightgray;
  }
`;

const HoverButton = styled(Button)`
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.app.colors.header};
  &:hover {
    border-radius: 5px;
    border-color: lightgray;
    cursor: pointer;
  }
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0.4rem 1rem;
`;

const StyledSearchBar = styled(SearchBar)`
  background-color: ${({ theme }) => theme.app.colors.lightgray};
  fill: black;
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
  border-radius: 5px;
  flex-grow: 1;
  && {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.app.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.app.colors.default};
    border-radius: 5px;
  }
`;
const SignupChip = styled(Chip)`
    && {
      color: ${({ theme }) => theme.app.colors.body};
      font-size: 16px; 
      font-weight: 500;
      height: 30px;
      background-color: ${({ theme }) => theme.app.colors.btn_blue};
    }
    &:hover {
        background-color: #33a8ff;
        cursor: pointer;
    }
`
const LoginChip = styled(Chip)`
    && {
      color: ${({ theme }) => theme.app.colors.btn_blue};
      font-size: 16px; 
      font-weight: 500;
      height: 30px;
      background-color: ${({ theme }) => theme.app.colors.post_bg};
      border: 1px solid ${({ theme }) => theme.app.colors.btn_blue};
    }
    &:hover {
        background-color: #cce4f6;
        cursor: pointer;
    }
`

const Header = styled.header`
  background-color: ${({ theme }) => theme.app.colors.header};
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export default NavBar;