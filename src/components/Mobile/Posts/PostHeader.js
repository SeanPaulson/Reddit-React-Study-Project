import styled from "styled-components";
import { Author } from "../../Posts/Author";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chip from "@mui/material/Chip";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  
`;

const StyledChip = styled(Chip)`
  && {
    background-color: #0079d3;
    font-size: 12;
    font-weight: 600;
    height: 23px;
    color: white;
    margin-left: auto;
  }

  & span {
  }
`;

const PostHeader = (props) => {
  return (
    <Container>
      <Author Subreddit="Author" />
      <StyledChip label="Join" />
      <MoreHorizIcon sx={{ fontSize: "15px" }} />
    </Container>
  );
};

export default PostHeader;
