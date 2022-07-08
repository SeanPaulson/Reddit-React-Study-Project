import { DesktopThemeType } from "../themes";

export interface MenuProps {
    isMenuOpen: boolean,
    currTheme?: DesktopThemeType,
}

export interface MenuItemsProps {
    handleChange: (isChecked: HTMLInputElement["checked"]) => void,
    currTheme?: DesktopThemeType,
}