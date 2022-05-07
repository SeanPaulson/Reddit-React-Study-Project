import styled from 'styled-components';

const MobileMenu_Container = styled.div`
${({ menuIsOpen }) => menuIsOpen ? 'display: block' : 'display: none'};
position: absolute;
color: white;
background-color: #1d2535;
min-height: 400px;
min-width: 100%;
z-index: 500;
 `
export default MobileMenu_Container;