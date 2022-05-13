import SearchImgSvg from '../../images/SearchImgSvg';
import styled from "@emotion/styled";

const SearchDiv = styled.div`
    display: block;
    margin-bottom: 20px;
`
const StyledInput = styled.input`
    background-color: inherit;
    border-style: none;
    flex: 1;
    color: lightgray;
    text-overflow: ellipsis;
    font-size: 1rem;
    &:focus {
    outline: none !important;
    border-color: none;
  }
`

const StyledLabel = styled.label`
    -ms-flex-align: center;
    align-items: center;
    /* background-color: rgba(246,247,248,.1); */
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    gap: 0.4em;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    height: 32px;
    padding: 0 12px;
`

export const SearchBar = ({className}) => {
  
  return (
      <SearchDiv className={className} >
        <StyledLabel >
          <SearchImgSvg className={className}/>
          <StyledInput placeholder="Search reddit"/>
        </StyledLabel>
      </SearchDiv>
  )
}

  SearchBar.label = StyledLabel;
  SearchBar.input = StyledInput;
  SearchBar.wrapper = SearchDiv;

