import styled from "styled-components";
import Logo from "../../../images/Logo";
import { SearchBar } from "../../SearchBar/SearchBar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Chip } from "@mui/material";

const Header = styled.header`
  background-color: white;
`;
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
  &:hover {
    border-radius: 5px;
    border-color: lightgray;
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
  background-color: #f6f7f8;
  fill: black;
  border: 1px solid lightgray;
  border-radius: 5px;
  flex-grow: 1;
  && {
    margin-bottom: 0;
  }
  &:hover {
    background-color: white;
    border: 1px solid blue;
    border-radius: 5px;
  }
`;

const StyledChip = styled(Chip)`
    && color: "red";
    font-size: 12;
    font-weight: "600";
    height: "30px";
    background-color: "#0079d3";
    &:hover {
        background-color: #33a8ff;
        cursor: pointer;
    }
`

const NavBar = (props) => {
  return (
    <Header>
      <nav>
        <UL>
          <Button>
            <Logo width="2rem" />
          </Button>
          <StyledSearchBar />
          <StyledChip label="Sign Up" />
          <HoverButton>
            <PersonOutlineOutlinedIcon sx={{ color: "gray", width: "2rem" }} />
            <ExpandMoreOutlinedIcon sx={{ color: "gray" }} />
          </HoverButton>
        </UL>
      </nav>
    </Header>
  );
};

export default NavBar;
