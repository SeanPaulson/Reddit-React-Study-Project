import styled from "styled-components";
import { ThemeType } from "../../../themes";

export const StyledContainer = styled.div<{theme: ThemeType}>`
top: 0px;
background-color: ${({ theme }) => theme.app.colors.body};
`;