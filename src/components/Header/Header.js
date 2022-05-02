import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RedditLogo from '../RedditLogo';

const Container = styled.div`
    
    
`;

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none; 
`;

const Header = (props) => {
  return (
      <Container>
        <nav>
          <List>
            <li><RedditLogo></RedditLogo></li>
            <li><input></input></li>
            <li>profile</li>
            <li><KeyboardArrowDownIcon /></li>
          </List>
        </nav>
      </Container>
  );
};

export default Header;
