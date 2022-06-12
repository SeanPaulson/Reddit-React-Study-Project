import styled from "styled-components";

export const Menu = styled.div`
${({ isMenuOpen }) => isMenuOpen ? 'display: block' : 'display: none'};
  position: fixed;
  top: 50px;
  right: 20px;  
  color: ${({ theme }) => theme.app.colors.color};
  background-color: ${({ theme }) => theme.app.colors.post_bg};
  border: 1px solid ${({ theme }) => theme.app.colors.gray};
  border-radius: 5px;
  min-width: 250px;
  max-width: 250px;
  z-index: 100;
`;