import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chip from "@mui/material/Chip";
import React from "react";

import { Author } from "../../PostUtils/Author";

const PostHeader : React.FC = () => {
  return (
    <Container>
      <Author Subreddit="Author" />
      <StyledChip label="Join" />
      <MoreHorizIcon className="moreHorizIon" sx={{ fontSize: "15px" }} />
    </Container>
  );
};

const StyledChip = styled(Chip)`
  && {
    background-color: ${({ theme }) => theme.app.colors.btn_blue};
    font-size: 12;
    font-weight: 600;
    height: 23px;
    color: white;
    margin-left: auto;
  }

  & span {
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  & .${'moreHorizIon'} {
    color: ${({ theme }) => theme.app.colors.lightgray};
  }
  
`;

export default PostHeader;
