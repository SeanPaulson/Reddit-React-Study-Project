import { KeyboardArrowDown, LocalFireDepartment } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
  background-color: ${({ theme }) => theme.app.colors.post_bg};
`;

const Title = styled.h1`
  font-size: 26px;
  margin: 0px;
  color: ${({ theme }) => theme.app.colors.color};
`;

const Sort = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  height: 20%;
  position: fixed;
  z-index: 1000;
  top: 96px;
  left: 8px;
  right: 8px;
  width: auto;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

const CAT = styled.p`
  font-size: 15px;
  margin: 5px;
`;

const Topics = styled.div<{ open: string }>`
  display: ${(prop) => prop.open};
  flex-direction: column;
  box-shadow: 0px 0px 1000px black;
  padding: 1em;
  gap: 1em;
  background-color: ${({ theme }) => theme.app.colors.post_bg};
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
`;

const TopicItems = styled.button`
  width: 20%;
  font-size: 17px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.app.colors.color};
`;

export default function Category({ category }) {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleCategory = (e: object) => {
    /* console.log(e.target) */
  };

  useEffect(() => {}, [menuStatus]);

  return (
    <Container>
      <Title>Popular</Title>
      <Sort>
        <StyledButton
          onClick={() =>
            menuStatus ? setMenuStatus(false) : setMenuStatus(true)
          }
        >
          <CAT>{category}</CAT>
          <KeyboardArrowDown />
        </StyledButton>
        <Topics open={menuStatus ? "flex" : "none"}>
          <TopicItems
            onClick={(e) => {
              handleCategory(e);
            }}
          >
            Hot
          </TopicItems>
          <TopicItems
            onClick={(e) => {
              handleCategory(e);
            }}
          >
            Top
          </TopicItems>
        </Topics>
      </Sort>
    </Container>
  );
}
