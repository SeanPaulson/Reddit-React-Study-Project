import styled from "@emotion/styled";
import Explore from "../../../images/Explore"
import Settings from "../../../images/Setting"
import HelpCenter from "../../../images/HelpCenter"
import TOS from "../../../images/TOS"
import { SearchBar } from "../../SearchBar/SearchBar";
import { useState } from "react";

const UL = styled.ul`
    padding: 10px 16px 4px;
    & button {
        background-color: inherit;
        padding: 0;
        margin: 0;
        border-style: none;
        color: inherit;
    }
`

const Listitem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.1em;
    width: 100%;
    justify-content: flex-start;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7em;
    width: 100%;
    justify-content: flex-start;
`

const DropDownTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7em;
    width: 100%;
    justify-content: flex-start;
    &::after {
        justify-self: center;
        width: 0;
        height: 0;
        content: "";
        border-width: 6px 6px 0 6px;
        border-style: solid;
        border-color: #fff transparent;
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
            -ms-transition: all .25s;
            -o-transition: all .25s;
                transition: all .25s;
    }
`

const DropDown = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    gap: 0.5em;
    width: 90%;
`

const ExploreDropDown = styled(DropDown)``
const SettingsDropDown = styled(DropDown)``
const TOSDropDown = styled(DropDown)``

const Option = styled.li`
    display: flex;
    font-size: 14px;
`

const Styledp = styled.p`
    width: 100%;
`

const StyledSearchBar = styled(SearchBar)`
    background-color: #333b4a;
    border-radius: 32px;
`
const MobileMenuListItems = ({ toggleTheme }) => {
    const [ExploreStatus, setExploreStatus] = useState(false)
    const [settingsStatus, setSettingsStatus] = useState(false)
    const [tosStatus, setTosStatus] = useState(false)

    return ( 
        <UL>
           <StyledSearchBar />
           <Listitem>
                <DropDownTitle onClick={() => ExploreStatus ? setExploreStatus(false) : setExploreStatus(true) } >
                <Explore width="18px" color="white" />
                <Styledp>Explore</Styledp>
                </DropDownTitle>
                <ExploreDropDown open={ExploreStatus} >
                    <Option>Gaming</Option>
                    <Option>Sports</Option>
                    <Option>Television</Option>
                    <Option>Celebrity</Option>
                    <Option>Business, Economics, and Finance</Option>
                    <Option>Crypto</Option>
                    <Option>More Topics</Option>
                </ExploreDropDown>
           </Listitem>
           <Listitem>
                <DropDownTitle onClick={() => settingsStatus ? setSettingsStatus(false) : setSettingsStatus(true) }>
                    <Settings width="18px" color="white" />
                    <Styledp>Settings</Styledp>
                </DropDownTitle>
                <SettingsDropDown open={settingsStatus}>
                    <button onClick={() => toggleTheme()}><Option>Dark Mode</Option></button>
                    <Option>Ask To Open In App</Option>
                </SettingsDropDown>
           </Listitem>
           <Listitem>
                <Title>
                    <HelpCenter width="18px" color="white" />
                    <Styledp>Help Center</Styledp>
                </Title>
           </Listitem>
           <Listitem>
                <DropDownTitle onClick={() => tosStatus ? setTosStatus(false) : setTosStatus(true) }>
                    <TOS width="18px" color="white" />
                    <Styledp>Terms & Policies</Styledp>
                </DropDownTitle>
                <TOSDropDown open={tosStatus} >
                    <Option>Gaming</Option>
                    <Option>Sports</Option>
                    <Option>Television</Option>
                </TOSDropDown>
           </Listitem>
        </UL>
     );
}
 
export default MobileMenuListItems;