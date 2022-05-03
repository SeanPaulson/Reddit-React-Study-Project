import styled from "@emotion/styled";
import SearchBar from "../SearchBar/SearchBar";

const UL = styled.ul`
    padding: 10px 16px 4px;
`

const MobileMenuListItems = (props) => {
    return ( 
        <UL>
           <SearchBar /> 
           <p>Another list item component</p>
        </UL>
     );
}
 
export default MobileMenuListItems;