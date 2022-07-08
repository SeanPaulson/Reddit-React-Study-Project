import { EventHandlers } from "@mui/base";
import { KeyboardArrowDown, LocalFireDepartment } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { MouseEventHandler } from "react";
import styled from "styled-components";

import { ThemeType } from "../../../themes";
import { CategoryProps } from "./Category.model";

const Category : React.FC<CategoryProps> = ({ category }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>):void => {
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
            onClick={handleCategory}
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

const Title = styled.h1<{theme: ThemeType}>`
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

const Topics = styled.div<{ open: string,theme: ThemeType}>`
  display: ${(prop) => prop.open};
  flex-direction: column;
  box-shadow: 0px 0px 1000px black;
  padding: 1em;
  gap: 1em;
  background-color: ${({ theme }) => theme.app.colors.post_bg};
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
`;

const TopicItems = styled.button<{theme: ThemeType}>`
  width: 20%;
  font-size: 17px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.app.colors.color};
`;

const Container = styled.div<{theme: ThemeType}>`
  display: flex;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
  background-color: ${({ theme }) => theme.app.colors.post_bg};
`;

export default Category