import styled from 'styled-components';

export const StyledMenu = styled.div`
${({ menuIsOpen }) => menuIsOpen ? 'display: block' : 'display: none'};
position: absolute;
color: white;
background-color: #1d2535;
min-height: 400px;
min-width: 100%;
z-index: 9999;
 `;
