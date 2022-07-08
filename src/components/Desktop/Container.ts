import styled from "styled-components";
import { DesktopThemeType } from "./themes";

export const Container = styled.div<{theme: DesktopThemeType}>`
top: 0px;
background-color: ${({ theme }) => theme.app.colors.body};
`;